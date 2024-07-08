import React from "react";
import BackgroundImage from "./images/hero_bg.jpg"; // Add your background image here

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text visibility */}
      <div className="relative grid max-w-screen-xl px-4 py-16 mx-auto text-center lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
        <div className="place-self-center lg:col-span-12">
          <p className="max-w-2xl mx-auto text-gray-200 mb-4 text-lg font-light tracking-tight leading-none md:text-xl xl:text-2xl">
            Welcome
          </p>
          <h1 className="max-w-2xl mx-auto text-white mb-4 text-4xl xl:pb-[22px] font-bold tracking-tight leading-tight md:text-5xl xl:text-6xl">
            Emotion Classification System
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#Predict"
              className="inline-flex items-center w-[189px] h-[49px] justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-[#505DFF] hover:bg-[#313fff] focus:ring-4 focus:ring-primary-300"
            >
              Start Predicting
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#AboutMe"
              className="inline-flex items-center w-[189px] h-[49px] justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
