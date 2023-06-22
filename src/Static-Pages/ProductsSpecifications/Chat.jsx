import React, { useState } from "react";
import "./Chat.css";
import { Link } from "react-router-dom";
const Chat = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Link to="/MessengerChat">
        {" "}
        <div className="bg-gray-400 w-[100%] h-[70px] mb-10">
          <div className="flex ml-10">
            <div className="flex ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle mx-auto"
                style={{ width: "60px" }}
                fluid
              />
              <div className="flex-col">
                <div className="text-[15px] font-bold text-center text-black">
                  Dũng chó
                </div>
                <div className="Chat_container">
                  <div className={isActive ? "active-dot" : "inactive-dot"} />
                  <button onClick={toggleStatus} className="Chatbutton">
                    {isActive ? "Hoạt động" : "Không hoạt động"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Chat;
