import React from "react";
import { NavLink } from "react-router-dom";

const InfoCard = ({ data }) => {
  const { to, displayText, Icon } = data;
  return (
    <NavLink to={to}>
      <div className="grid place-items-center h-full p-3 border border-white rounded-r-lg">
        <div className=" text-3xl ">{Icon}</div>
        <h1 className="capitalize">{displayText}</h1>
      </div>
    </NavLink>
  );
};

export default InfoCard;
