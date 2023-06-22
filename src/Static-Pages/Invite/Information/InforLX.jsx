import React, { useState } from "react";
import "../Invite.css";
import { Link } from "react-router-dom";
import IviteNav from "../IviteNav";
const InforLX = () => {
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
                      Giới thiệu
                    </div>
                  </div>
                  <div className="mt-3 text-left ml-5 mr-5">
                    <p className="text-[18px] text-left mt-5 text-[#000204]">
                      VỀ LUXUBU
                    </p>
                    <p className="leading-relaxed text-[15px] text-[#4D4E4F] mt-3">
                      LUXUBU - Bringing affordable luxury to the urban
                      population
                    </p>
                    <p className="leading-relaxed text-justify text-[#4D4E4F] text-[15px]">
                      Đến với LUXUBU.COM, khách hàng sẽ là những người đầu tiên
                      có cơ hội được trải nghiệm và sử dụng các sản phẩm làm đẹp
                      theo một cách riêng và tốt nhất với các thương hiệu mỹ
                      phẩm quốc tế quen thuộc. Ngoài ra, còn có các thương hiệu
                      được biết đến bởi những người tiên phong trong việc tìm
                      kiếm sản phẩm chất lượng nhất.
                    </p>
                    <p className="leading-relaxed text-justify text-[#4D4E4F] text-[15px]">
                      LUXUBU là cách bán các sản phẩm làm đẹp theo từng box
                      (hộp). Các sản phẩm ở trong box này thường là từ 3, 5 đến
                      nhiều sản phẩm trở lên và thường theo cả set không tách
                      rời. Nhiều khách hàng thường hỏi tại sao không bán riêng
                      lẻ từng cái vì họ thích sử dụng cái này hay cái kia. Thực
                      ra, để tạo ra một box sản phẩm đến tay khách hàng không hề
                      dễ dàng như mọi người nghĩ. Vì các sản phẩm này thường
                      được kiểm nghiệm chất lượng trước bởi các chuyên gia,
                      blogger nổi tiếng trong lĩnh vực làm đẹp. Họ là những
                      người đã sử dụng qua sản phẩm, biết đánh giá sản phẩm theo
                      từng loại da và có thể kết hợp nhiều thương hiệu khác nhau
                      nhằm đem một box hoàn hảo với mức giá phù hợp.
                    </p>
                  </div>
                  <div className="mt-3 text-left ml-5 mt-3 mr-5">
                    <p className="text-[18px] ">ĐƠN VỊ ĐẠI DIỆN</p>
                    <p className="text-[15px] text-[#4D4E4F] mt-3">
                      CÔNG TY CỔ PHẦN LUXUBU
                    </p>
                    <p className="text-[15px] mt-3 text-[#4D4E4F]">
                      73 Nguyễn Huệ, Phường 2, TP, Vĩnh Long
                    </p>
                  </div>
                  <div className=" text-left ml-5 mr-5 mt-3">
                    <p className="text-[20px]">
                      LUXUBU- BRINGING AFFORDABLE LUXURY TO THE URBAN POPULATION
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#4D4E4F] text-justify">
                      Tại LUXUBU, bạn còn được tư vấn hoàn toàn miễn phí bởi các
                      chuyên gia trong lĩnh vực làm đẹp. Với giao diện dễ nhìn,
                      bắt mắt cùng các sản phẩm chất lượng. LUXUBU là địa chỉ
                      yêu thích, thường xuyên của các chị em phụ nữ với mong
                      muốn mình đẹp hơn lên mỗi ngày.
                    </p>
                  </div>
                  <div className=" text-left ml-5 mr-5 mt-3">
                    <p className="text-[20px]">
                      CÁC LOẠI MỸ PHẨM ĐƯỢC CHỌN LỌC TỐT NHẤT ĐẾN TỪ CHÂU Á,
                      CHÂU ÂU…
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#4D4E4F] text-justify">
                      Bạn sẽ không phải băn khoăn về giá cả cũng như chất lượng
                      khi đã được LUXUBU tuyển chọn.
                    </p>
                  </div>
                  <div className=" text-left ml-5 mr-5 mt-3">
                    <p className="text-[20px]">SẢN PHẨM PHONG PHÚ</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#4D4E4F] text-justify">
                      Tại LUXUBU.COM, khách hàng không chỉ được trải nghiệm các
                      sản phẩm làm đẹp mới và chất lượng nhất trong và ngoài
                      nước. Các blogger còn là những người sẽ liên tục cập nhật
                      tạo ra các box mới độc đáo, sáng tạo và tốt nhất để mang
                      đến cho khách hàng nhiều sự lựa chọn khác nhau.
                    </p>
                  </div>
                  <div className=" text-left ml-5 mr-5 mt-3 pb-5">
                    <p className="text-[20px]">
                      THANH TOÁN KHI NHẬN HÀNG AN TOÀN, TIỆN LỢI VÀ BẢO MẬT
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#4D4E4F] text-justify">
                      LUXUBU nhận thanh toán sau khi khách hàng đã nhận được
                      hàng, đây cũng là cách để khách hàng luôn tin tưởng khi
                      mua sắm online. Ngoài ra, với phương thức chuyển khoản qua
                      thẻ, ngân hàng còn đem đến sự tiện lợi, an toàn và bảo
                      mật.
                    </p>
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

export default InforLX;
