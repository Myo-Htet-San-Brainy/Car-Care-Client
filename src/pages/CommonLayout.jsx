import React from "react";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer Buttons</div>
    </div>
  );
};

export default CommonLayout;
