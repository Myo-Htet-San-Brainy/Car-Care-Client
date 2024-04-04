import React from "react";

const UserMessage = ({ message }) => {
  return (
    <div className="py-10 px-10 flex items-start gap-5 bg-gray-500">
      <div className="min-w-[5%] h-14 rounded-full bg-white border border-blue-500"></div>
      <div className="max-w-[95%] grow  text-5xl text-white">{message}</div>
    </div>
  );
};

export default UserMessage;
