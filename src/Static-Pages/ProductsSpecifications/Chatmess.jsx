import React, { useState } from "react";
import "./MessengerChat.css";

const MessengerChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage) {
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setNewMessage("");
    }
  };
  const [isActive, setIsActive] = useState(false);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };

  const handleSendVoice = () => {
    // Xử lý gửi ghi âm
  };
  return (
    <div className="messenger-container">
      <div className="messenger-chat">
        <div className="flex-col mb-5">
          <div className="text-[15px] font-bold text-left text-black">
            Dũng chó
          </div>
          <div className="Chat_container">
            <div className={isActive ? "active-dot" : "inactive-dot"} />
            <button onClick={toggleStatus} className="Chatbutton">
              {isActive ? "Hoạt động" : "Không hoạt động"}
            </button>
          </div>
        </div>
        {messages.map((message, index) => (
          <div key={index} className="message_title">
            {message}
          </div>
        ))}
      </div>
      <div className="messenger-input">
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          value={newMessage}
          onChange={handleInputChange}
          className="Mess_Text"
        />
        <button onClick={handleSendMessage} className="Messbtn">
          Gửi
        </button>
      </div>
    </div>
  );
};

export default MessengerChat;
