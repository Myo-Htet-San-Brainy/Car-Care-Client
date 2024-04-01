import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const FooterNav = () => {
  const navLinks = [
    {
      id: uuidv4(),
      displayText: "Home",
      to: "/",
    },
    {
      id: uuidv4(),
      displayText: "Search",
      to: "/search",
    },
    {
      id: uuidv4(),
      displayText: "Treatments",
      to: "/treatments",
    },
    {
      id: uuidv4(),
      displayText: "Notifications",
      to: "/notifications",
    },
    {
      id: uuidv4(),
      displayText: "Account",
      to: "/account",
    },
  ];
  return (
    <div className="grid gap-6 grid-cols-5 place-items-center  h-[11%] border border-yellow-500">
      {navLinks.map((navLink) => {
        return (
          <NavLink key={navLink.id} to={navLink.to}>
            <div className="grid place-items-center w-20 h-20 rounded-full border border-white">
              {navLink.displayText}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default FooterNav;
