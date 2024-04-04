import React from "react";

const SuggestionType2 = ({ data }) => {
  const { header, images } = data;
  return (
    <div className="h-full px-8   carousel-item grid grid-cols-3 gap-5 place-items-center border border-white">
      {images.map((image) => {
        return <img src={image} alt="" className="rounded-lg" key={image} />;
      })}
    </div>
  );
};

export default SuggestionType2;
