import React from "react";
import blackjack from "./images/blackjack.JPG";
import deno from "./images/deno.jpg";
import MMZ from "./images/MMZ.jpeg";
import DNS from "./images/DNS.jpg";
import MDF from "./images/MDF.jpg"

const TeamMember = ({ imgSrc, name, role, description }) => (
  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
    <img
      className="object-cover w-full h-56 md:h-64 xl:h-80"
      src={imgSrc}
      alt={name}
    />
    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
      <p className="mb-1 text-lg font-bold text-gray-100">{name}</p>
      <p className="mb-4 text-xs text-gray-100">{role}</p>
      <p className="mb-4 text-xs tracking-wide text-gray-400">{description}</p>
      <div className="flex items-center justify-center space-x-3">
        
      </div>
    </div>
  </div>
);

const Teams = () => {
  const teamMembers = [
    {
      imgSrc: MMZ,
      name: "Muhammad Mahrus Zain, S.S.T., M.T.I.",
      role: "Dosen Framework Lanjutan",
    },
    {
      imgSrc: DNS,
      name: "Dini Nurmalasari, S.T., M.T.",
      role: "Dosen Penambangan Data",
    },
    {
      imgSrc: MDF,
      name: "Mardhiah Fadli, S.T., M.T.",
      role: "Dosen Manajemen Project",
    },
    {
      imgSrc: blackjack,
      name: "Nanda Habibie Erwin",
      role: "Project Manager, Frontend Developer, Backend Developer, Machine Learning Engineer, UI/UX Designer",

    },
    {
      imgSrc: deno,
      name: "M Denoia Zulfa",
      role: "Assistant Manager, UI/UX Designer",
      
    }
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Welcome</span>
          </span>{" "}
          our talented team of professionals
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          This project is made possible thanks to the help of these professionals
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            imgSrc={member.imgSrc}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};


export default Teams;
