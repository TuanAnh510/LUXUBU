import React, { useState, useEffect } from "react";
import "./css/UserInfor.css";
import { Link } from "react-router-dom";
import UsrAcount from "./UserAcount";
import User from "./User";
import moment from "moment";
import UserBody from "./UserBody";
import UserHistory from "./UserHistory";
import "moment-timezone";
import { Button, Input, Space } from "antd";
const EditPass = () => {
  return (
    <>
      <div className="Iv-container">
        <div className="Iv-style">
          <div className="wrapLayout">
            <div className="flex flex-wrap justify-between">
              <div className=" mt-2 w-[30%]">
                <div className="UserNav">
                  <User />
                </div>
                {/* <div className="mt-3 UserNavHis">
                  <UserHistory />
                </div> */}
                <div className="mt-3 UserAC pb-3">
                  <UsrAcount />
                </div>
              </div>
              <div className="main_styler w-[100%] mb-2">
                <div className="flex flex-col bg-[#f5f6f6] pt-2">
                  <div className="bg-white rounded-[8px]">
                    <div className="w-[100%] h-[44px] bg-white text-[25px] text-black mt-2">
                      <div className="text-center ">Cập nhật mật khẩu </div>
                    </div>
                    <div>
                      <div className="Ivite_loho ">
                        <div className="text-left ">
                          <label className="ml-2 mb-2">Mật khẩu cũ: </label>
                          <Input.Password
                            type="password"
                            className=" ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div>
                        <div className="text-left mt-2">
                          <label className="ml-2 mb-2">Mật khẩu mới: </label>
                          <Input.Password
                            type="password"
                            className=" ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div>
                        <div className="text-left mt-2 ">
                          <label className="ml-2 mb-2">
                            Nhập lại mật khẩu mới:{" "}
                          </label>
                          <Input.Password
                            type="password"
                            className=" ml-2 placeholder:text-black border-b-2 color-[black]"
                          />
                        </div>
                        <button className="mt-4 mb-8 w-full text-[15px] rounded-md bg-[#fe2c6d] px-6 py-2 font-medium text-white">
                          Cập nhật
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPass;
