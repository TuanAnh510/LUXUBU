import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./Cart.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from "../../Image/1.webp";
import img2 from "../../Image/1647316643.webp";
import img3 from "../../Image/1672817926.webp";
import img4 from "../../Image/1682067960.webp";
import img5 from "../../Image/1682270821.webp";
import { FcFlashOn } from "react-icons/fc";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useTranslation } from "react-i18next";
import { Rate } from "antd";
const CartSale = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    fade: false,
    speed: 500,
    slidesToShow: 5,
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
        <Link to="/DealsSale">
          <div className="flex justify-between bg-[#fe2c6d] h-[50px]">
            <div className="text-[15px] sm:text-[15px]  lg:text-[20px]  text-black font-bold flex text-black">
              <FcFlashOn size="40px" className="mt-2" />
              <div className="mt-4 text-[20px]">{t("sale")}</div>
              <div className="flex text-black ml-3">
                <FlipClockCountdown
                  to={new Date().getTime() + 24 * 3600 * 1000}
                  digitBlockStyle={{ width: 20, height: 30, fontSize: 30 }}
                  showLabels={false}
                ></FlipClockCountdown>
              </div>
            </div>

            <div className="flex">
              <div className="text-[18px] rounded-md  text-center justify-center mt-4 text-black mr-3 ">
                {t("xemtatca")}
              </div>
            </div>
          </div>
        </Link>

        <Slider {...settings} ref={sliderRef} className="h-[300px]">
          <div className="card flex flex-col">
            <div className="image-container">
              <img
                src={img1}
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="card-bottom">
              <div className="text-left text-xs mb-2">Halio</div>
              <div className="text-left text-xs mb-2">
                {text.slice(0, 50)}...
              </div>
              <div>
                <Rate allowHalf defaultValue={3} />
              </div>
              <div className="text-left text-xl font-bold">1.500.000 ₫</div>
            </div>
          </div>
          <div className="card flex flex-col">
            <div className="">
              <img
                src={img5}
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="card-bottom">
              <div className="text-left text-xs mb-2">Halio</div>
              <div className="text-left text-xs mb-2">
                {text2.slice(0, 50)}...
              </div>
              <div>
                <Rate allowHalf defaultValue={3} />
              </div>
              <p className="text-left text-xl font-bold">1.500.000 ₫</p>
            </div>
          </div>
          <div className="card flex flex-col">
            <div className="">
              <img
                src={img2}
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="card-bottom">
              <div className="text-left text-xs mb-2">Espoir</div>
              <div className="text-left text-xs mb-2">
                {text2.slice(0, 50)}...
              </div>
              <div>
                <Rate allowHalf defaultValue={3} />
              </div>
              <p className="text-left text-xl font-bold">1.500.000 ₫</p>
            </div>
          </div>
          <div className="card flex flex-col">
            <div className="image-container2">
              <img
                src={img3}
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="image-1"
              />
              <img
                src="	https://upload.lixibox.com/system/pictures/files/000/080/309/large/1672817972.webp?v=2"
                style={{
                  height: "150px",
                  width: "180px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                alt=""
                className="image-2"
              />
            </div>
            <div className="card-bottom">
              <div className="text-left text-xs">Halio</div>
              <div className="text-left text-xs mb-2">
                {text2.slice(0, 50)}...
              </div>
              <div>
                <Rate allowHalf defaultValue={3} />
              </div>
              <p className="text-left text-xl font-bold">1.500.000 ₫</p>
            </div>
          </div>
          <div className="card flex flex-col">
            <div className="">
              <img
                src={img4}
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="card-bottom">
              <div className="text-left text-xs">Halio</div>
              <div className="text-left text-xs mb-2">
                {text2.slice(0, 50)}...
              </div>
              <div>
                <Rate allowHalf defaultValue={3} />
              </div>
              <p className="text-left text-xl font-bold">1.500.000 ₫</p>
            </div>
          </div>
          <div className="card flex flex-col">
            <div className="">
              <img
                src={img4}
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="card-bottom">
              <div className="text-left text-xs">Halio</div>
              <div className="text-left text-xs mb-2">
                {text2.slice(0, 50)}...
              </div>
              <div>
                <Rate allowHalf defaultValue={3} />
              </div>
              <p className="text-left text-xl font-bold">1.500.000 ₫</p>
            </div>
          </div>
        </Slider>
        <div>
          <span className="next cursor-pointer" onClick={gotoPrev}></span>
          <span className="prew cursor-pointer" onClick={gotoNext}></span>
        </div>
      </div>
    </>
  );
};

export default CartSale;
