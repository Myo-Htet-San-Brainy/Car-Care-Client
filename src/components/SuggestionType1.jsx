import React from "react";

const SuggestionType1 = ({ data }) => {
  const { image, header, text } = data;
  return (
    <div className="h-full flex  px-8   carousel-item border border-white">
      <div className="flex items-center w-[30%]  ">
        <img src={image} alt={header} className="rounded-lg" />
      </div>
      <div className="w-[70%] py-10 px-6   text-white">
        <h1 className="mb-5 font-bold text-6xl capitalize">{header}</h1>
        <p className="text-4xl capitalize">{text}</p>
      </div>
    </div>
  );
};

export default SuggestionType1;
