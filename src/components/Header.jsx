import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const username = "John";
  return (
    <div className="h-[15%] py-4 px-6 ">
      <div className="mb-5 h-[80%] grid place-items-center">
        <NavLink>
          <div className="py-4 px-8 border border-white rounded-lg text-6xl">
            Logo
          </div>
        </NavLink>
      </div>
      <h1 className="h-[20%] text-5xl font-bold">Hi, {username}</h1>
    </div>
  );
};

export default Header;
