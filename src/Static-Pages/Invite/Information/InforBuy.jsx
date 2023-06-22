import React, { useState } from "react";
import "../Invite.css";
import { Link } from "react-router-dom";
import IviteNav from "../IviteNav";
const InforBuy = () => {
  return (
    <>
      <div className="Iv-container">
        <div className="Iv-style">
          <div className="wrapLayout">
            <div className="flex flex-wrap justify-between">
              <div className="listNav mt-2 w-[30%]">
                <IviteNav />
              </div>
              <div className="main_styler w-[100%] mb-2 mt-2">
                <div className="bg-white rounded-[8px]">
                  <div>
                    <div></div>
                    <div className="font-bold text-[18px] ml-5 text-left text-black pt-[19px]">
                      Mua hàng trên App
                    </div>
                    <div className="text-[18px] ml-5 text-left  pt-[19px]">
                      Mời bạn xem video hướng dẫn sau và tiến hành đặt hàng qua
                      App Luxubu nhé!
                    </div>
                    <div className="mt-2">
                      <video
                        controls
                        poster="https://js.lixibox.com/image-assets/info/buy-on-app-cover-5.png"
                        className="h-[100%]"
                      >
                        <source
                          src="https://js.lixibox.com/image-assets/info/buy-on-app-1.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className="text-[20px] mt-5 ml-5 text-left  pt-[19px] pb-2">
                      LƯU Ý VỀ MÃ KHUYẾN MÃI
                      <div className="ml-5 mr-5">
                        <ul className="list-disc text-[15px] mt-2">
                          <li className="text-[#4D4E4F]">
                            Mỗi đơn hàng chỉ áp dụng duy nhất 1 mã khuyến mãi.
                          </li>
                          <li className="mt-2 text-[#4D4E4F] leading-normal">
                            Bạn vui lòng liên hệ trực tiếp với Luxubu khi cần
                            kiểm tra đơn hàng. Khi có quà đi kèm với box, món
                            quà đó cũng sẽ phải thể hiện trong giỏ của bạn trước
                            khi đặt hàng. Vì vậy việc chọn mã giảm giá đúng ý
                            bạn là cần thiết để tránh trường hợp thất vọng vì
                            chọn mã sai.
                          </li>
                          <li className="mt-2 leading-normal text-[#4D4E4F]">
                            Sau khi mua hàng, Luxubu sẽ gửi riêng các mã khuyến
                            mãi áp dụng cho những lần mua sau của bạn. Những mã
                            khuyến mãi này chỉ áp dụng khi đơn hàng được thực
                            hiện bởi tài khoản của bạn - Luxubu sẽ không hỗ trợ
                            đổi/trả phần quà nếu như bạn nhập nhầm MÃ KHUYẾN
                            MÃI. Vậy nên, vui lòng kiểm tra thật kỹ phần quà
                            nhận được sau khi áp dụng Mã khuyến mãi trước khi
                            tiến hành đặt mua sản phẩm
                          </li>
                        </ul>
                        <p className="font-bold text-black mt-3 mb-5">
                          Luxubu xin chân thành cảm ơn và chúc bạn có một trải
                          nghiệm mua sắm tốt đẹp!
                        </p>
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

export default InforBuy;
