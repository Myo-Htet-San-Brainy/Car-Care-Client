import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { ApiMessage, UserMessage } from "./index";

const Chatlog = ({ chat }) => {
  const dummyDev = useRef(null);

  useEffect(() => {
    autoScroll();
  }, [chat]);

  function autoScroll() {
    dummyDev.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="h-[93%]  overflow-scroll ">
      {chat.chatHistory.map((item) => {
        const { sender, message } = item;
        if (sender === "api") {
          return <ApiMessage key={uuidv4()} message={message} />;
        } else {
          return <UserMessage key={uuidv4()} message={message} />;
        }
      })}
      <div ref={dummyDev}></div>
    </div>
  );
};

export default Chatlog;
