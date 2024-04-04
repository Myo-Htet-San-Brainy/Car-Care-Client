import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../dummyData";

const FooterNav = () => {
  return (
    <div className="h-[11%] grid grid-cols-5 place-items-center  border-t border-white">
      {navLinks.map((navLink) => {
        return (
          <NavLink key={navLink.id} to={navLink.to}>
            <div className="w-44 h-44 grid place-items-center  rounded-full border border-white hover:bg-slate-600 transition-all duration-300 text-3xl">
              {navLink.displayText}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default FooterNav;
