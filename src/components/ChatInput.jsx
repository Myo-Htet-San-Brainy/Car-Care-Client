import React, { useState } from "react";
import { continueChatApiMock } from "../Utils/mockApi";

const ChatInput = ({ updateChatHistory, chat }) => {
  const [aiRploading, setAiRpLoading] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    //
    const form = e.currentTarget;
    const formData = new FormData(form);
    const userMessage = formData.get("userInput");
    //
    form.reset();
    updateChatHistory(userMessage, "user");
    setAiRpLoading(true);
    fetchApiReplyAndUpdateChat(chat.sessionId, userMessage);
  }

  async function fetchApiReplyAndUpdateChat(sessionId, userMessage) {
    try {
      setTimeout(() => {
        const res = continueChatApiMock(sessionId, userMessage);
        updateChatHistory(res.reply, "api");
        setAiRpLoading(false);
      }, 2000);
    } catch (error) {
      updateChatHistory("some error happened", "api");
      setAiRpLoading(false);
      console.log(error);
    }
  }

  return (
    <form
      className="absolute bottom-5 left-[50%] -translate-x-1/2 w-[90%]  flex gap-5"
      onSubmit={(e) => submitHandler(e)}
    >
      <input
        type="text"
        name="userInput"
        className="h-20 grow p-3 rounded-md text-white text-4xl"
      />
      <button
        className="bg-green-300 w-32 rounded-md text-black uppercase grid place-items-center text-4xl font-bold"
        type="submit"
        disabled={aiRploading}
      >
        {aiRploading ? (
          <svg
            className="animate-spin h-14 w-14"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm14-1.5a7.963 7.963 0 01-2 5.291V20c4.418 0 8-3.582 8-8h-4zM20 12a7.963 7.963 0 01-2-5.291V4c4.418 0 8 3.582 8 8h-4z"
            ></path>
          </svg>
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
};

export default ChatInput;
