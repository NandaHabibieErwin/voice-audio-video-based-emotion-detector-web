import React from "react";
import blackjack from "./images/2634805.jpg";
import deno from "./images/Path.png";

function Team() {
  return (
    <div>
      <h1 class="mb-2 text-[4xl] font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-[36px]">
        Team Biodata
      </h1>
      <section class="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 flex justify-center">
      <div class="max-w-sm w-full mx-12 place-self-center bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
  <a href="#">
    <img class="w-full h-48 object-cover" src={blackjack} alt="Profile Image" />
  </a>
  <div class="p-6">
    <a href="#">
      <h5 class="text-center text-2xl font-bold tracking-tight text-gray-900 mb-1">
        Nanda Habibie Erwin
      </h5>
      <h6 class="text-center text-xl font-medium tracking-tight text-gray-600 mb-4">
        2257301100
      </h6>
    </a>
    <p class="text-center text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so
      far, in reverse chronological order.
    </p>
  </div>
</div>

        <div class="max-w-sm w-full mx-12 place-self-center bg-[#E7ECFF] border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <img class="rounded-t-lg" src={blackjack} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl text-center font-bold tracking-tight text-gray-900">
                M Denoia Zulfa
              </h5>
              <h6 class="mb-2 text-center text-xl font-medium tracking-tight text-gray-700">
                2257301100
              </h6>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
