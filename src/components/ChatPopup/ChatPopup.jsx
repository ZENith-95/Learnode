import React, { useState, useEffect } from "react";
import "./ChatPopup.css";
import {
  FaTimes,
  FaPhone,
  FaSearch,
  FaMicrophone,
  FaPaperclip,
  FaPaperPlane,
} from "react-icons/fa";

const ChatPopup = ({ isOpen, onClose, peer }) => {
  // Use the peer prop if provided, otherwise use a default
  const activePeer = peer || {
    id: 1,
    name: "Belinda Adzah",
    about: "Community, Performance And Network",
    avatar: "/peer2.png",
    status: "Active 7hr ago",
  };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi", sender: "peer", timestamp: "6:30 PM" },
    { id: 2, text: "Hello", sender: "user", timestamp: "6:31 PM" },
    { id: 3, text: "How are you doing?", sender: "peer", timestamp: "6:31 PM" },
    { id: 4, text: "Wanna hangout?", sender: "peer", timestamp: "6:31 PM" },
  ]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container" onClick={(e) => e.stopPropagation()}>
      <div className="chat-header">
        <div className="user-info">
          <img
            src={activePeer.avatar || "/placeholder.svg"}
            alt={`${activePeer.name}'s avatar`}
            className="user-avatar"
          />
          <div className="user-details">
            <span className="user-name">{activePeer.name}</span>
            <span className="user-status">{activePeer.status || "Active"}</span>
          </div>
        </div>
        <div className="header-icons">
          <FaPhone className="header-icon" />
          <FaSearch className="header-icon" />
          <FaTimes className="header-icon close-icon" onClick={onClose} />
        </div>
      </div>

      <div className="chat-body-single">
        {/* Chat Content */}
        <div className="chat-content">
          {/* Selected Peer Profile */}
          <div className="selected-peer-profile">
            <img
              src={activePeer.avatar || "/placeholder.svg"}
              alt={`${activePeer.name}'s avatar`}
              className="selected-peer-avatar"
            />
            <h3 className="selected-peer-name">{activePeer.name}</h3>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            <div className="message-timestamp-container">
              <div className="message-timestamp">Today</div>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-container ${
                  msg.sender === "user" ? "user-message" : "peer-message"
                }`}
              >
                <div className="message-bubble">
                  <p className="message-text">{msg.text}</p>
                  <div className="message-time">{msg.timestamp}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="chat-input">
            <FaMicrophone className="input-icon" />
            <FaPaperclip className="input-icon" />
            <input
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <FaPaperPlane
              className="input-icon send-icon"
              onClick={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
