import React, { useState } from "react";

import "./Carts.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { addItem, removeItem } from "../../redux/action/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { CART_ADD_ITEM } from "../../redux/const/cartConstants";
import { toast } from "react-toastify";
import { loadUser } from "../../redux/action/auth";
import { getCoupon } from "../../redux/action/couponAction";
// import { useNavigate } from "react-router-dom";

// import { useStateContext } from '../Context/CartContext';
const vouchers = [
  {
    ma: "123",
    dis: 10000,
  },
  {
    ma: "Ma1",
    dis: 15000,
  },
];
const Carts = () => {
  const dispatch = useDispatch();
  const [totalPrices, setTotalPrices] = useState(0);
  const [total, setTotal] = useState(0);
  const [voucher, setVoucher] = useState();
  const [voucherDiscount, setVoucherDiscount] = useState(0);
  const [voucherPrices, setVoucherPrices] = useState(0);
  const [voucherTitle, setVoucherTitle] = useState("");
  const iduser = localStorage.getItem("userid") || "";
  let cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
  let couponOld = JSON.parse(localStorage.getItem("coupon")) || [];
  const coupons = useSelector((state) => state.couponGet);
  const { coupon } = coupons;

  const totalPrice = (price, qty) => {
    const total = price * qty;
    return total;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartData.forEach((item) => {
      totalPrice += item.price * item.qty;
    });

    return totalPrice;
  };

  const calculateTotal = () => {
    let total = 0;
    if (voucherDiscount == 0) {
      return totalPrices;
    } else {
      total = totalPrices - (totalPrices / 100) * voucherDiscount;
      return total;
    }
  };

  const calculateVoucher = () => {
    let price = 0;
    if (voucherDiscount == 0) {
      return 0;
    } else {
      price = (totalPrices / 100) * voucherDiscount;
      return price;
    }
  };
  useEffect(() => {
    const totalPrice = calculateTotalPrice();
    setTotalPrices(totalPrice);
    const totals = calculateTotal();
    setTotal(totals);
    const priceVoucher = calculateVoucher();
    setVoucherPrices(priceVoucher);

    window.localStorage.setItem("total", totals);
  }, [cartData]);

  useEffect(() => {
    const oldCoupon = couponOld;
    if (Object.keys(oldCoupon).length === 0) {
      if (Object.keys(coupon).length !== 0) {
        setVoucherTitle(coupon.name);
        setVoucherDiscount(coupon.discount);
        localStorage.setItem("coupon", JSON.stringify(coupon));
      }
    } else {
      setVoucherTitle(oldCoupon.name);
      setVoucherDiscount(oldCoupon.discount);
    }
  }, [coupon]);

  const addVoucher = () => {
    dispatch(getCoupon(voucher, iduser));
  };
  const handlerClearCoupon = () => {
    setVoucherDiscount(0);
    setVoucherTitle("");
    localStorage.removeItem("coupon");
  };
  return (
    <>
      <h1 className="text-[30px] font-bold mt-3 text-[#fe2c6d]">Giỏ hàng</h1>

      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1 ">
            <div class="overflow-x-scroll h-[400px]">
              <table className="w-full text-sm lg:text-base" cellspacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="md:table-cell">Ảnh </th>
                    <th className="text-center">Sản phẩm</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span className="hidden lg:inline">Số lượng</span>
                    </th>
                    <th className="hidden text-right md:table-cell">Giá</th>
                    <th className="text-right">Tổng giá</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item, index) => (
                    <tr key={item.product}>
                      <td className=" pb-4 md:table-cell ">
                        <a href="#">
                          <img
                            src={item.image}
                            className="w-20 h-20 rounded mx-auto rounded-lg shadow-lg"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <p className="mb-2 md:ml-4 truncate max-w-[130px] mx-auto ">
                          {item.title}
                        </p>

                        <button className="text-gray-700 md:ml-4 ">
                          <small
                            onClick={() => {
                              dispatch(removeItem(item.product));
                            }}
                            className="hover:text-red-500"
                          >
                            (Xóa sản phẩm)
                          </small>
                        </button>
                      </td>
                      <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10 ">
                          <div className="relative flex w-full h-8">
                            <input
                              type="text"
                              value={item.qty}
                              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black "
                              disabled
                            />
                          </div>
                          <div
                            class="inline-flex rounded-md shadow-sm"
                            role="group"
                          >
                            <button
                              type="button"
                              onClick={() => {
                                item.qty != 1
                                  ? dispatch(
                                      addItem(
                                        item.product,
                                        Number(item.qty - 1)
                                      )
                                    )
                                  : dispatch(removeItem(item.product));
                              }}
                              class="px-3 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-[#fe2c6d] focus:z-10 focus:ring-2 focus:ring-[#fe2c6d] focus:text-[#fe2c6d] "
                            >
                              -
                            </button>
                            <button
                              onClick={() => {
                                item.quantityProduct != item.qty &&
                                  dispatch(
                                    addItem(item.product, Number(item.qty + 1))
                                  );
                              }}
                              type="button"
                              class="px-3 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-[#fe2c6d] focus:z-10 focus:ring-2 focus:ring-[#fe2c6d] focus:text-[#fe2c6d] "
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          {item.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          {totalPrice(item.price, item.qty).toLocaleString(
                            "vi-VN",
                            { style: "currency", currency: "VND" }
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-2 bg-gray-100 rounded-full">
                  <p className="ml-2 text-[20px] font-bold uppercase ">
                    Mã giảm giá
                  </p>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">
                    Nếu bạn có mã giảm giá, vui lòng nhập vào ô bên dưới
                  </p>
                  <div className="justify-center md:flex">
                    <div className="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                      <input
                        onChange={(e) => setVoucher(e.target.value)}
                        type="coupon"
                        name="code"
                        id="coupon"
                        placeholder="Nhập Voucher"
                        className="w-full bg-gray-100 h-7 rounded-lg text-black outline-none appearance-none focus:outline-none active:outline-none"
                      />
                      <button
                        onClick={addVoucher}
                        className="text-sm flex items-center px-3 py-1 text-white bg-[#fe2c6d] rounded-full outline-none md:px-4 "
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="fas"
                          data-icon="gift"
                          className="w-8 h"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          />
                        </svg>
                        <span className="font-medium">Thêm mã giảm giá</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-2 bg-gray-100 rounded-full">
                  <p className="ml-2 text-[20px] font-bold uppercase">
                    Tổng tiền
                  </p>
                </div>
                <div className="p-4">
                  <p className="mb-6  italic">
                    Chi phí vận chuyển và chi phí bổ sung được tính toán dựa
                    trên các giá trị bạn đã nhập
                  </p>
                  <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Tổng tiền sản phẩm
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {totalPrices.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                  </div>
                  {voucherDiscount != 0 ? (
                    <div className="flex justify-between pt-4 border-b">
                      <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                        <button
                          onClick={handlerClearCoupon}
                          className="mr-2 mt-1 lg:mt-2"
                        >
                          <svg
                            aria-hidden="true"
                            data-prefix="far"
                            data-icon="trash-alt"
                            className="w-4 text-red-600 hover:text-red-800"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                            />
                          </svg>
                        </button>
                        Mã giảm giá "{voucherTitle}"{" "}
                        <p className="pl-4 text-[#fe2c6d]">
                          {" "}
                          - {voucherDiscount} %
                        </p>
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-[#fe2c6d]">
                        -
                        {voucherPrices.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>
                  ) : null}

                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Tổng thanh toán
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {total.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                  </div>
                  <Link to={"/payment"}>
                    <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-[#fe2c6d] rounded-full shadow item-center ">
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="credit-card"
                        className="w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                        />
                      </svg>
                      <span className="ml-2 mt-1 text-sm">Thanh toán</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
