import React, { useState } from "react";
import "./css/User.css";
import imageUser from "../../Image/user.png"
import imgUser from "../../Image/level-member.webp";
const User = () => {
  const userName = localStorage.getItem("username") || "";
  const userEmail = localStorage.getItem("useremail") || "";
  const userMobile = localStorage.getItem("usermobile") || "";
  const userFirstName = localStorage.getItem("userfirstname") || "";
  const userImage = localStorage.getItem("userimage") || "";
  const userCreate = localStorage.getItem("usercreatedAt") || "";

  return (
    <>
      <div className="flex-col">
        <div>
          <img
            src={userImage ? userImage : imageUser}
            alt="avatar"
            className="rounded-circle mx-auto"
            style={{ width: "100px" }}
            fluid
          />
          <div className="font-bold text-black mt-2 text-[20px]">
            {userFirstName + " " + userName}
          </div>
          <div className="d-flex justify-content-center mb-2 block text-center">
            <div className="inline-block h-[18px] w-auto mt-1">
              <img src={imgUser} alt="" className="h-[20px] block w-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
