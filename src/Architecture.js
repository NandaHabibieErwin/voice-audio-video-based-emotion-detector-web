import React from "react";
import datasetIcon from './images/dataset.png';
import audioProcessingIcon from './images/audio.png'; 
import imageProcessingIcon from './images/image.png'; 
import videoProcessingIcon from './images/video.png'; 
import limitationIcon from './images/limit.png';

function Architecture() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-10">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">System Overview</h1>
          <p className="text-lg text-gray-600">A detailed look at the workings of our emotion classification system</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 transition transform hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center mb-6">
            <img src={datasetIcon} alt="Dataset Icon" className="h-12 w-12 mr-4" />
            <h2 className="text-4xl font-semibold text-gray-900">Dataset</h2>
          </div>
          <p className="text-gray-700 mb-3">
            The model adopted in this project is an Emotion Classifier trained with audio files from the RAVDESS dataset and has an overall F1 score of.
          </p>
          <p className="text-gray-700 mb-5">
            The samples include: 1,440 speech files and 1,012 song files from RAVDESS. This dataset includes recordings of 24 professional actors (12 female, 12 male), vocalizing two lexically-matched statements in a neutral North American accent. Speech includes calm, happy, sad, angry, fearful, surprise, and disgust expressions, and song contains calm, happy, sad, angry, and fearful emotions. Each file was rated 10 times on emotional validity, intensity, and genuineness. Ratings were provided by 247 individuals who were characteristic of untrained adult research participants from North America. A further set of 72 participants provided test-retest data. High levels of emotional validity, inter-rater reliability, and test-retest intra-rater reliability were reported.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 transition transform hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center mb-6">
            <img src={audioProcessingIcon} alt="Audio Processing Icon" className="h-12 w-12 mr-4" />
            <h2 className="text-4xl font-semibold text-gray-900">Audio Prediction</h2>
          </div>        
          <p className="text-gray-700 mb-4">
            When a user uploads an audio file, the system initiates by sending the file to a Python backend for processing. If the user opts to record audio directly within the application, the system utilizes the MediaRecorder API to capture the audio input. The recorded audio is stored in chunks, which are then converted to MP3 format using the Mp3Encoder from the lamejs library. This conversion ensures that the audio is in a suitable format for further processing.
          </p>
          <p className="text-gray-700 mb-4">
            Once the audio file is ready, it is uploaded to the backend server where it undergoes several preprocessing steps. The audio data is first cleaned to remove any noise or distortions that could hinder the emotion classification accuracy. This cleaned audio file is then used to extract features, specifically the Mel-frequency cepstral coefficients (MFCCs), which are crucial for identifying the emotional content of the audio. The extracted features are reshaped and converted into a tensor format to be compatible with the PyTorch model.
          </p>
          <p className="text-gray-700 mb-4">
            The preprocessed audio features are then fed into a pre-trained emotion classification model, which has been fine-tuned with hyperparameters optimized for this task. The model performs the classification by analyzing the audio features and predicting the emotional state conveyed in the audio file. The prediction output is a set of probabilities for each possible emotion, from which the most likely emotion is determined.
          </p>
          <p className="text-gray-700 mb-4">
            The backend then returns the prediction result, including the identified emotion, the confidence level of the prediction, and a detailed breakdown of the softmax probabilities for all possible emotions. This result is displayed on the frontend, where the user can see the predicted emotion along with an explanation and an emoji representing the emotion. The system also allows the user to view detailed classification probabilities, providing a comprehensive understanding of the prediction.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 transition transform hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center mb-6">
            <img src={imageProcessingIcon} alt="Image Processing Icon" className="h-12 w-12 mr-4" />
            <h3 className="text-4xl font-semibold text-gray-900">Image Prediction</h3>
          </div>
          <p className="text-gray-700 mb-4">
            The image emotion prediction model utilizes a Convolutional Neural Network (CNN) to analyze the visual content of an image. Initially, the image is passed through the CNN, which extracts relevant features. Simultaneously, facial landmarks are identified and extracted from the image. These two sets of information—CNN output and landmarks—are then concatenated and fed into a series of dense (fully connected) layers. This combined input enables the model to make a precise emotion prediction by leveraging both the raw pixel data and the geometric structure of the face.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 transition transform hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center mb-6">
            <img src={videoProcessingIcon} alt="Video Processing Icon" className="h-12 w-12 mr-4" />
            <h3 className="text-4xl font-semibold text-gray-900">Video Prediction</h3>
          </div>
          <p className="text-gray-700 mb-4">
            The combined emotion prediction model for video data operates through a multi-step process that integrates both visual and audio information. Here’s a breakdown of the process:
          </p>
          <p className="text-gray-700 mb-4">
            1. <strong>Video Segmentation:</strong> The video is segmented into shorter clips of a specified length (VIDEO_ANALYSE_WINDOW_SECS seconds).
          </p>
          <p className="text-gray-700 mb-4">
            2. <strong>Audio Extraction:</strong> Audio tracks are extracted from each of these video segments.
          </p>
          <p className="text-gray-700 mb-4">
            3. <strong>Audio Processing:</strong> The extracted audio is processed through the pre-trained audio model to derive initial emotion predictions. Additionally, the audio undergoes transcription followed by sentiment and emotion analysis of the transcript, providing textual sentiment information.
          </p>
          <p className="text-gray-700 mb-4">
            4. <strong>Frame Rate Reduction:</strong> To manage computational load, the frame rate of the video is reduced to a predefined rate (FRAME_RATE frames per second).
          </p>
          <p className="text-gray-700 mb-4">
            5. <strong>Image Processing:</strong> Each frame is passed through the previously described image model. The image model’s outputs for each frame are organized into a time series.
          </p>
          <p className="text-gray-700 mb-4">
            6. <strong>Temporal Analysis:</strong> The time series data from the image model is fed into Long Short-Term Memory (LSTM) layers. These layers are adept at capturing temporal dependencies and patterns across the frames.
          </p>
          <p className="text-gray-700 mb-4">
            7. <strong>Concatenation and Fusion:</strong> The results from the LSTM layer, the audio CNN model, and the sentiment analysis are concatenated.
          </p>
          <p className="text-gray-700 mb-4">
            8. <strong>Final Prediction:</strong> This comprehensive set of features is then passed through additional dense layers to produce the final emotion prediction, combining insights from visual, auditory, and textual data.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center mb-6">
            <img src={limitationIcon} alt="Limitation Icon" className="h-12 w-12 mr-4" />
            <h2 className="text-4xl font-semibold text-gray-900">Limitation</h2>
          </div>
          <p className="text-gray-700">
            This system can only detect the emotion based on the intonation and tones, and may have limitations in recognizing nuanced emotional states or emotions that are not prominently expressed in the audio data.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
