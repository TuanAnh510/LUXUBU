import React, { useState, useEffect } from "react";
import "./filter.css";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  findProductsPrice,
} from "../../redux/action/productActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { MdOutlineFindReplace } from "react-icons/md"
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const modalStyles = {
  overlay: {
    zIndex: 50,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "none",
    backgroundColor: "none",
  },
  content: {
    position: "absolute",
    inset: "235px 300px 0px 50%",
    bottom: 0,
    left: "50%",
    transform: "translateX(-79%) translateY(100%)",
    width: "80%",
    maxWidth: 400,
    maxHeight: 200,
    margin: "0 auto",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: "#ffffff",
    outline: "none",
  },
};

const modalPrice = {
  overlay: {
    zIndex: 50,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "none",
    backgroundColor: "none",
  },
  content: {
    position: "absolute",
    inset: "235px 300px 0px 50%",
    bottom: 0,
    left: "50%",
    transform: "translateX(-79%) translateY(70%)",
    width: "80%",
    maxWidth: 400,
    maxHeight: 283,
    margin: "0 auto",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: "#ffffff",
    outline: "none",
  },
};
const modalCategory = {
  overlay: {
    zIndex: 50,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "none",
    backgroundColor: "none",
  },
  content: {
    position: "absolute",
    inset: "236px 300px 0px 50%",
    bottom: 0,
    left: "50%",
    transform: "translateX(-79%) translateY(70%)",
    width: "80%",
    maxWidth: 400,
    maxHeight: 283,
    margin: "0 auto",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: "#ffffff",
    outline: "none",
  },
};
const Filter = () => {
  const params = useParams();
  let idBrand = params.id;
  const { t } = useTranslation();

  const dispatch = new useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenPrice, setIsModalOpenPrice] = useState(false);
  const [isModalOpenCategory, setIsModalOpenCategory] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isFind, setIsFind] = useState(false);
  const [selectedCategorys, setSelectedCategorys] = useState([]);
  const [inStock, setInStock] = useState("");
  const [selectIDPrice, setSelectIDPrice] = useState();
  const categorylist = useSelector((state) => state.categoryList);
  const { categorys } = categorylist;

  const isIdSelectedCategory = (id) => selectedCategorys.includes(id);

  const handleModalToggle = () => {
    if (isModalOpen == false) {
      setIsModalOpenPrice(false);
      setIsModalOpenCategory(false);
    }
    setIsModalOpen(!isModalOpen);
  };

  const handleModalPrice = () => {
    if (isModalOpenPrice == false) {
      setIsModalOpen(false);
      setIsModalOpenCategory(false);
    }
    setIsModalOpenPrice(!isModalOpenPrice);
  };

  const handleModalCategory = () => {
    if (isModalOpenCategory == false) {
      setIsModalOpen(false);
      setIsModalOpenPrice(false);
    }
    setIsModalOpenCategory(!isModalOpenCategory);
  };

  const handlePriceChange = (minP, maxP, index) => {
    setMinPrice(minP);
    setMaxPrice(maxP);
    setSelectIDPrice(index);
  };
  const handleSelectCheckboxChangeCategory = (e) => {
    const selectedCategory = e.target.value;
    if (e.target.checked) {
      setSelectedCategorys((prevSelectedCategorys) => [
        ...prevSelectedCategorys,
        selectedCategory,
      ]);
    } else {
      setSelectedCategorys((prevSelectedCategorys) =>
        prevSelectedCategorys.filter(
          (category) => category !== selectedCategory
        )
      );
    }
  };
  const handleOutOfStockChange = (e) => {
    setInStock(e.target.value);
  };
  const handleFindButtonClick = () => {
    dispatch(
      findProductsPrice(
        minPrice,
        maxPrice,
        `["${idBrand}"]`,
        inStock,
        JSON.stringify(selectedCategorys) == "[]"
          ? ""
          : JSON.stringify(selectedCategorys)
      )
    );
    setIsModalOpenPrice(false);
    setIsModalOpen(false);
    setIsModalOpenCategory(false);
    setIsFind(true);
  };
  const handleResetButtonClick = () => {
    setIsModalOpenPrice(false);
    setIsModalOpen(false);
    setIsModalOpenCategory(false);
    setMinPrice("");
    setMaxPrice("");
    setInStock("");
    setSelectedCategorys([]);
    dispatch(findProductsPrice("", "", `["${idBrand}"]`, "", ""));
    setIsFind(false);
  };
  const handleCloseButtonClick = () => {
    setIsModalOpenPrice(false);
    setIsModalOpen(false);
    setIsModalOpenCategory(false);

  };
  return (
    <div className="h-[100px] w-[100%]">
      <div className="bg-[#fff] relative w-[100%] z-99">
        <div className="Filter_container">
          <div className="flex">
            <div className="flex items-center py-2 px-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    className="bg-white py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onClick={handleModalPrice}
                  >
                    {t("saleFindPrice")}
                  </button>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                    <FontAwesomeIcon
                      icon={isModalOpenPrice ? faChevronDown : faChevronRight}
                      className="mr-2"
                    />
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="bg-white py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onClick={handleModalToggle}
                  >
                    {t("saleFindCondition")}
                  </button>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                    <FontAwesomeIcon
                      icon={isModalOpen ? faChevronDown : faChevronRight}
                      className="mr-2"
                    />
                  </div>
                </div>

                <div className="relative">
                  <button
                    className="bg-white py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onClick={handleModalCategory}
                  >
                    {t("saleFindCategory")}
                  </button>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                    <FontAwesomeIcon
                      icon={
                        isModalOpenCategory ? faChevronDown : faChevronRight
                      }
                      className="mr-2 "
                    />
                  </div>
                </div>
                {isFind && (
                  <div className="relative">
                    <button
                      className="bg-sky-950 py-2 px-4 pr-6 rounded shadow leading-tight text-white focus:outline-none focus:shadow-outline"
                      onClick={handleResetButtonClick}
                    >
                      {t("saleFindCancel")}
                    </button>
                    <div className="pointer-events-none absolute inset-y-0 pr-1 right-0 flex items-center text-white">
                      <MdOutlineFindReplace />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {isModalOpenCategory && (
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpenCategory}
          onRequestClose={handleModalCategory}
          style={modalCategory}
          contentLabel="Trạng thái"
        >
          <div className="flex flex-col ">
            <div className="overflow-y-scroll h-[150px]">
              {categorys?.map((item, i) => (
                <div className="flex items-center mb-2 " key={i}>
                  <input
                    type="checkbox"
                    value={item._id}
                    checked={isIdSelectedCategory(item._id)}
                    onChange={handleSelectCheckboxChangeCategory}
                    className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="text-[15px] font-medium text-black">
                    {item.title}
                  </label>
                </div>
              ))}
            </div>

            <hr className="my-4" />
            <div className="flex justify-center">
              <button
                className="bg-black text-white w-[40%] py-2 rounded mr-2"
                onClick={handleFindButtonClick}
              >
                {t("saleFindApply")}
              </button>
              <button
                className="text-pink-600 py-2 px-4 rounded"
                onClick={handleCloseButtonClick}
              >
                {t("saleFindClose")}
              </button>

            </div>
          </div>
        </Modal>
      )}
      {isModalOpenPrice && (
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpenPrice}
          onRequestClose={handleModalPrice}
          style={modalPrice}
          contentLabel="Trạng thái"
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="priceRange"
                checked={selectIDPrice == 1}
                onChange={(e) => handlePriceChange(0, 100000, 1)}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl"
              />
              <label className="text-[15px] font-medium text-black">
                0đ - 100.000đ
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="priceRange"
                checked={selectIDPrice == 2}
                onChange={(e) => handlePriceChange(100000, 500000, 2)}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl"
              />
              <label className="text-[15px] font-medium text-black">
                100.000đ - 500.000đ
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="priceRange"
                checked={selectIDPrice == 3}
                onChange={(e) => handlePriceChange(500000, 1000000, 3)}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl"
              />
              <label className="text-[15px] font-medium text-black">
                500.000đ - 1.000.000đ
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="priceRange"
                checked={selectIDPrice == 4}
                onChange={(e) => handlePriceChange(1000000, 2000000, 4)}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl"
              />
              <label className="text-[15px] font-medium text-black">
                1.000.000đ - 2.000.000đ
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="priceRange"
                checked={selectIDPrice == 5}
                onChange={(e) => handlePriceChange(2000000, 5000000, 5)}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded-xl"
              />
              <label className="text-[15px] font-medium text-black">
                2.000.000đ - 5.000.000đ
              </label>
            </div>
            <hr className="my-4" />
            <div className="flex justify-center">
              <button
                className="bg-black text-white w-[40%] py-2 rounded mr-2"
                onClick={handleFindButtonClick}
              >
                {t("saleFindApply")}
              </button>
              <button
                className="text-pink-600 py-2 px-4 rounded"
                onClick={handleCloseButtonClick}
              >
                {t("saleFindClose")}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {isModalOpen && (
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpen}
          onRequestClose={handleModalToggle}
          style={modalStyles}
          contentLabel="Trạng thái"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                value={"1"}
                checked={inStock === "1"}
                name="instock"
                onChange={handleOutOfStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-2 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-[15px] font-medium text-black">
                {t("productButtonInStock")}
              </label>
            </div>
            <div className="flex items-center ">
              <input
                value={"0"}
                checked={inStock === "0"}
                name="instock"
                type="radio"
                onChange={handleOutOfStockChange}
                className="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-[15px] font-medium text-black">
                {t("productButtonOutOfStock")}
              </label>
            </div>

            <hr className="my-4" />
            <div className="flex justify-center">
              <button
                className="bg-black text-white w-[40%] py-2 rounded mr-2"
                onClick={handleFindButtonClick}
              >
                {t("saleFindApply")}
              </button>
              <button
                className="text-pink-600 py-2 px-4 rounded"
                onClick={handleCloseButtonClick}
              >
                {t("saleFindClose")}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Filter;
