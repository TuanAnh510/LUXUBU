import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./CartBlog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from "../../Image/1.webp";
import img2 from "../../Image/1647316643.webp";
import img3 from "../../Image/1672817926.webp";
import img4 from "../../Image/1682067960.webp";
import img5 from "../../Image/1682270821.webp";
import { Rate } from "antd";
const CartBlog = ({ filteredBlogs }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    fade: false,
    speed: 500,
    slidesToShow: filteredBlogs?.length > 5 ? 5 : filteredBlogs.length,
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
          <h1 className="text-[22px] mt-10 font-bold">Bài Viết Liên Quan</h1>
        </div>

        <Slider {...settings} ref={sliderRef} className="h-[300px]">
          {filteredBlogs?.map((item, i) => (
            <div className="card flex flex-col mx-auto pt-4" key={i}>
              <div className="image-container">
                <img
                  src={item.images[0].url}
                  className="rounded-lg "
                  style={{
                    height: "150px",
                    width: "290px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </div>
              <div className="pt-4 mx-auto w-2/3">
                <div className="text-center truncate text-[15px] mb-2 font-bold">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CartBlog;
