import React, { useState } from "react";
import { FcAssistant } from "react-icons/fc";
import { InfoCard, SuggestionsCarousel } from "../components";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { Tooltip } from "react-tippy";

const infoCards = [
  {
    id: uuidv4(),
    displayText: "Car Wash",
    to: "/chatBot/carWash",
    Icon: <FaCar />,
  },
  {
    id: uuidv4(),
    displayText: "Car Indoors",
    to: "/chatBot/carIndoors",
    Icon: <FaCar />,
  },
  {
    id: uuidv4(),
    displayText: "Car Outdoors",
    to: "/chatBot/carOutdoors",
    Icon: <FaCar />,
  },
  {
    id: uuidv4(),
    displayText: "Car Fancy Stuff",
    to: "/chatBot/carFancyStuff",
    Icon: <FaCar />,
  },
  {
    id: uuidv4(),
    displayText: "Race Cars",
    to: "/chatBot/raceCars",
    Icon: <FaCar />,
  },
  {
    id: uuidv4(),
    displayText: "Car Health",
    to: "/chatBot/carHealth",
    Icon: <FaCar />,
  },
];

const Main = () => {
  return (
    <div className=" relative h-full px-10 pt-36">
      {/* Info Cards */}
      <div className="h-[40%] grid grid-cols-3 gap-10  ">
        {infoCards.map((infoCard) => {
          return <InfoCard key={infoCard.id} data={infoCard} />;
        })}
      </div>
      {/* Dummy Div */}
      <div className="h-[12%]"></div>
      {/* Carousel */}
      <Tooltip
        title={"Swipe up or down"}
        position="top"
        trigger="mouseenter"
        size="big"
      >
        <div className="relative h-[22%]">
          {/* <div className="absolute bottom-[40%] left-[50%] -translate-x-[50%]  z-10  text-8xl bg-gray-400 text-white">
          Swipe
        </div> */}
          <SuggestionsCarousel />
        </div>
      </Tooltip>
      {/* Dummy Div */}
      <div className="h-[26%]"></div>
      {/* Chatbot Button */}
      <Link to={"/chatBot/assistant"}>
        <div className="absolute bottom-14 right-14 bg-gray-200 p-6  rounded-full text-9xl hover:bg-slate-600 transition-all duration-300">
          <FcAssistant />
        </div>
      </Link>
    </div>
  );
};

export default Main;
