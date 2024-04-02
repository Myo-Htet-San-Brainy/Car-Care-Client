import React from "react";
import { v4 as uuidv4 } from "uuid";
import SuggestionType1 from "./SuggestionType1";
import SuggestionType2 from "./SuggestionType2";
import sugImage from "../assets/sugImage.jpg";
import sugImage1 from "../assets/sugImage1.jpg";
import sugImage2 from "../assets/sugImage2.jpg";
import sugImage3 from "../assets/sugImage3.jpg";

const suggestions = [
  {
    id: uuidv4(),
    type: "suggestion",
    "sub-type": "image-and-text",
    content: {
      image: sugImage,
      header: "header",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro autem deleniti vitae distinctio soluta possimus sed saepe voluptates inventore?",
    },
  },
  {
    id: uuidv4(),
    type: "suggestion",
    "sub-type": "image-and-text",
    content: {
      image: sugImage,
      header: "header",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit voluptate dolorem aut assumenda culpa, sapiente eaque! Nihil placeat voluptatibus molestias ",
    },
  },
  {
    id: uuidv4(),
    type: "suggestion",
    "sub-type": "3-image",
    content: {
      images: [sugImage1, sugImage2, sugImage3],
      header: "header",
    },
  },
];

const SuggestionsCarousel = () => {
  return (
    <div className="h-[22%] w-full  carousel carousel-vertical rounded-box ">
      {suggestions.map((suggestion) => {
        if (suggestion.type === "suggestion") {
          if (suggestion["sub-type"] === "image-and-text") {
            return (
              <SuggestionType1 key={suggestion.id} data={suggestion.content} />
            );
          } else {
            return (
              <SuggestionType2 key={suggestion.id} data={suggestion.content} />
            );
          }
        }
      })}
    </div>
  );
};

export default SuggestionsCarousel;
