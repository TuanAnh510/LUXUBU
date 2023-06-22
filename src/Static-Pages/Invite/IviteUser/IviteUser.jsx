import React, { useState } from "react";
import "../Invite.css";
import { Link } from "react-router-dom";
import IviteNav from "../IviteNav";
import {
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
const Iviteuser = () => {
  return (
    <>
      <div className="Iv-container">
        <div className="Iv-style">
          <div className="wrapLayout">
            <div className="flex flex-wrap justify-between">
              <div className="listNav mt-2 w-[30%]">
                <IviteNav />
              </div>
              <div className="main_styler w-[100%] mb-2">
                <div className="flex flex-col bg-[#f5f6f6]">
                  <div className="items-center bg-[#fff] rounded-[8px] mb-[10px] pb-[40px] mt-2 flex flex-col ">
                    <div className="mt-[40px] pb-[3px] flex flex-col">
                      <span className="items-center text-[16px] mb-[16px] text-black">
                        Mã giới thiệu của bạn
                      </span>
                    </div>
                    <Link to={"/Login"} className="w-[80%]">
                      <div className="bor flex justify-end items-center h-[40px] ">
                        <span className=" text-[14px] text-[#fe2c6d] w-[100%] text-center">
                          Đăng nhập để xem mã giới thiệu
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white rounded-[8px]">
                    <div className="br w-[100%] h-[44px] bg-white flex">
                      <div className="item_kh">Các Mã Giảm Giá</div>
                    </div>
                    <div>
                      <div className="text-left ml-5 mt-3">
                        <span className="text-[15px]">
                          Các mức giảm giá khi giới thiệu bạn bè:{" "}
                        </span>
                      </div>
                      <div>
                        <ul className="text-[15px] text-left ml-5">
                          <li className="mt-3">
                            <input type="checkbox" />
                            Giảm giá 10%
                          </li>
                          <li className="mt-3">
                            {" "}
                            <input type="checkbox" />
                            Giảm giá 20%
                          </li>
                          <li className="mt-3">
                            {" "}
                            <input type="checkbox" />
                            Giảm giá 30%
                          </li>
                          <li className="mt-3">
                            {" "}
                            <input type="checkbox" />
                            Giảm giá 40%
                          </li>
                          <li className="mt-3">
                            {" "}
                            <input type="checkbox" />
                            Giảm giá 50%
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className=" mt-5 pb-5 flex justify-center items-center">
                          <a
                            className="pr-2"
                            href="https://www.facebook.com/sharer.php?u=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/"
                          >
                            <FaFacebook
                              className="hover:text-sky-600 text-gray-400"
                              size={32}
                            />
                          </a>
                          <a
                            className="pr-2"
                            href="https://pinterest.com/pin/create/button/?url=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/&media=https://everev.vn/wp-content/uploads/2023/03/Screenshot-2023-03-24-111735.png&description=S%E1%BA%A1c%20xe%20%C4%91i%E1%BB%87n%20KIA%2C%20Huyndai%20b%E1%BA%B1ng%20s%E1%BA%A1c%20EverEV%20t%E1%BA%A1i%20H%C3%A0n%20Qu%E1%BB%91c"
                          >
                            <AiOutlineInstagram
                              className="hover:text-[#e60023] text-gray-400"
                              size={35}
                            />
                          </a>
                          <a
                            className="pr-2"
                            href="https://twitter.com/share?url=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/"
                          >
                            <FaTwitter
                              className="hover:text-sky-600 text-gray-400"
                              size={32}
                            />
                          </a>
                          <a
                            className="pr-2"
                            href="mailto:enteryour@addresshere.com?subject=S%E1%BA%A1c%20xe%20%C4%91i%E1%BB%87n%20KIA%2C%20Huyndai%20b%E1%BA%B1ng%20s%E1%BA%A1c%20EverEV%20t%E1%BA%A1i%20H%C3%A0n%20Qu%E1%BB%91c&body=Check%20this%20out:%20https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/"
                          >
                            <FaEnvelope
                              className="text-gray-400 hover:text-black"
                              size={32}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="items-center bg-[#fff] rounded-[8px] mb-[10px] pb-[40px] mt-2  ">
                    <div className="mt-2">
                      <h5>Danh sách đã giới thiệu</h5>
                    </div>
                    <div className="flex flex-col">
                      <div className="overflow-x-auto">
                        <div className="p-1.5 w-full inline-block align-middle">
                          <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th scope="col" className="py-3 pl-4">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="checkbox-all"
                                        type="checkbox"
                                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                      />
                                      <label
                                        htmlFor="checkbox"
                                        className="sr-only"
                                      >
                                        Checkbox
                                      </label>
                                    </div>
                                  </th>

                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                                  >
                                    <span className="inline-flex items-center">
                                      Name
                                    </span>
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                                  >
                                    <span className="inline-flex items-center">
                                      Email
                                    </span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                <tr>
                                  <td className="py-3 pl-4">
                                    <div className="flex items-center h-5">
                                      <input
                                        type="checkbox"
                                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                      />
                                      <label
                                        htmlFor="checkbox"
                                        className="sr-only"
                                      >
                                        Checkbox
                                      </label>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Cu anh
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    anhlon@gmail.com
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-3 pl-4">
                                    <div className="flex items-center h-5">
                                      <input
                                        type="checkbox"
                                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                      />
                                      <label
                                        htmlFor="checkbox"
                                        className="sr-only"
                                      >
                                        Checkbox
                                      </label>
                                    </div>
                                  </td>

                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Cu em
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    emnho@gmail.com
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Iviteuser;
