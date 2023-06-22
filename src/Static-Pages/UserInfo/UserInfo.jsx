import { useState } from "react";
import "./css/UserInfor.css";
import React from "react";
import UsrAcount from "./UserAcount";
import User from "./User";
import UserBody from "./UserBody";
export const UserInfo = () => {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <section
        style={{
          backgroundColor: "#f4f5f7",
          backgroundImage:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
        }}
      >
        <div className="Iv-container">
          <div className="Iv-style">
            <div className="wrapLayout">
              <div className="flex flex-wrap justify-between">
                <div className=" mt-2 w-[30%]">
                  <div className="UserNav">
                    <User />
                  </div>
                  {/* <div className="mt-3 UserNavHis">
                    <UserHistory setTab={setTab} tab={tab} />
                  </div> */}
                  <div className="mt-3 UserAC pb-3">
                    <UsrAcount />
                  </div>
                </div>
                <div className="main_styler w-[100%] mb-2">
                  <UserBody setTab={setTab} tab={tab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
