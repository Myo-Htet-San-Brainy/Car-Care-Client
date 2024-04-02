import React from "react";
import { Outlet } from "react-router-dom";
import { Header, FooterNav } from "../components";

const CommonLayout = () => {
  return (
    <div className="h-screen ">
      <Header />
      <div className="h-[74%]  ">
        <Outlet />
      </div>
      <FooterNav />
    </div>
  );
};

export default CommonLayout;
