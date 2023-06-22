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
import { useSelector } from "react-redux";
const IviteBody = () => {
  const [copied, setCopied] = useState(false);

  const { isauth } = useSelector((store) => store.login);
  const userId = window.localStorage.getItem("userid");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(userId).then(
      () => {
        setCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };
  const btnStyle = copied ? "bg-gray-500 text-white" : "";
  return (
    <>
      <div className="flex flex-col bg-[#f5f6f6]">
        <div className="items-center bg-[#fff] rounded-[8px] mb-[10px] pb-[40px] mt-2 flex flex-col ">
          <div className="mt-[40px] pb-[3px] flex flex-col">
            <span className="items-center text-[16px] mb-[16px] text-black">
              Mã giới thiệu của bạn
            </span>
          </div>

          <div className={"w-[80%] transition "} onClick={copyToClipboard}>
            <div className="bor flex justify-end items-center h-[40px] ">
              <span className=" text-[14px] text-[#fe2c6d] w-[100%] text-center">
                {isauth ? (
                  <div> {copied ? "Đã copy" : userId}</div>
                ) : (
                  <Link to={"/login"} className="text-[#fe2c6d]">
                    Đăng nhập để xem mã giới thiệu
                  </Link>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[8px]">
          <div className="br w-[100%] h-[44px] bg-white flex">
            <div className="item_kh">Đang kích hoạt</div>
          </div>
          <div>
            <div className="Ivite_loho">
              <Link to="/IviteBlog">
                <div className="flex flex-col">
                  <div className="Ivite_header">
                    <img src={img1} alt="" />
                  </div>
                  <div className="Ivite_body">
                    <div className="Ivite_info">
                      <p className="text-[17px] text-black text-left">
                        GIỚI THIỆU BẠN BÈ - ĐƠN HÀNG TRÊN 300.000Đ | 1.4 -
                        31.5.2023
                      </p>
                      <p className="text-left text-[15px] text-[#8a8d90]">
                        Ngày kết thúc: 31/5/2023
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/IviteBlog">
                <div className="flex flex-col mt-5">
                  <div className="Ivite_header">
                    <img src={img1} alt="" />
                  </div>
                  <div className="Ivite_body">
                    <div className="Ivite_info">
                      <p className="text-[17px] text-black text-left">
                        GIỚI THIỆU BẠN BÈ - ĐƠN HÀNG TRÊN 300.000Đ | 1.4 -
                        31.5.2023
                      </p>
                      <p className="text-left text-[15px] text-[#8a8d90]">
                        Ngày kết thúc: 31/5/2023
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IviteBody;
