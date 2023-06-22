import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import logo1 from "../logo/1666751678.png";
import logo2 from "../logo/1681098600.jpg";
import logo3 from "../logo/1666751998.png";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Category = () => {
  const dispatch = useDispatch();
  const categorylist = useSelector((state) => state.categoryList);
  const { categorys } = categorylist;
  const { t } = useTranslation();

  return (
    <div className="giftSetMainParent ">
      <div className="flex flex-col gap-2 bestSellerPriceHolder w-[250px]">
        <div className="text-left font-bold text-black text-[20px]   ">
          {t("listCategory")}
        </div>
        <div className="h-[400px] overflow-y-scroll mt-3">
          {categorys?.map((item, index) => (
            <Link key={item._id} to="Sale">
              <p
                className={`hover:text-[#ff2b70] text-left ${index !== 0 ? "mt-5" : ""
                  }`}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col-3 gap-5 mt-10 giftHold">
        <div className="gift">
          <img src={logo1} alt="" />
        </div>
        <div className="gift">
          <img src={logo2} alt="" />
        </div>
        <div className="gift">
          <img src={logo3} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Category;
