import React from "react";
import { useState } from "react";
import axios from "axios";
import imgError from "../../Image/imgError.jpg";
import styles from "./Sales.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect } from "react";
import Stars from "./Stars";
import Pagination from "./Pagination";
import svglogo from "../../Image/flash_deal_title_pink.svg";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/action/productActions";
import { FiClock } from "react-icons/fi";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
const DealsSale = () => {
  const [products, setProducts] = useState([]);
  const [sort_x, setSort_x] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  useEffect(() => {
    if (productList) {
      if (productList.products) setProducts([...productList.products]);
    }
  }, [productList]);

  useEffect(() => {
    if (!products || products?.length == 0) dispatch(listProducts());
  }, []);

  console.log(products.length);
  return products.length != 0 ? (
    <div className={styles.main__sales}>
      <div>
        <div className="">
          <div className="flex items-center justify-center">
            <img src={svglogo} alt="" width="15%" className={styles.imgLogo} />
            <div className="flex text-black ml-3">
              <FlipClockCountdown
                to={new Date().getTime() + 24 * 3600 * 1000}
                digitBlockStyle={{ width: 20, height: 30, fontSize: 20 }}
                separatorStyle={{ color: "#ff235c" }}
                showLabels={false}
              ></FlipClockCountdown>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Flast_sale}>
        <div className={styles.products_area}>
          <div className={styles.all__sale__products}>
            {products?.map((item) => (
              <Link
                to={`/Sale/${item._id}`}
                className={"rounded-xl shadow-2xl p-1"}
              >
                <div key={item._id} className={styles.each_product}>
                  <div>
                    <div className={styles.wishlist}>
                      <AiOutlineHeart />
                    </div>
                    <img
                      src={
                        item.images[0] == undefined
                          ? imgError
                          : item.images[0].url
                      }
                      className="rounded-lg"
                      alt="product_img"
                    />
                  </div>
                  <p className="text-left text-black font-bold text-lg mt-2">
                    {item.title.slice(0, 45)}...
                  </p>
                  <div className="mt-3">
                    <Stars stars={item.totalrating} />
                  </div>
                  <p className="text-left text-black font-bold text-lg mt-2">
                    {" "}
                    {item.price
                      ? item.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })
                      : ""}
                  </p>
                  <br />
                </div>
              </Link>
            ))}
          </div>

          <div
            className={`${styles.sort_page} ${styles.responsive__sort_page}`}
            style={{ marginTop: "50px" }}
          >
            <div className={`${styles.sorting} ${styles.hide__sorting}`}></div>

            <div className={styles.pagination}>
              {/* <Pagination setCurrentPage={setCurrentPage} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default DealsSale;
