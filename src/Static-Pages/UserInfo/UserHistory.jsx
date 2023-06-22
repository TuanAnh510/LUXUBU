import React, { useState } from "react";
import "./css/UserHistory.css";
import { Link } from "react-router-dom";
import { SlWallet } from "react-icons/sl";
import { CgToolbox } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { RiUserReceived2Line } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";
const UserHistory = ({ setTab, tab }) => {
  return (
    <>
      <div className="">
        <div className="text-left ml-2 text-[18px] font-bold text-black">
          <div>Lịch sử mua hàng</div>
        </div>
        <div className="flex firts_row">
          <div
            className="flex items-center flex-col "
            onClick={() => setTab(2)}
          >
            <div>
              <SlWallet size="25px" />
            </div>
            <div className="text-[11px] text-center mt-1">Chưa thanh toán</div>
          </div>
          <div className="flex items-center flex-col ml-5 mr-5">
            <div>
              <CgToolbox size="25px" />
            </div>
            <div className="text-[11px] text-center mt-1">Đã xác nhận</div>
          </div>
          <div className="flex items-center flex-col mr-5">
            <div>
              <FiShoppingCart size="25px" />
            </div>
            <div className="text-[11px] text-center mt-1">
              Đang đợi giao hàng
            </div>
          </div>
          <div className="flex items-center flex-col ">
            <div>
              <RiUserReceived2Line size="25px" />
            </div>
            <div className="text-[11px] text-center mt-1">Nhận hàng</div>
          </div>
        </div>
        <div className="secondRow flex">
          <div className="flex text-center justify-center">
            <div className="ml-5">
              <FaStore size="25px" />
            </div>
            <div className="text-[15px] ml-2">Mua tại cửa hàng</div>
          </div>
          <div className="flex text-center justify-center">
            <div className="ml-5">
              <VscTrash size="25px" />
            </div>
            <div className="text-[15px] ml-2">Đơn hàng đã hủy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHistory;
