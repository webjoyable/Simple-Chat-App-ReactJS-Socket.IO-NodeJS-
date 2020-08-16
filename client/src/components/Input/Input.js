import React from "react";
import "./Input.css";

const Input = ({ message, sendMessage, setMessage }) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
