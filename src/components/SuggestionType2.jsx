import React from "react";

const SuggestionType2 = ({ data }) => {
  const { header, images } = data;
  return (
    <div className=" px-8 h-full carousel-item grid grid-cols-3 gap-5 place-items-center border border-white">
      {images.map((image) => {
        return <img src={image} alt="" className="rounded-lg" />;
      })}
    </div>
  );
};

export default SuggestionType2;
