import React from "react";
import Image from "./images/20944792.jpg";

function AboutMe() {
  return (
    <section class="bg-white">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h2 class="max-w-2xl text-black mb-4 text-[20px] font-normal tracking-tight leading-none md:text-[25px] xl:text-[30px] ">
            About Us
          </h2>
          <p class="text-gray-500 dark:text-gray-500">
            This audio-based machine learning system integrates Python for
            backend processing and React for the frontend. The backend uses
            TensorFlow and Keras for building and training neural networks,
            PyTorch for flexible model development, and NumPy for data
            manipulation. The React frontend, enhanced by Axios for HTTP
            requests, allows users to upload audio files. These files are
            processed in Python, involving cleaning, feature extraction like
            MFCCs, and predictions using the machine learning models. Results
            are sent back to the frontend for display, ensuring an intuitive and
            interactive user experience.
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={Image} alt="mockup" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
