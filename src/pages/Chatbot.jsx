import React, { useEffect, useState } from "react";
import { createChatApiMock } from "../Utils/mockApi";
import { Chatlog, ChatInput } from "../components";
import { useOutletContext } from "react-router-dom";

export async function chatBotLoader({ params }) {
  const { action } = params;
  const storedChat = JSON.parse(localStorage.getItem("storedChat"));
  if (!storedChat) {
    const userId = "123";
    const res = createChatApiMock(action, userId);
    const initialChat = {
      sessionId: res.session_id,
      chatHistory: [
        {
          sender: "api",
          message: res.reply,
        },
      ],
    };
    localStorage.setItem("storedChat", JSON.stringify(initialChat));
    return "";
  }
  return "";
}

const Chatbot = () => {
  const { showBackToMainBtn, setShowBackToMainBtn } = useOutletContext();
  //
  const [chat, setChat] = useState(
    JSON.parse(localStorage.getItem("storedChat"))
  );
  useEffect(() => {
    localStorage.setItem("storedChat", JSON.stringify(chat));
  }, [chat]);
  function updateChatHistory(message, sender) {
    setChat((prev) => {
      return {
        sessionId: prev.sessionId,
        chatHistory: [
          ...prev.chatHistory,
          {
            sender: sender,
            message: message,
          },
        ],
      };
    });
  }
  //
  useEffect(() => {
    setShowBackToMainBtn(true);
  }, []);

  return (
    <div className="relative h-full">
      <Chatlog chat={chat} />
      <div className="h-[7%]"></div>
      <ChatInput updateChatHistory={updateChatHistory} chat={chat} />
    </div>
  );
};

export default Chatbot;
