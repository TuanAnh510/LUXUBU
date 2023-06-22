import React from "react";
import { useState } from "react";
import { Input, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import imageUser from "../../Image/user.png";
import { addReview, reviewInProduct } from "../../redux/action/reviewActions";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const FeedBack = ({ product }) => {
  const dispatch = new useDispatch();
  const userId = window.localStorage.getItem("userid");
  const { t } = useTranslation();
  const [rate, setRate] = useState(5);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);

  const reviewList = useSelector((state) => state.reviewGet);
  const { reviews } = reviewList;

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  useEffect(() => {
    dispatch(reviewInProduct(product));
  }, [product]);

  const approvedReviews =
    reviews?.filter((item) => item.status === "Approved") || [];

  const handlerClickSendReview = () => {
    dispatch(addReview(product, userId, rate, title, review));
  };

  const formatDateTime = (time) => {
    const formattedDatetime = moment(time).format("HH:mm | DD/MM/YYYY");
    return formattedDatetime;
  };

  const calculateRatingPercentage = (approvedReviews, rating) => {
    if (approvedReviews.length === 0) return 0;
    const totalReviews = approvedReviews.length;
    const ratingCount = approvedReviews.filter(
      (review) => review.rating === rating
    ).length;
    const percentage = (ratingCount / totalReviews) * 100;
    return percentage.toFixed(2);
  };

  const calculateAverageRating = (approvedReviews) => {
    if (approvedReviews.length === 0) return 0;

    const totalRating = approvedReviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    const averageRating = totalRating / approvedReviews.length;

    return averageRating.toFixed(1);
  };
  const totalReviews = approvedReviews?.length;
  const fiveStarPercentage = calculateRatingPercentage(approvedReviews, 5);
  const fourStarPercentage = calculateRatingPercentage(approvedReviews, 4);
  const threeStarPercentage = calculateRatingPercentage(approvedReviews, 3);
  const twoStarPercentage = calculateRatingPercentage(approvedReviews, 2);
  const oneStarPercentage = calculateRatingPercentage(approvedReviews, 1);
  const averageRating = calculateAverageRating(approvedReviews);

  return (
    <div className="w-[90%] ml-auto mr-auto ">
      <div className=" p-4 bg-[#f5f6f6]">
        <div className="text-[25px] font-bold mr-2 text-left">{t("productReview")}</div>
        <div className="flex mt-3  ">
          <div className="w-full">
            <div className="mb-2">
              <div className="text-[15px] text-left mr-2">
                {t("productAverageRating")}
              </div>
            </div>
            <div className="flex justify-around ">
              <div className="text-center items-center">
                <div className="text-[80px] font-bold text-center text-[#fe2c6d]">
                  {averageRating}
                </div>
                <div>
                  <Rate
                    allowHalf
                    value={averageRating}
                    className="ml-28"
                    style={{
                      color: "#fe2c6d",
                      fontSize: "16px",
                      left: "-60px",
                    }}
                    disabled
                  />
                </div>
                <div className="pt-2 text-[15px]">{totalReviews} {t("productReview")}</div>
              </div>
              <div className="text-center items-center w-[40%]">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-black">5 {t("productRating")}</span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: `${fiveStarPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-black">
                    {Math.floor(fiveStarPercentage)}%
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium text-black">4 {t("productRating")}</span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: `${fourStarPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-black">
                    {Math.floor(fourStarPercentage)}%
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium text-black">3 {t("productRating")}</span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: `${threeStarPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-black">
                    {Math.floor(threeStarPercentage)}%
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium text-black">2 {t("productRating")}</span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: `${twoStarPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-black">
                    {Math.floor(twoStarPercentage)}%
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium text-black">1 {t("productRating")}</span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: `${oneStarPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-black">
                    {Math.floor(oneStarPercentage)}%
                  </span>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="mt-10 text-center items-center text-[15px]">
                  {t("productShare")}
                </div>
                <button
                  className="mt-4 mb-8 w-[30%] text-[15px] rounded-xl bg-[#fe2c6d] px-6 py-3 font-medium text-white"
                  onClick={toggleCommentForm}
                >
                  {showCommentForm ? t("productButtonHide") : t("productButtonWriteAReview")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCommentForm && (
        <div className=" bg-[#f5f6f6] w-[100%]">
          <div className=" bg-[#f5f6f6] w-[100%]">
            <div className="box_comment">
              <div className="text-left text-[15px]">
                {t("productReviewThisProduct")} *
              </div>
              <div className="text-left mt-3 mb-4 w-1/2 flex Relative">
                <Rate
                  tooltips={desc}
                  onChange={setRate}
                  value={rate}
                  style={{
                    color: "#fe2c6d",
                    fontSize: "30px",
                    width: "30%",
                    position: "static",
                  }}
                />
              </div>
              <div className="text-left text-[15px]">{t("productReviewTitle")} </div>
              <div className="mt-2 ">
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder={t("productPlaceHolderTitle")}

                />
              </div>
              <div className="mt-3 text-left text-[15px]">{t("productDiscription")}</div>
              <div className="mt-2 mb-5">
                <TextArea
                  onChange={(e) => setReview(e.target.value)}
                  rows={4}
                  placeholder={t("productPlaceHolderDiscription")}
                  maxLength={2500}
                />
              </div>
              <button
                onClick={handlerClickSendReview}
                className="mb-5 w-[30%] text-[15px] rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white"
              >
                {t("productButtonSend")}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white w-[100%] mx-auto">
        <div className="antialiased mx-auto ">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">{t("productComment")}</h3>
          {approvedReviews?.length != 0 ? (
            <div className="space-y-4 pt-3 h-[380px] w-[100%] overflow-y-scroll">
              {approvedReviews?.map((item) => (
                <div className="flex" key={item._id}>
                  <div className="flex-shrink-0 mr-3">
                    <img
                      className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                      src={
                        item.profilePicture ? item.profilePicture : imageUser
                      }
                      alt="avatar"
                    />
                  </div>
                  <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed text-left">
                    <strong>
                      {item.user.firstname} {item.user.lastname}
                    </strong>
                    <br />
                    <Rate
                      tooltips={desc}
                      value={item.rating}
                      style={{ color: "#fe2c6d", position: "static" }}
                      disabled
                    />
                    <br />
                    <span className="text-xs text-gray-400">{item.title}</span>
                    <p className="text-sm">{item.review}</p>

                    <div className="mt-4 flex items-center relative">
                      <div className="text-sm text-gray-400 font-medium">
                        {formatDateTime(item.created)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-gray-700">{t("productReviewNoComment")}</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default FeedBack;
