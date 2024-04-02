import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { FaFilePrescription } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { MdVaccines } from "react-icons/md";
import { FcAssistant } from "react-icons/fc";
import { InfoCard, SuggestionsCarousel } from "../components";
import { Link } from "react-router-dom";

const Main = () => {
  const infoCards = [
    {
      id: uuidv4(),
      displayText: "hospitals",
      to: "/chatBot/hospitals",
      Icon: <FaHospital />,
    },
    {
      id: uuidv4(),
      displayText: "doctors",
      to: "/chatBot/doctors",
      Icon: <FaUserDoctor />,
    },
    {
      id: uuidv4(),
      displayText: "labs",
      to: "/chatBot/labs",
      Icon: <ImLab />,
    },
    {
      id: uuidv4(),
      displayText: "prescriptions",
      to: "/chatBot/prescriptions",
      Icon: <FaFilePrescription />,
    },
    {
      id: uuidv4(),
      displayText: "physiotherapy",
      to: "/chatBot/physiotherapy",
      Icon: <MdHealthAndSafety />,
    },
    {
      id: uuidv4(),
      displayText: "vaccines",
      to: "/chatBot/vaccines",
      Icon: <MdVaccines />,
    },
  ];
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
      <SuggestionsCarousel />
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
