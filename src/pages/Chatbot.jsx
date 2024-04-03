import React, { useEffect } from "react";
import { useAContext } from "./CommonLayout";

const Chatbot = () => {
  const { setShowBackToMainBtn } = useAContext();
  useEffect(() => {
    setShowBackToMainBtn(true);
  }, []);
  return <div>Chatbot</div>;
};

export default Chatbot;
