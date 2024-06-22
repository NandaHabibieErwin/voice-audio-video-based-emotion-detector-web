import React, { useState, useEffect } from "react";
import axios from "axios";

function AudioPlayer() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Clean up the object URL when the component unmounts or file changes
    return () => {
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
    };
  }, [audioURL]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    // Clean up the previous object URL if it exists
    if (audioURL) {
      URL.revokeObjectURL(audioURL);
    }
    setAudioURL(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("Uploading file");
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5000/upload-audio",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response received");
      setResult(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file: ", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-800">
          Emotion Prediction
        </h1>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
        />
        {audioURL && (
          <audio controls className="w-full mt-4">
            <source src={audioURL} type={file?.type} />
            Your browser does not support the audio element.
          </audio>
        )}
        <button
          onClick={handleUpload}
          className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg border-b-4 border-purple-700 hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Predict
        </button>
        {isLoading && (
          <div className="mt-4 text-center">
            <div className="loader border-t-4 border-purple-500 rounded-full w-12 h-12 mx-auto mb-4"></div>
            <p className="text-white">Loading...</p>
          </div>
        )}
        {result && !isLoading && (
          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <p className="text-lg text-purple-800">
              <strong>Emotion:</strong> {result.emotion}
            </p>
            <p className="text-lg text-purple-800">
              <strong>Confidence:</strong> {result.confidence}
            </p>
            <pre className="mt-4 p-2 bg-purple-100 rounded">
              {result.softmax_probs_string}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default AudioPlayer;
