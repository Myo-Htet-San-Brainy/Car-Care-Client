import React from "react";
import { Outlet } from "react-router-dom";
import { Header, FooterNav } from "../components";

const CommonLayout = () => {
  return (
    <div className="h-screen border border-red-500">
      <Header />
      <div className="h-[74%] border border-blue-500">
        <Outlet />
      </div>
      <FooterNav />
    </div>
  );
};

export default CommonLayout;
