import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAContext } from "../pages/CommonLayout";

const Header = () => {
  const { showBackToMainBtn, setShowBackToMainBtn } = useAContext();
  const navigate = useNavigate();
  function backBtnHandler() {
    navigate("/");
    setShowBackToMainBtn(false);
  }
  const username = "John";
  return (
    <div className="relative h-[15%] py-4 px-6 ">
      {showBackToMainBtn && (
        <div
          className="absolute top-32 left-20 text-6xl"
          onClick={backBtnHandler}
        >
          back
        </div>
      )}
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
