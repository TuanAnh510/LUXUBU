import React, { useState } from "react";
import "./HomePage.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import Carts from "./Cart";
import Promotion from "./Promotion";
import MostSearch from "./mostsearch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listProducts } from "../../redux/action/productActions";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  const brandlist = useSelector((state) => state.brandList);
  const { brands } = brandlist;
  const categorylist = useSelector((state) => state.categoryList);
  const { categorys } = categorylist;
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  const jsonDataCopy1 = [...products];
  const jsonDataCopy2 = [...products];
  const jsonDataCopy3 = [...products];
  const jsonDataCopy4 = [...products];

  //lọc sản phẩm ngẫu nhiên
  const getRandomProducts = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const randomProducts = getRandomProducts(jsonDataCopy4, 5);

  const addToRecentlyViewed = (product) => {
    const isProductExist = recentlyViewedProducts.some(
      (prevProduct) => prevProduct.id === product.id
    );
    if (!isProductExist) {
      const updatedProducts = [product, ...recentlyViewedProducts.slice(0, 4)]; // Giới hạn danh sách sản phẩm vừa xem tối đa 5 sản phẩm
      setRecentlyViewedProducts(updatedProducts);
    }
  };

  const filteredProductsHot =
    jsonDataCopy1?.sort((a, b) => b.sold - a.sold) || [];
  const filteredProductsCreate =
    jsonDataCopy2?.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ) || [];

  //lọc sản phẩm bán chạy theo brand
  const brandSales = jsonDataCopy3.reduce((acc, product) => {
    if (acc[product.brand?._id]) {
      acc[product.brand?._id] += product.sold;
    } else {
      acc[product.brand?._id] = product.sold;
    }
    return acc;
  }, {});
  const brandSalesArray = Object.entries(brandSales);
  brandSalesArray.sort((a, b) => b[1] - a[1]);
  const mostSoldBrand =
    brandSalesArray.length > 0 ? brandSalesArray[0][0] : null;

  const filteredProducts = jsonDataCopy3.filter(
    (product) => product.brand?._id === mostSoldBrand
  );

  return (
    <>
      <Slider />
      <div className="w-[90%] mx-auto">
        {/* <div>
          <CartSale />
        </div> */}

        {/* <div className="bg-gray-50 h-full border-2 border-green-600 transition duration-150 ease-linear transform group-hover:border-green-700 rounded shadow-lg">
          <div className="bg-green-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
            <h3 className="text-[20px] font-bold ">
              Sản phẩm khuyến mãi và giá khuyến mãi
            </h3>
          </div>
          <div className="overflow-hidden">
            <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
              <div className="tengah py-2 px-3 flex items-center justify-items-start">
                <figure>
                  <span className=""></span>
                </figure>
              </div>
            </div>
          </div>
        </div> */}
        <div className="">
          <Carts title={t("carts")} productfiter={filteredProductsCreate} />
        </div>

        <div>
          <Carts title={t("carts2")} productfiter={filteredProductsHot} />
        </div>

        <div className="magazine mt-5">
          <div className="flex flex-wrap ">
            <div className="w-full sm:w-1/2 my-2">
              <img
                src="https://upload.lixibox.com/system/banners/covers/000/001/437/medium/1672814902.jpg"
                alt="alt"
              />
            </div>
            <div className="w-full sm:w-1/2 my-2">
              <img
                src="https://upload.lixibox.com/system/pictures/files/000/080/669/original/1673235292.jpg?v=1"
                alt="alt"
              />
            </div>
          </div>
        </div>

        <div className="">
          <Carts title={t("carts3")} productfiter={filteredProducts} />
        </div>
        <div className=" w-[90%] ml-auto mr-auto">
          <MostSearch />
        </div>
        <Carts title={t("carts4")} productfiter={randomProducts} />
        <div className="w-[90%] ml-auto mr-auto mb-5 pt-5 lg:flex md:hidden hidden">
          <Promotion />
        </div>
      </div>
    </>
  );
}

export default HomePage;
