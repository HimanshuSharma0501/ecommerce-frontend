import React, { useState } from "react";
import ChatBot from "./ChatBot";
import "../styles/chatbotcontainer.scss";
import { AiOutlineClose, AiOutlineMessage } from "react-icons/ai";

const ChatBotContainer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="chat-bot-container">
      {isChatOpen ? (
        <div className="chat-bot">
          <ChatBot />
          <button className="close-button" onClick={toggleChat}>
            <AiOutlineClose />
          </button>
        </div>
      ) : (
        <button
          className={`chat-bot-button ${isChatOpen ? "open" : ""}`}
          onClick={toggleChat}
        >
          <AiOutlineMessage /> {/* Using a React icon instead of an image */}
        </button>
      )}
    </div>
  );
};

export default ChatBotContainer;
