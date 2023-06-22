import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./Cart.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Rate } from "antd";
import Stars from "../SalesPage/Stars";
const FeaturedCard2 = ({ products }) => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    fade: false,
    speed: 500,
    slidesToShow: products.length > 5 ? 5 : products.length,
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


  return (
    <>
      <div className="slider">
        <div className="flex justify-between">
          <h1 className="text-[22px] mt-10 font-bold">{t("productRelated")}</h1>
          <div className="flex">
            <Link to={`/sale`}>
              <h1 className="text-[15px] mt-10 hover:text-red-500">{t("productViewAll")}</h1>

            </Link>
          </div>
        </div>

        <Slider {...settings} ref={sliderRef} className="h-[300px]">


          {products.map((item, i) => (
            <Link key={i} to={`/sale/${item._id}`}>
              <div className="card flex flex-col" >
                <div className="">
                  <img
                    src={item.images[0].url}
                    style={{
                      height: "150px",
                      width: "150px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </div>
                <div className="card-bottom">

                  <div className="flex justify-center">

                    <div className="text-left text-xs mb-2">
                      {item.title.slice(0, 50)}...
                    </div>
                  </div>
                  <div className="mx-auto flex justify-center mb-2">
                    <div>
                      <Stars stars={item.totalrating} />
                    </div>
                    {/* <Rate allowHalf defaultValue={parseInt(item.totalrating)} disabled /> */}
                  </div>
                  <p className="text-center text-xl font-bold">{item.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}</p>
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

export default FeaturedCard2;
