import React from "react";
import Image from "./images/2634805.jpg";

function HeroSection() {
  return (
    <section class="bg-[#E7ECFF]">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <p class="max-w-2xl text-gray-400 mb-4 text-[20px] font-thin tracking-tight leading-none md:text-[25px] xl:text-[30px] ">
            Welcome
          </p>
          <h1 class="max-w-2xl text-[#091133] mb-4 text-4xl xl:pb-[22px] font-medium tracking-tight leading-[66px] xl:leading-[66px] md:text-5xl xl:text-6xl ">
            Sound Based Emotion Classification System
          </h1>
          <a
            href="#Predict"
            class="inline-flex items-center w-[189px] h-[49px] justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#111B47] hover:bg-black focus:ring-4 focus:ring-primary-300 "
          >
            Start Predicting
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#AboutMe"
            class="inline-flex items-center w-[189px] h-[49px]  justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-[#111B47] rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
          >
            About Us
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={Image} alt="mockup" class="relative z-10" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
