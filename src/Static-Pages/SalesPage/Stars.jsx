import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = (props) => {
  const { stars } = props;
  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar size={16} color="#fe2c6d" />
        ) : stars >= number ? (
          <FaStarHalfAlt size={16} color="#fe2c6d" />
        ) : (
          <FaRegStar size={16} color="#fe2c6d" />
        )}
      </span>
    );
  });

  return (
    <div className="">
      <div className="flex flex-row test-[black]">{ratingStar}</div>
    </div>
  );
};

export default Stars;
