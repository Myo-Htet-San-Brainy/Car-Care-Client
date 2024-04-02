import React from "react";

const SuggestionType1 = ({ data }) => {
  const { image, header, text } = data;
  return (
    <div className="bg-gray-200 flex  px-3  h-full carousel-item">
      <div className="w-[30%] pt-12 border border-red-500">
        <div className=" object-cover border border-blue-500 ">
          <img src={image} alt={header} className="rounded-lg" />
        </div>
      </div>
      <div className="py-3 px-3 w-[70%] border border-green-500 text-black">
        <h1 className="font-bold text-2xl capitalize">{header}</h1>
        <p className="text-lg capitalize">{text}</p>
      </div>
    </div>
  );
};

export default SuggestionType1;
