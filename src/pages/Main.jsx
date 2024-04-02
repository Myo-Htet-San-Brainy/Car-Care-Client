import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { FaFilePrescription } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { MdVaccines } from "react-icons/md";
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
    <div className="relative h-full px-5 ">
      {/* Info Cards */}
      <div className="grid grid-cols-3 gap-3 h-[40%] border border-yellow-500">
        {infoCards.map((infoCard) => {
          return <InfoCard key={infoCard.id} data={infoCard} />;
        })}
      </div>
      {/* Dummy Div */}
      <div className="h-[6%]"></div>
      {/* Carousel */}
      <SuggestionsCarousel />
      {/* Dummy Div */}
      <div className="h-[24%]"></div>
      {/* Chatbot Button */}
      <Link to={"/chatBot/assistant"}>
        <div className="absolute bottom-5 right-5  grid place-items-center w-24 h-24 rounded-full bg-black text-white">
          Chat
        </div>
      </Link>
    </div>
  );
};

export default Main;
