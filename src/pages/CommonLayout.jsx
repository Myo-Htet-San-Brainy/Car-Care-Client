import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, FooterNav } from "../components";

const aContext = createContext(null);

export const useAContext = () => {
  return useContext(aContext);
};

const CommonLayout = () => {
  const [showBackToMainBtn, setShowBackToMainBtn] = useState(false);

  return (
    <aContext.Provider value={{ showBackToMainBtn, setShowBackToMainBtn }}>
      <div className="h-screen ">
        <Header />
        <div className="h-[74%]  ">
          <Outlet />
        </div>
        <FooterNav />
      </div>
    </aContext.Provider>
  );
};

export default CommonLayout;
