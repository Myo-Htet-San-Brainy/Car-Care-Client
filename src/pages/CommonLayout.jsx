import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, FooterNav } from "../components";

const CommonLayout = () => {
  const [showBackToMainBtn, setShowBackToMainBtn] = useState(false);
  return (
    <div className="h-screen ">
      <Header
        showBackToMainBtn={showBackToMainBtn}
        setShowBackToMainBtn={setShowBackToMainBtn}
      />
      <div className="h-[74%]  ">
        <Outlet context={{ showBackToMainBtn, setShowBackToMainBtn }} />
      </div>
      <FooterNav />
    </div>
  );
};

export default CommonLayout;
