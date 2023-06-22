import React, { useState } from "react";
import "./css/UserAcount.css";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
import { TfiMapAlt } from "react-icons/tfi";
import { RiShoppingCartLine } from "react-icons/ri";

import { Link } from "react-router-dom";
function UsrAcount() {
  const userName = localStorage.getItem("username") || "";
  const userEmail = localStorage.getItem("useremail") || "";
  const userMobile = localStorage.getItem("usermobile") || "";
  const userFirstName = localStorage.getItem("userfirstname") || "";

  const userCreate = localStorage.getItem("usercreatedAt") || "";

  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="User_His">
        <div
          className={`containerAC ${expanded ? "expanded" : ""}`}
          onClick={toggleExpand}
        >
          <div className="text-[18px]">Tài khoản</div>
          <div className={`user_icon ${expanded ? "expanded" : ""}`}>
            {expanded ? "-" : "+"}
          </div>
        </div>
        {expanded && (
          <div className="additional-content">
            <Link to="/userinfo">
              <div className="flex items-center justify-start ">
                <div className="ml-4 mr-5">
                  <RiShoppingCartLine size="26px" color="black" />
                </div>
                <div className="text-[15px] text-black">
                  Đơn hàng của bạn
                </div>
              </div>
            </Link>
            <Link to="/EditAC">
              <div className="flex items-center justify-start mt-3">
                <div className="ml-4 mr-5">
                  <AiOutlineUser size="26px" color="black" />
                </div>
                <div className="text-[15px] text-black">
                  Chỉnh sửa thông tin cá nhân
                </div>
              </div>
            </Link>
            <Link to="/EditPass">
              <div className="flex items-center justify-start mt-3 ">
                <div className="ml-4 mr-5">
                  <HiOutlineKey size="26px" color="black" />
                </div>
                <div className="text-[15px]  text-black">Đổi mật khẩu</div>
              </div>
            </Link>
            <Link to="/EditMap">
              <div className="flex items-center justify-start mt-3 pb-3 ">
                <div className="ml-4 mr-5">
                  <TfiMapAlt size="26px" color="black" />
                </div>
                <div className="text-[15px]  text-black">
                  Địa chỉ giao hàng{" "}
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default UsrAcount;
