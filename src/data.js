import React from "react";
import Happy from './images/happy.jpg';
import Sad from './images/Sad.jpg';
import Neutral from './images/neutral.jpg';
import Fear from './images/Fear.jpg';
import Disgust from './images/Disgust.jpg';
import Angry from './images/Angry.jpg';
import Surprise from './images/Surprise.jpg';
import Other from './images/Other.jpg';

const Card = ({ imgSrc, title, description, link }) => {
  return (
    <a
      href={link}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl md:flex-row hover:bg-gray-100"
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
        "A happy voice is typically upbeat and lively, with a warm tone that conveys positivity and enthusiasm.",
      link:"https://en.wikipedia.org/wiki/Happiness",
    },
    {
      imgSrc: Neutral,
      title: "Neutral",
      description:
        "A neutral voice is calm and even, without strong emotion. It is clear and steady, perfect for conveying information.",
        link:"https://en.wikipedia.org/wiki/Blank_expression",
    },
    {
      imgSrc: Sad,
      title: "Sad",
      description:
        "A sad voice often sounds soft and subdued, with a slower pace and lower pitch that conveys melancholy and sorrow.",
    },
    {
      imgSrc: Fear,
      title: "Fear",
      description:
        "A fearful voice can be shaky and tense, often with a higher pitch and faster pace, reflecting anxiety and nervousness.",
    },
    {
      imgSrc: Angry,
      title: "Angry",
      description:
        "An angry voice is typically loud and intense, with a harsh tone and rapid speech, reflecting frustration and aggression.",
    },
    {
      imgSrc: Surprise,
      title: "Surprise",
      description:
        "A surprised voice is often high-pitched and quick, with a sense of astonishment and excitement.",
    },
    {
      imgSrc: Disgust,
      title: "Disgust",
      description:
        "A disgusted voice is typically low and harsh, often with a slow and deliberate pace, reflecting aversion and disdain.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <div className="relative shadow-xl max-w-screen-xl bg-white bg-opacity-75 rounded-2xl px-6 py-8 my-5 mx-auto ">
        <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Emotion Labels
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Explore the different emotional states and how their voices sound.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            {/* First Column */}
            {cardsData.slice(0, 4).map((card, index) => (
              <Card
                key={index}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                link={card.link}
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
