import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./Cart.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { Rate } from "antd";
const FeaturedCard = ({ title, productfiter }) => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    fade: false,
    speed: 500,
    slidesToShow: productfiter?.length < 5 ? productfiter?.length : 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const text = "Son Kem Lì Espoir Couture Lip Tint Pure Velvet Garnet";
  const text2 =
    "Máy Uốn Tóc Tự Xoay Ion Âm Halio InstaCurl Premium Automatic Hair Styler Pearl White";

  return (
    <>
      <div className="slider">
        <div className="flex justify-between">
          <h1 className="text-[22px] mt-10 mb-5 font-bold">{title}</h1>
          <div className="flex">
            <Link to="/Sale">
              <h1 className="text-[15px] mt-10">{t("xemtatca")}</h1>
            </Link>
          </div>
        </div>

        <Slider {...settings} ref={sliderRef} className="h-[300px]">
          {productfiter?.map((item) => (
            <Link to={`Sale/${item._id}`} key={item._id}>
              <div className="card flex flex-col">
                <div className="image-container">
                  <img
                    src={item.images[0]?.url}
                    style={{
                      height: "150px",
                      width: "150px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </div>
                <div className="card-bottom">
                  <div className="text-left text-xs mb-2">
                    Đã bán: {item.sold}
                  </div>
                  <div className="text-left text-xs mb-2 ">
                    {item.title.slice(0, 50)}...
                  </div>
                  <div className="text-left">
                    <Rate
                      defaultValue={item.totalrating}
                      disabled
                      className=""
                    />
                  </div>
                  <div className="text-left text-xl font-bold">
                    {item?.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
        <div>
          <span className="next cursor-pointer" onClick={gotoPrev}></span>
          <span className="prew cursor-pointer" onClick={gotoNext}></span>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
