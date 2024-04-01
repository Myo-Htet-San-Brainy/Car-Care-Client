import React from "react";

const Header = () => {
  const username = "John";
  return (
    <div className="h-[15%] py-4 px-6 border border-green-500">
      <div className="mb-5 grid place-items-center">
        <div className="px-16 py-5 border border-white rounded-lg">Logo</div>
      </div>
      <h1 className="text-xl font-bold">Hi, {username}</h1>
    </div>
  );
};

export default Header;
