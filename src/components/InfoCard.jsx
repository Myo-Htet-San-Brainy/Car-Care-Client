import React from "react";
import { NavLink } from "react-router-dom";

const InfoCard = ({ data }) => {
  const { to, displayText, Icon } = data;
  return (
    <NavLink to={to}>
      <div className="h-full grid place-items-center  border border-white rounded-3xl hover:bg-slate-600 transition-all duration-300">
        <div className=" text-8xl ">{Icon}</div>
        <h1 className="capitalize text-5xl">{displayText}</h1>
      </div>
    </NavLink>
  );
};

export default InfoCard;
