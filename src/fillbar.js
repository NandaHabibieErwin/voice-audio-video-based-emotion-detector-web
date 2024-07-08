import React from 'react';

function FillBar({ label, probability }) {
  const percentage = (probability * 100).toFixed(2);
  const shortenedLabel = label === "Surprise/Disgust" ? "Surp/Disg" : label;

  return (
    <div className="flex items-center mt-2">
      <span className="text-sm text-gray-700 w-24">{shortenedLabel}</span>
      <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden ml-2">
        <div
          className="bg-[#505DFF] h-full absolute left-0 top-0"
          style={{ width: `${percentage}%` }}
        ></div>
        <span className="absolute right-0 top-0 text-sm text-gray-700 pr-2">{percentage}%</span>
      </div>
    </div>
  );
}

export default FillBar;
