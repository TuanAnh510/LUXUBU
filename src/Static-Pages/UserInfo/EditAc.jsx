import React, { useState, useEffect } from "react";
import "./css/UserInfor.css";
import { Link } from "react-router-dom";
import UsrAcount from "./UserAcount";
import User from "./User";
import moment from "moment";
import UserBody from "./UserBody";
import UserHistory from "./UserHistory";
import "moment-timezone";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/action/auth";

const EditAC = () => {
  const userCreate = localStorage.getItem("usercreatedAt") || "";
  const userId = localStorage.getItem("userid") || "";
  const [phone, setPhone] = useState(
    localStorage.getItem("usermobile") == undefined
      ? localStorage.getItem("usermobile")
      : ""
  );
  const [email, setEmail] = useState(localStorage.getItem("useremail") || "");
  const [firstName, setFirstName] = useState(
    localStorage.getItem("userfirstname") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("username") || ""
  );
  const dispatch = useDispatch();

  const handleEditUser = (e) => {
    e.preventDefault();
    dispatch(updateUser(userId, firstName, lastName, email, phone));
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
  };
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
                      <div className="text-center ">
                        Chỉnh sửa thông tin cá nhân
                      </div>
                    </div>
                    <div>
                      <div className="Ivite_loho text-lg ">
                        <form onSubmit={handleEditUser}>
                          <div className="text-left">
                            <label
                              htmlFor="first-name-input"
                              className="block mb-2 text-base font-medium text-gray-900"
                            >
                              Họ:
                            </label>
                            <input
                              required
                              type="text"
                              id="first-name-input"
                              value={firstName}
                              className="w-full ml-2 placeholder:text-black border-b-2 color-[black]"
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                          <div className="text-left mt-2">
                            <label
                              htmlFor="last-name-input"
                              className="block mb-2 text-base font-medium text-gray-900"
                            >
                              Tên:
                            </label>
                            <input
                              required
                              type="text"
                              id="last-name-input"
                              value={lastName}
                              className="w-full ml-2 placeholder:text-black border-b-2 color-[black]"
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                          <div className="text-left mt-2">
                            <label
                              htmlFor="email-input"
                              className="block mb-2 text-base font-medium text-gray-900"
                            >
                              Email:
                            </label>
                            <input
                              disabled
                              type="email"
                              id="email-input"
                              value={email}
                              className="w-full ml-2 placeholder:text-black border-b-2 color-[black]"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <div className="text-left mt-2">
                            <label
                              htmlFor="phone-input"
                              className="block mb-2 text-base font-medium text-gray-900"
                            >
                              Số điện thoại:
                            </label>
                            <input
                              required
                              type="text"
                              id="phone-input"
                              value={phone}
                              className="w-full ml-2 placeholder:text-black border-b-2 color-[black]"
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div className="text-left mt-2">
                            <label>Ngày tạo tài khoản:</label>
                            <input
                              disabled
                              value={moment(userCreate).format("DD-MM-YYYY")}
                              className="ml-2 placeholder:text-black  color-[#fe2c6d]"
                            />
                          </div>

                          <button
                            type="submit"
                            className="mt-4 mb-8 w-full text-[15px] rounded-md bg-[#fe2c6d] px-6 py-1 font-medium text-white"
                          >
                            Cập nhật
                          </button>
                        </form>
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

export default EditAC;
