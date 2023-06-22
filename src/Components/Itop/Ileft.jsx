import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { giveCoupon } from "../../redux/action/couponAction";
import "./Ileft.css";
const Ileft = () => {
  const dispatch = useDispatch()
  const [showContent, setShowContent] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [email, setEmail] = useState("");
  function handleIconClick() {
    setShowContent(!showContent);
  }

  function handleIconClick2() {
    setShowContent2(!showContent2);
  }
  const handleGiveCoupon = () => {
    dispatch(giveCoupon(email))
  }
  return (
    <div>
      {showContent == true ? (
        <div className="left-content ">
          <div className="left-form">
            <div className="left-title">
              WELCOME GIFT
              <div className="outer_icon">
                <div className="isopen_icon" onClick={handleIconClick}></div>
              </div>
            </div>
            <div className="message">
              Hãy nhập email, số điện thoại của bạn để nhận được mã giảm 20% cho
              đơn hàng đầu tiên.
            </div>
            <div className="mb-3">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="email"
                  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-black focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-black dark:focus:border-primary"
                  placeholder="Nhập email...."
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  className="relative z-[2] flex items-center rounded-r bg-gray-600 px-6 py-2.5 text-base font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  onClick={handleGiveCoupon}
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="left-bar hidden md:flex lg:flex "
          onClick={handleIconClick}
        >
          <div className="left-heading">
            WELCOME GIFT
            <div className="left-icon">
              <div className="icon"></div>
            </div>
          </div>
        </div>
      )}
      {showContent2 == true ? null : (
        <div className="left-content-mobile md:hidden lg:hidden ">
          <div className="left-form">
            <div className="left-title">
              WELCOME GIFT
              <div className="outer_icon">
                <div className="isopen_icon" onClick={handleIconClick2}></div>
              </div>
            </div>
            <div className="message_mobi">
              Hãy nhập email, số điện thoại của bạn để nhận được mã giảm 20% cho
              đơn hàng đầu tiên.
            </div>
            <div className="mb-3">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="email"
                  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-black  focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-black dark:focus:border-primary"
                  placeholder="Nhập email...."
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  className="relative z-[2] flex items-center rounded-r bg-gray-600 px-6 py-2.5 text-base font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  onClick={handleGiveCoupon}
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ileft;
