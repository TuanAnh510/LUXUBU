import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "../Blog/recent.css";
import { useDispatch, useSelector } from "react-redux";

const RecentCard = () => {
  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  const formatDateTime = (time) => {
    const formattedDatetime = moment(time).format("HH:mm | DD/MM/YYYY");
    return formattedDatetime;
  };

  const filteredBlogs = blogs.filter(
    (article) => article.category._id === "64781019796e0fa619ca3f99"
  );

  return (
    <div className="container mx-auto">
      <div className="pt-[50px] w-[100%] max-w-[80%] ml-auto mr-auto flex justify-between md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        {filteredBlogs
          ?.map((item) => (
            <Link to={`/Tpost/${item._id}`}>
              <div className=" ">
                <div className="">
                  <img
                    src={item.images[0].url}
                    className="rounded-md h-[350px] w-[100%] object-cover"
                    alt=""
                  />
                </div>
                <div className="pt-2">
                  <h5 className="text-center text-white bg-black w-[43%] lg:w-[20%] lg:text-[20px] text-[15px] ">
                    {item.category.title}
                  </h5>
                </div>
                <div className="is-divider"></div>
                <div className="text pt-1">
                  <div className="h5_location text-[15px] truncate w-[350px] text-black text-left">
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          ))
          .slice(-2)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mtop w-[90%] ml-auto mr-auto mt-5">
        {blogs?.map((item) => (
          <Link to={`/Tpost/${item._id}`}>
            <div className="recentCard bg-color-card">
              <div className="RecentC_img">
                <img
                  src={item.images[0]?.url}
                  className="rounded-md h-[100%] w-[100%] object-cover"
                  alt=""
                />
              </div>
              <div className="is-divider mt-3"></div>
              <div className="text-sm font-bold text-left text-[#fe2c6d]">
                {item.category.title}
              </div>
              <div className="text pt-1">
                <h6 className="h5_location truncate w-4/5 text-[15px] text-black text-left">
                  {item.title}
                </h6>
              </div>
              <div className="text-sm text-gray-500 text-right">
                {formatDateTime(item.created)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentCard;
