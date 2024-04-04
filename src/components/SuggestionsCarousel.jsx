import React from "react";
import SuggestionType1 from "./SuggestionType1";
import SuggestionType2 from "./SuggestionType2";
import { suggestions } from "../dummyData";

const SuggestionsCarousel = () => {
  return (
    <div className="h-full w-full  carousel carousel-vertical rounded-box">
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
