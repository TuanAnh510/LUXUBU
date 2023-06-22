import React, { useState } from "react";
import "./Invite.css";
import { Link } from "react-router-dom";
import {
  BsCoin,
  BsPersonPlus,
  BsJournalBookmarkFill,
  BsExclamationTriangle,
  BsChatText,
} from "react-icons/bs";
import img1 from "../../Image/Ivite1.jpg";
import IviteNav from "./IviteNav";
import IviteBody from "./IviteBody";
const Invite = () => {
  return (
    <>
      <div className="Iv-container">
        <div className="Iv-style">
          <div className="wrapLayout">
            <div className="flex flex-wrap justify-between">
              <div className="listNav mt-2 w-[30%]">
                <IviteNav />
              </div>
              <div className="main_styler w-[100%] mb-2">
                <IviteBody />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invite;
