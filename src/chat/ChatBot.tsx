import React, { useState } from "react";
import "../styles/chatbot.scss";

const ChatBot = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: "user", text: input }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            user: "bot",
            text: "Sorry this is a feature currently under development we would get back to you as soon as possible",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-bot-window">
      <div className="chat-bot-header">Chat with us!</div>
      <div className="chat-bot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-bot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
