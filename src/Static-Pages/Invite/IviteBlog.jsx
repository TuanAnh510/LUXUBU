import React, { useState } from "react";
import "./Invite.css";
import { Link } from "react-router-dom";
import img1 from "../../Image/Ivite1.jpg";
import IviteNav from "./IviteNav";
import { useSelector } from "react-redux";
const IviteBlog = () => {
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
      <div className="Iv-container">
        <div className="Iv-style">
          <div className="wrapLayout">
            <div className="flex flex-wrap justify-between">
              <div className="listNav mt-2 w-[30%]">
                <IviteNav />
              </div>
              <div className="main_styler w-[100%] mb-2">
                <div className="flex flex-col bg-[#f5f6f6]">
                  <div className="bg-white rounded-[8px]">
                    <div>
                      <div className="Ivite_loho">
                        <div className="flex flex-col">
                          <div className="Ivite_header">
                            <img src={img1} alt="" />
                          </div>
                          <div className="Ivite_body">
                            <div className="Ivite_info">
                              <div className="items-center bg-[#fff] rounded-[8px]  mt-2 flex flex-col ">
                                <div className=" pb-[3px] flex flex-col">
                                  <span className="items-center text-[16px] mb-[16px] text-black">
                                    Mã giới thiệu của bạn
                                  </span>
                                </div>
                                <Link to={"/Login"} className="w-[80%]">
                                  <div className="bor flex justify-end items-center h-[40px] ">
                                    <span className=" text-[14px] text-[#fe2c6d] w-[100%] text-center">
                                      {isauth ? (
                                        <div>
                                          {" "}
                                          {copied ? "Đã copy" : userId}
                                        </div>
                                      ) : (
                                        <Link
                                          to={"/login"}
                                          className="text-[#fe2c6d]"
                                        >
                                          Đăng nhập để xem mã giới thiệu
                                        </Link>
                                      )}
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="text-[15px]">
                              Mời bạn bè áp dụng mã khuyến mãi này trên Lixibox,
                              khi mua đơn hàng đầu tiên với các sản phẩm từ
                              thương hiệu Halio, Hemi, The Auragins, Okame,
                              Chacott, Lustre, Coeur, To The Stars, Jomo, Umi,
                              Hemi mua tại website và app Lixibox với giá trị từ
                              300.000&nbsp;₫
                            </div>
                            <div className="mt-5 ml-10">
                              <ul className="list-disc text-[15px] text-left">
                                <li>
                                  Tài khoản của bạn (người giới thiệu) sẽ được
                                  100.000Đ cho mỗi đơn hàng giới thiệu thành
                                  công, thưởng không giới hạn. để thoả sức mua
                                  sắm và đổi quà.
                                </li>
                                <li>
                                  Bạn của bạn (người được giới thiệu) sẽ được
                                  Giảm 60.000Đ cho đơn hàng đầu tiên.
                                </li>
                              </ul>
                            </div>
                            <div className="mt-3 text-left ml-5">
                              <span className="text-[#f7ab13] text-[15px]">
                                Ngày kết thúc: 31/05/2023
                              </span>
                            </div>
                            <div className="mb-10">
                              <span className="text-[15px]">Lưu ý: </span>
                              <div>
                                <ul className="list-disc text-[15px] ml-10 text-left">
                                  <li>
                                    Chỉ áp dụng cho đơn hàng có số điện thoại
                                    chưa từng mua hàng ở Luxubu.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default IviteBlog;
