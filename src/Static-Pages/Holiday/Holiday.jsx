import React, { useState } from "react";
import imgError from "../../Image/imgError.jpg";
import "../SalesPage/Sales.module.css";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Stars from "../SalesPage/Stars";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilTer from "./filter";
import { findProductsPrice } from "../../redux/action/productActions";
import { useEffect } from "react";
import { listbrandDetails } from "../../redux/action/brandActions";
import { useTranslation } from "react-i18next";


function Holiday() {
  const params = useParams();
  let idBrand = params.id;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  const branddetail = useSelector((state) => state.brandDetails);
  const { brand } = branddetail;
  console.log(brand);
  useEffect(() => {

    dispatch(listbrandDetails(idBrand))

    dispatch(
      findProductsPrice("", "", `["${idBrand}"]`, "", "")
    );

  }, []);


  return (
    <div className="main__sales">
      <nav
        className="container w-[80%] flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg mx-auto"
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
                to={"/Brands"}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] "
              >
                <AiOutlineShoppingCart />
                <div className="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 ">
                  {t("TagAllBrand")}{" "}
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
                to={`/brands/${brand?._id}`}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#fe2c6d] "
              >

                <div className="ml-1 text-sm font-medium text-gray-700 hover:text-[#fe2c6d] md:ml-2 ">
                  {brand?.title}
                </div>
              </Link>
            </div>
          </li>
        </ol>
      </nav>

      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <aside className="md:w-1/3 lg:w-1/4 px-4 py-4">
            <div className="space-y-1">
              <div>
                <div className="hidden md:block mt-10">
                  <div className="flex-col">
                    <div>
                      <img src={brand.images ? brand.images[0].url : ""} alt="" className="w-[60%] mx-auto" />
                    </div>
                    <div className="leading-loose text-[15px] mt-3 text-left text-justify text-[#696969]">
                      {brand.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <main className="md:w-2/3 lg:w-3/4 w-4/4 px-3">
            <div>
              <div className="mt-4 hidden md:block">
                <FilTer />
              </div>
              {loading === false ? (
                <div className="mt-4 grid gap-y-10 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {products?.length != 0 ? (
                    <>
                      {products?.map((item) => (
                        <div
                          key={item._id}
                          className="shadow-md shadow-red-300 min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-color-basic group-hover:opacity-75 lg:aspect-none lg:h-50"
                        >
                          <div>
                            <div className="wishlist px-2 py-2">
                              <AiOutlineHeart className="text-2xl text-[#fe2c6d]" />
                            </div>
                            <Link
                              to={`/Sale/${item._id}`}
                              className="group relative bg-color-card rounded-md shadow overflow-hidden flex justify-center"
                            >
                              <img
                                src={
                                  item.images[0] === undefined
                                    ? imgError
                                    : item.images[0].url
                                }
                                className="rounded-lg h-[160px] w-full flex"
                                alt="product_img"
                              />
                            </Link>
                          </div>
                          <hr className="w-[100%] mx-auto text-[#fe2c6d]" />
                          <Link
                            to={`/Sale/${item._id}`}
                            className="group relative bg-color-card rounded-md shadow overflow-hidden"
                          >
                            <div className="mt-2 flex justify-center pl-[10px] py-1 overflow-hidden">
                              <div>
                                <div className="flex justify-between ">
                                  <Link to={`../brands/${item.brand._id}`} className=" text-[#fe2c6d] text-sm border border-[#fe2c6d] p-1 rounded-lg ">{item.brand.title}</Link>
                                  <div className="text-left text-sm p-1">{item.category.title.slice(0, 15)}...</div>
                                </div>
                                <br />
                                <div className=" h-[35px]">
                                  <p className="text-sm text-[#3E4048] text-left">
                                    {item.title.slice(0, 50)}...
                                  </p>
                                </div>
                                <div className="text-left mt-2">
                                  <Stars stars={item.totalrating} />
                                </div>
                                <p className="text-left text-black font-bold text-lg mt-2">
                                  {item.price
                                    ? item.price.toLocaleString("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    })
                                    : ""}
                                </p>

                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="text-center">{t("productNotFound")}</div>
                  )}
                </div>
              ) : (
                <></>
              )}

              {/* <div
          className={`${styles.sort_page} ${styles.responsive__sort_page}`}
          style={{ marginTop: "50px" }}
        >
          <div className={`${styles.sorting} ${styles.hide__sorting}`}></div>

          <div className={styles.pagination}>
            <Pagination setCurrentPage={setCurrentPage} />
          </div>
        </div> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Holiday;
