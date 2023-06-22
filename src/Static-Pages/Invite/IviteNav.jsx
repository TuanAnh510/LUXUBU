import React, { useState } from "react";
import "./Invite.css";
import { Link } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {
  BsCoin,
  BsPersonPlus,
  BsJournalBookmarkFill,
  BsExclamationTriangle,
} from "react-icons/bs";

import { RiCoupon3Line } from "react-icons/ri";

const IviteNav = () => {
  return (
    <>
      <div className="flex Iv_heading">
        <p className="text-[20px]">Thông tin</p>
        <div className="w-[20px] h-[40px] pt-[9px] flex items-center justify-center">
          <svg
            viewBox="0 0 40 4"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect x="0" y="0" width="40" height="4" rx="2"></rect>
          </svg>
        </div>
      </div>
      <div className="Iv_content">
        <Link to="/Invite" className="flex">
          <div>
            <RiCoupon3Line size={25} color="black" />
          </div>
          <p className="text-black text-[17px] ml-4 mt-1">Mã giảm giá</p>
        </Link>
        {/* <Link to="/Iviteuser" className="flex mt-2 ml-1">
          <div>
            <BsPersonPlus size={25} color="black" />
          </div>
          <p className="text-black text-[17px] ml-3 mt-1">Giới thiệu bạn bè</p>
        </Link> */}
        <Link to="/Information" className="flex mt-2 ">
          <div>
            <AiOutlineExclamationCircle size={25} color="black" />
          </div>
          <p className="text-black text-[17px] ml-3 mt-1">
            Thông tin về LuXuBu
          </p>
        </Link>
        {/* <a href="" className="flex">
          <div>
            <BsJournalBookmarkFill size={20} color="black" />
          </div>
          <p className="text-black text-[15px] ml-3 ">Câu hỏi thường gặp</p>
        </a> */}

        <Link to="/Contact" className="flex mt-2 ml-1">
          <div>
            <BsExclamationTriangle size={20} color="black" />
          </div>
          <p className="text-black text-[17px] ml-3 mt-1 ">
            Gửi yêu cầu hỗ trợ
          </p>
        </Link>
      </div>
    </>
  );
};

export default IviteNav;
