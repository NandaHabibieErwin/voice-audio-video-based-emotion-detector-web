import React from "react";
import Image from "./images/20944792.png";

function AboutMe() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className="max-w-2xl text-black mb-6 text-3xl font-bold tracking-tight leading-tight md:text-4xl xl:text-5xl">
            About Us
          </h2>
          <p className="text-gray-600 mb-6">
            This audio-based machine learning system integrates Python for backend processing and React for the frontend. The backend uses TensorFlow and Keras for building and training neural networks, PyTorch for flexible model development, and NumPy for data manipulation. The React frontend, enhanced by Axios for HTTP requests, allows users to upload audio files. These files are processed in Python, involving cleaning, feature extraction like MFCCs, and predictions using the machine learning models. Results are sent back to the frontend for display, ensuring an intuitive and interactive user experience.
          </p>
        </div>
        <div className="hidden lg:flex lg:col-span-5">
          <img src={Image} alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
