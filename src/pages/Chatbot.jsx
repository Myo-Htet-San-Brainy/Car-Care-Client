import React, { useEffect, useReducer, useState } from "react";
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

const chatReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        sessionId: state.sessionId,
        chatHistory: [
          ...state.chatHistory,
          {
            sender: action.payload.sender,
            message: action.payload.message,
          },
        ],
      };

    case "REMOVE_LAST":
      const chatHistory = [...state.chatHistory];
      chatHistory.pop();
      return {
        sessionId: state.sessionId,
        chatHistory: chatHistory,
      };

    default:
      throw new Error("unknown action " + action.type);
  }
};

const Chatbot = () => {
  const { setShowBackToMainBtn } = useOutletContext();
  //
  const [chat, dispatch] = useReducer(
    chatReducer,
    JSON.parse(localStorage.getItem("storedChat"))
  );
  useEffect(() => {
    localStorage.setItem("storedChat", JSON.stringify(chat));
  }, [chat]);
  //
  useEffect(() => {
    setShowBackToMainBtn(true);
  }, []);

  return (
    <div className="relative h-full">
      <Chatlog chat={chat} />
      <div className="h-[7%]"></div>
      <ChatInput dispatch={dispatch} chat={chat} />
    </div>
  );
};

export default Chatbot;
