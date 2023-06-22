import "./css/styles.min.css";
import React, { useEffect, useState } from "react";
import { productData } from "../../data/productData";
import plusIcon from "../../Image/icon-plus.svg";
import minusIcon from "../../Image/icon-minus.svg";
import { Lightbox } from "./Lightbox";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  findProducts,
  listProductDetails,
} from "../../redux/action/productActions";
import imgError from "../../Image/imgError.jpg";
import { addItem } from "../../redux/action/cartActions";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Rate } from "antd";
import InforProduct from "./InforProduct";
import FeaturedCard2 from "../HomePage/Cart2";
import FeedBack from "./feedback";
import "./StarRating.css";
import LoadPage from "../../Loadpage/Loadpage";
import { useTranslation } from "react-i18next";

const Product = () => {
  const params = useParams();
  let id = params.id;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState(1);
  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const { isauth } = useSelector((store) => store.login);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;
  const Findproduct = useSelector((state) => state.productFind);
  const { productFind } = Findproduct;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [id]);

  useEffect(() => {
    if (product.category?._id) {
      dispatch(
        findProducts("", "", "", "", JSON.stringify([product.category?._id]))
      );
    }
  }, [id]);

  const handleAddToCart = (e) => {
    if (productQuantity && id) {
      dispatch(addItem(id, productQuantity));
    }
  };

  return product ? (
    <main className="product">
      <nav
        className="container w-[80%] flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg  mx-auto"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex pt-2 items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to={"/"}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] "
            >
              <AiOutlineHome />
              <div className="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 ">
                {t("TagHome")}{" "}
              </div>
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <Link
                to={"/Sale"}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] "
              >
                <AiOutlineShoppingCart />
                <div className="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 ">
                  {t("TagAllProduct")}{" "}
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                to={`/${id}`}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] "
              >
                <div className="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 truncate w-56">
                  {product.title}{" "}
                </div>
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div className="container-md grid product-container">
        <div className="flex product-image">
          <img
            onClick={() => window.innerWidth > 768 && setLightbox(true)}
            src={
              product.images == undefined || product.images.length == 0
                ? imgError
                : product.images[currentProductImage].url
            }
            alt=""
            className="shadow-sm"
            style={{ height: "445px", with: "445px" }}
          />
          <div className="thumbnail-wrapper flex">
            {product.images != undefined ? (
              product.images.map((item, index) => (
                <div className="thumbnail" key={index}>
                  <img
                    onClick={() => setCurrentProductImage(index)}
                    className={
                      currentProductImage === index
                        ? "active shadow-sm"
                        : "shadow-sm"
                    }
                    src={item.url}
                    alt="thumbnail"
                  />
                </div>
              ))
            ) : (
              <div>{t("loading")}...</div>
            )}
          </div>

          {window.innerWidth <= 768 && (
            <>
              <button
                onClick={() =>
                  setCurrentProductImage((prevState) =>
                    prevState === 0 ? productData.length - 1 : prevState - 1
                  )
                }
                className="lightbox-control control-prev"
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentProductImage((prevState) =>
                    prevState === productData.length - 1 ? 0 : prevState + 1
                  )
                }
                className="lightbox-control control-next"
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
        {lightbox && (
          <Lightbox productData={product} setLightbox={setLightbox} />
        )}
        <div className="product-description flow">
          <p className="text-uppercase fw-700 fs-100 letter-spacing-1 Orange text-left">
            {t("productCategory")} : {product.category?.title}
          </p>
          <h1 className="fw-700 line-height-300 fs-230 blue text-left text-2xl">
            {product.title}
          </h1>
          <p className="text-left text-lg text-[#fe2c6d]">
            {t("productBrand")} : {product.brand?.title}
          </p>
          <p className=" text-left text-lg">
            {t("productQuantity")}  : {product.quantity}
          </p>
          <p className="text-left text-lg">{t("productSold")} : {product.sold}</p>

          <div>
            <Rate
              className="flex"
              value={product.totalrating}
              style={{
                color: "#fe2c6d",
                fontSize: "16px",
                display: "flex",
                position: "static",
              }}
              disabled
            />
            <p className="flex text-lg">({product.reviewCount}) {t("productReview")}</p>
          </div>
          <div className="product-price">
            <div className="discounted-price flex text-lg">
              {t("productPrice")} :{" "}
              <span className="fw-700 blue fs-700">
                {product.price
                  ? product.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })
                  : ""}
              </span>
              {/* <span className="offer fw-700 fs-400 Orange">50%</span>
                            <span className="fw-700 fs-400 line-height-500 text-line-through GrayishBlue">
                                ...
                            </span> */}
            </div>
          </div>

          <div className="action-wrapper flex">
            <div className="product-quantity flex">
              <img
                src={minusIcon}
                alt=""
                onClick={() =>
                  setProductQuantity((prevState) =>
                    prevState !== 1 ? prevState - 1 : 1
                  )
                }
              />
              <span className="fw-700 fs-400 blue">
                {productQuantity ? productQuantity : 1}
              </span>
              <img
                src={plusIcon}
                alt=""
                onClick={() =>
                  setProductQuantity((prevState) =>
                    prevState !== product.quantity
                      ? prevState + 1
                      : product.quantity
                  )
                }
              />
            </div>
            {product.quantity == 0 ? (
              <button
                className="bg-[#6d6b6c] w-full py-3 px-6 flex text-center justify-center text-white text-[17px] rounded-xl "
                style={{ display: "flex" }}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#ffffff"
                    fillRule="nonzero"
                  />
                </svg>
                <p className="ml-2 mt-[2px]">{t("productButtonOutOfStock")}</p>
              </button>
            ) : isauth ? (
              <button
                onClick={handleAddToCart}
                className="bg-[#fe2c6d] w-full py-3 px-6 flex text-center justify-center text-white text-[17px] rounded-xl "
                style={{ display: "flex" }}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#ffffff"
                    fillRule="nonzero"
                  />
                </svg>
                <p className="ml-2 mt-[2px]">{t("productButtonAddCart")}</p>
              </button>
            ) : (
              <Link to={"../login"}>
                <button
                  onClick={() => alert(t("productAlertLogin"))}
                  className="bg-[#fe2c6d] w-full py-3 px-6 flex text-center justify-center text-white text-[17px] rounded-xl  "
                  style={{ display: "flex" }}
                >
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#ffffff"
                      fillRule="nonzero"
                    />
                  </svg>
                  <p className="ml-2 mt-[2px]">{t("productButtonAddCart")}</p>
                </button>
              </Link>
            )}
          </div>


        </div>
      </div>

      <div className="w-[90%] ml-auto mr-auto ">
        <div>
          <InforProduct description={product.description} />
        </div>
      </div>
      <div>
        <FeaturedCard2 products={productFind} />
      </div>

      <FeedBack product={id} />
    </main>
  ) : (
    <LoadPage />
  );
};

export default Product;
