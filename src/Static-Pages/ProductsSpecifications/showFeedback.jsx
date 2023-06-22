import moment from "moment";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StarRating.css";
const ShowFeedBackProduct = ({ }) => {
  const [feedbackproduct, setFeedbackProduct] = useState([]);

  const renderStar = (starIndex) => {
    return (
      <span key={starIndex} className={"star selected"}>
        &#9733;
      </span>
    );
  };
  return (
    <div>
      <div className="w-full font-bold text-[20px]">
        <h4>Đánh giá</h4>
      </div>
      <div className="overflow-y-scroll h-[350px]">
        <hr />

        <div>
          <div className="font-bold text-[14px] pt-2">
            <p>alo</p>
          </div>
          <div className="text-[13px] ">
            <p className=" text-gray-400">
              Thời gian:{" "}
              <span className="italic text-gray-600 ">
                {moment(12 / 2 / 2003).format("DD-MM-YYYY")}
              </span>
            </p>
            <p className=" text-gray-400">
              Đánh giá: {[...Array(5)].map((n, i) => renderStar(i))}{" "}
            </p>

            <p className="text-gray-400 ">
              Nội dung: <span className="italic text-gray-600 ">alo</span>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default ShowFeedBackProduct;
