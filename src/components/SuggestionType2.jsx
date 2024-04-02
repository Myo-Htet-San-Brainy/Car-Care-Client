import React from "react";

const SuggestionType2 = ({ data }) => {
  const { header, images } = data;
  return (
    <div className="bg-black px-3 h-full carousel-item grid grid-cols-3 gap-2 place-items-center">
      {images.map((image) => {
        return <img src={image} alt="" className="rounded-lg" />;
      })}
    </div>
  );
};

export default SuggestionType2;
