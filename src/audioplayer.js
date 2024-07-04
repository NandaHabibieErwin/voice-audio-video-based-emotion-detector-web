import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { Mp3Encoder } from "lamejs"; // Import Mp3Encoder from lamejs

function AudioPlayer() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [fileURL, setFileURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [activeTab, setActiveTab] = useState("audio"); // New state for active tab
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    return () => {
      if (fileURL) {
        URL.revokeObjectURL(fileURL);
      }
    };
  }, [fileURL]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (fileURL) {
        URL.revokeObjectURL(fileURL);
      }
      setFileURL(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setFileURL("");
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsLoading(true);
      const response = await axios.post(
        activeTab === "audio"
          ? "http://localhost:5000/upload-audio"
          : activeTab === "video"
          ? "http://localhost:5000/upload-video"
          : "http://localhost:5000/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error uploading file: ", error);
      setIsLoading(false);
    }
  };

  const handleStartRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("Media devices API not supported.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setMediaRecorder(null);
      setIsRecording(false);
    }
  };

  useEffect(() => {
    if (recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, { type: "audio/wav" });
      const reader = new FileReader();
      reader.onload = (event) => {
        const arrayBuffer = event.target.result;
        const buffer = new Int8Array(arrayBuffer);
        const mp3Data = convertToMp3(buffer);
        const mp3Blob = new Blob(mp3Data, { type: "audio/mp3" });
        const recordedFile = new File([mp3Blob], "recording.mp3", { type: "audio/mp3" });
        setFile(recordedFile);
        setFileURL(URL.createObjectURL(recordedFile));
        setRecordedChunks([]);
      };
      reader.readAsArrayBuffer(blob);
    }
  }, [recordedChunks]);

  const convertToMp3 = (buffer) => {
    const sampleRate = 44100;
    const channels = 1;
    const kbps = 128;
    const mp3encoder = new Mp3Encoder(channels, sampleRate, kbps);
    const mp3Data = [];
    const samples = new Int16Array(buffer);
    const sampleBlockSize = 1152;
    for (let i = 0; i < samples.length; i += sampleBlockSize) {
      const sampleChunk = samples.subarray(i, i + sampleBlockSize);
      const mp3buf = mp3encoder.encodeBuffer(sampleChunk);
      if (mp3buf.length > 0) {
        mp3Data.push(mp3buf);
      }
    }
    const endBuf = mp3encoder.flush();
    if (endBuf.length > 0) {
      mp3Data.push(endBuf);
    }
    return mp3Data;
  };

  const emotionEmotes = {
    "Sad/Fear": "😢",
    Neutral: "😐",
    Happy: "😊",
    Angry: "😡",
    "Surprise/Disgust": "😲",
  };

  const emotionExplanations = {
    "Sad/Fear": "Feeling sad or fearful is natural. Take time to understand your feelings, seek comfort from loved ones, and engage in activities that bring you peace.",
    Neutral: "A neutral state indicates a balanced emotion. It's a good time to focus on routine tasks and maintain your equilibrium.",
    Happy: "Happiness is a positive emotion. Share your joy with others, savor the moment, and engage in activities that you love.",
    Angry: "Anger can be intense. Try to understand the source of your anger, take deep breaths, and consider constructive ways to address the cause.",
    "Surprise/Disgust": "Surprise can be exciting or unsettling, and disgust can be a strong reaction. Reflect on the cause and respond accordingly, seeking clarity or distance if needed.",
  };

  const handleTabChange = (tab) => {
    if (isLoading) return;
    setActiveTab(tab);
    setFile(null);
    setFileURL("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r mt-5 from-[#D0D7FF] via-[#E7ECFF] to-[#E7ECFF] flex flex-col items-center justify-center p-4">
      <div className="bg-[#F7F9FF] p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#505DFF]">Emotion Prediction</h1>
        <p className="text-center text-gray-700 mb-4 dark:text-gray-400">Upload a file and start predicting</p>

        {/* Tabs */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => handleTabChange("image")}
            className={`px-4 py-2 mx-1 rounded-t-lg ${
              activeTab === "image" ? "bg-[#D0D7FF] text-[#505DFF]" : "bg-[#E7ECFF] text-gray-700"
            } ${isLoading ? "cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            Image
          </button>
          <button
            onClick={() => handleTabChange("audio")}
            className={`px-4 py-2 mx-1 rounded-t-lg ${
              activeTab === "audio" ? "bg-[#D0D7FF] text-[#505DFF]" : "bg-[#E7ECFF] text-gray-700"
            } ${isLoading ? "cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            Audio
          </button>
          <button
            onClick={() => handleTabChange("video")}
            className={`px-4 py-2 mx-1 rounded-t-lg ${
              activeTab === "video" ? "bg-[#D0D7FF] text-[#505DFF]" : "bg-[#E7ECFF] text-gray-700"
            } ${isLoading ? "cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            Video
          </button>
        </div>

        <div>
          <div className="flex items-center mt-4">
            <input
              type="file"
              accept={activeTab === "audio" ? "audio/*" : activeTab === "video" ? "video/*" : "image/*"}
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D0D7FF] file:text-[#505DFF] hover:file:bg-[#E7ECFF]"
              disabled={isLoading}
            />
            {activeTab === "audio" && (
              <button
                onClick={isRecording ? handleStopRecording : handleStartRecording}
                className="ml-2 p-2 rounded-full bg-[#505DFF] text-white hover:bg-[#7079FF] transition duration-300 ease-in-out"
              >
                {isRecording ? <FaMicrophoneSlash /> : <FaMicrophone />}
              </button>
            )}
          </div>
          <div className="flex items-center mt-4">
            {fileURL && activeTab === "audio" && (
              <audio controls className="w-full">
                <source src={fileURL} type={file?.type} />
                Your browser does not support the audio element.
              </audio>
            )}
            {fileURL && activeTab === "video" && (
              <video controls className="w-full">
                <source src={fileURL} type={file?.type} />
                Your browser does not support the video element.
              </video>
            )}
            {fileURL && activeTab === "image" && (
              <img src={fileURL} alt="Uploaded Image" className="w-full" />
            )}
          </div>
          <button
            onClick={handleUpload}
            className={`mt-4 w-full py-2 rounded-lg border-b-4 transition duration-300 ease-in-out transform hover:scale-105 ${
              file
                ? "bg-[#505DFF] text-white border-[#404BFF] hover:bg-[#7079FF]"
                : "bg-gray-400 text-gray-800 border-gray-600 cursor-not-allowed"
            }`}
            disabled={!file || isLoading}
          >
            {file ? "Predict" : `Upload a ${activeTab}`}
          </button>
        </div>

        {isLoading && (
          <div className="mt-4 text-center">
            <div className="loader border-t-4 border-[#505DFF] rounded-full w-12 h-12 mx-auto mb-4"></div>
            <p className="rainbow">Predicting...</p>
          </div>
        )}
        {result && !isLoading && (
          <div className="mt-6 p-4 bg-[#D0D7FF] rounded-lg">
            <div className="flex flex-col items-start">
              <p className="text-lg text-[#505DFF] flex items-center">
                <strong>Emotion: </strong>{" "}
                <span className="ml-2">
                  {emotionEmotes[result.emotion]} {result.emotion}
                </span>
              </p>
              <p className="text-lg text-[#505DFF] mt-2">
                <strong>Confidence: </strong> <span className="ml-2">{result.confidence}</span>
              </p>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mt-4 px-4 py-2 rounded bg-[#505DFF] text-white hover:bg-[#404BFF] transition duration-300 ease-in-out"
              >
                {showDetails ? "Hide Classification" : "Show Classification"}
              </button>
            </div>
            {showDetails && (
              <pre className="mt-4 p-2 bg-[#E7ECFF] rounded w-full overflow-auto">
                {result.softmax_probs_string}
              </pre>
            )}
            <div className="mt-4">
              <p className="text-md text-[#404BFF]">{emotionExplanations[result.emotion]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AudioPlayer;
