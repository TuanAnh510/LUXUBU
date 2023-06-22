import React, { useEffect, useState } from "react";
import "./InforProduct.css";
import { useTranslation } from "react-i18next";

const InforProduct = ({ description }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <div className="text-[22px] text-left font-[600] tracking-[.5px] leading-[60px] text-black">
          {t("productDescriptionProduct")}
        </div>
        <div className="pt-3 pb-5">
          <div className="text-left text-[15px] leading-normal ">
            {React.createElement("div", {
              className: "text-left",
              dangerouslySetInnerHTML: { __html: description },
            })}
          </div>
          <div>
            <div className="info_Product"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforProduct;
