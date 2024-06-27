import React from "react";
import Happy from './images/happy.jpg';
import Sad from './images/Sad.jpg';
import Neutral from './images/neutral.jpg';
import Fear from './images/Fear.jpg';
import Disgust from './images/Disgust.jpg';
import Angry from './images/Angry.jpg';
import Surprise from './images/Surprise.jpg';
import Other from './images/Other.jpg';

const Card = ({ imgSrc, title, description }) => {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100"
      style={{ maxHeight: '300px' }}
    >
            <img
        className="object-cover w-full h-48 rounded-t-lg md:h-48 md:w-48 md:rounded-none md:rounded-s-lg"
        src={imgSrc}
        alt={title}
        style={{ objectFit: 'cover' }}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </a>
  );
};


function Data() {
  const cardsData = [
    {
      imgSrc: Happy,
      title: "Happy",
      description:
        "deare the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imgSrc: Neutral,
      title: "Neutral",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imgSrc: Sad,
      title: "Sad",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imgSrc: Fear,
      title: "Fear",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imgSrc: Angry,
      title: "Angry",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imgSrc: Surprise,
      title: "Surprise",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imgSrc: Disgust,
      title: "Disgust",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];

  return (
    <section className="">
      <div className="max-w-screen-xl bg-[#E7ECFF] rounded-2xl px-4 py-4 my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            {/* First Column */}
            {cardsData.slice(0, 4).map((card, index) => (
              <Card
                key={index}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          <div className="space-y-4 flex flex-col justify-center">
            {/* Second Column */}
            {cardsData.slice(3).map((card, index) => (
              <Card
                key={index + 3} // Adjust key to ensure uniqueness
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Data;
