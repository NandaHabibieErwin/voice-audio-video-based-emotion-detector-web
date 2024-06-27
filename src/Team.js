import React from "react";
import blackjack from "./images/blackjack.JPG";
import deno from "./images/deno.jpg";
import MMZ from "./images/MMZ.jpeg";
import DNS from "./images/DNS.jpg";
import MDF from "./images/MDF.jpg";


const Card = ({ image, name, id, description, link }) => {
  return (
    <div className="max-w-sm w-full mx-auto place-self-center bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
      <a href={link || '#'}>
        <img
          className="w-full h-56 object-cover hover:opacity-90 transition-opacity duration-300"
          src={image}
          alt="Profile Image"
        />
      </a>
      <div className="p-6">
        <a href={link || '#'}>
          <h5 className="text-center text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-1 hover:text-blue-500 transition-colors duration-300">
            {name}
          </h5>
          <h6 className="text-center text-sm md:text-md font-medium tracking-tight text-gray-600 mb-4">
            {id}
          </h6>
        </a>
        <p className="text-center text-sm md:text-md text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

function Team() {
  return (
    <div>
      <h1 className="mb-2 text-[4xl] font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-[36px]">
        Team Biodata
      </h1>
      <section className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          image={MMZ}
          name="Muhammad Mahrus Zain, S.S.T., M.T.I."
          id="169318"
          description="IoT, Application Development, Data Science"
        />
        <Card
          image={DNS}
          name="Dini Nurmalasari, S.T., M.T."
          id="048108"
          description="Developer and Administration Database Oracle, Develop Mobile Application"

        />
        <Card
          image={MDF}
          name="Mardhiah Fadli, S.T., M.T."
          id="078306"
          description="Visual Programming, Project Management"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 justify-items-center">
        <Card
          image={blackjack}
          name="Nanda Habibie Erwin"
          id="2257301100"
          description="Project Manager, Frontend Developer, Machine Learning Engineer, UI/UX Designer, System Analyst"
          link="https://github.com/NandaHabibieErwin"
        />
        <Card
          image={deno}
          name="M Denoia Zulfa"
          id="2257301074"
          description="Assistant Manager, System Analyst, UI/UX Designer"
        />
      </div>
      </section>
    </div>
  );
}

export default Team;
