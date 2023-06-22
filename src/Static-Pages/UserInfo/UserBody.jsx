import React, { useEffect, useState } from "react";
import "./css/UserInfor.css";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import img1 from "../../Image/Ivite1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByIdUser } from "../../redux/action/orderActions";
import TableAntd from "./TableGetOrder";
import TableAntdAction from "./TableGetOrderAction";
import cartgif from "../../Image/cartGif.gif";
const UserBody = ({ setTab, tab }) => {
  const orderByUser = useSelector((state) => state.orderGetAll);
  const { isloadingGetOrder, getOrder } = orderByUser;
  const dispatch = useDispatch();

  const userId = window.localStorage.getItem("userid");
  useEffect(() => {
    dispatch(getOrderByIdUser(userId));
  }, [userId]);

  const filteredOrdersTransport =
    getOrder.filter((order) => order.orderStatus === "Đang vận chuyển") || [];
  const filteredOrdersComplete =
    getOrder.filter((order) => order.orderStatus === "Đã nhận hàng") || [];
  const filteredOrdersProcessing =
    getOrder.filter((order) => order.orderStatus === "Đang xử lý") || [];
  const filteredOrdersReceived =
    getOrder.filter((order) => order.orderStatus === "Đã tiếp nhận") || [];
  const filteredOrdersCancel =
    getOrder.filter((order) => order.orderStatus === "Đơn hàng đã hủy") || [];

  return (
    <>
      <div className="flex flex-col bg-[#f5f6f6] pt-2 w-full">
        <div className="bg-white rounded-[8px]">
          <div className="br w-[100%] h-[44px] bg-white flex">
            <div className="item_us">
              <div className="flex grid-flow-col justify-center">
                <div
                  className={`User_item ${tab === 1 ? "active" : ""}`}
                  onClick={() => setTab(1)}
                >
                  Tất cả
                </div>
                <div
                  className={`User_item ${tab === 2 ? "active" : ""}`}
                  onClick={() => setTab(2)}
                >
                  Đang xử lý
                </div>
                <div
                  className={`User_item ${tab === 3 ? "active" : ""}`}
                  onClick={() => setTab(3)}
                >
                  Đã tiếp nhận
                </div>
                <div
                  className={`User_item ${tab === 4 ? "active" : ""}`}
                  onClick={() => setTab(4)}
                >
                  Đang vận chuyển
                </div>
                <div
                  className={`User_item ${tab === 5 ? "active" : ""}`}
                  onClick={() => setTab(5)}
                >
                  Đã nhận hàng{" "}
                </div>
                <div
                  className={`User_item ${tab === 6 ? "active" : ""}`}
                  onClick={() => setTab(6)}
                >
                  Đơn hàng đã hủy
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md">
            {tab == 1 ? (
              <div className="Ivite_loho ">
                {isloadingGetOrder == true ? (
                  <div>Loading...</div>
                ) : getOrder.length != 0 ? (
                  <TableAntd orderData={getOrder} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <img src={cartgif} className="h-[263px]" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ) : tab == 2 ? (
              <div className="Ivite_loho ">
                {isloadingGetOrder == false ? (
                  filteredOrdersProcessing.length != 0 ? (
                    <TableAntdAction orderData={filteredOrdersProcessing} />
                  ) : (
                    <div className="flex flex-col">
                      <div className="ml-auto mr-auto">
                        <img src={cartgif} className="h-[263px]" />
                      </div>
                      <div className="text-[20px] mt-3 text-gray-400 text-center">
                        Không tìm thấy đơn hàng đang xử lý
                      </div>
                      <Link to="/">
                        <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                          Tiếp tục mua sắm
                        </button>
                      </Link>
                    </div>
                  )
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            ) : tab == 3 ? (
              <div className="Ivite_loho ">
                {filteredOrdersReceived.length != 0 ? (
                  <TableAntdAction orderData={filteredOrdersReceived} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <img src={cartgif} className="h-[263px]" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng đã tiếp nhận
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ) : tab == 4 ? (
              <div className="Ivite_loho ">
                {filteredOrdersTransport.length != 0 ? (
                  <TableAntd orderData={filteredOrdersTransport} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <img src={cartgif} className="h-[263px]" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng đang vận chuyển
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ) : tab == 5 ? (
              <div className="Ivite_loho ">
                {isloadingGetOrder == false ? (
                  filteredOrdersComplete.length != 0 ? (
                    <TableAntd orderData={filteredOrdersComplete} />
                  ) : (
                    <div className="flex flex-col">
                      <div className="ml-auto mr-auto">
                        {/* <BsCartCheck size="150px" color="gray" /> */}
                        <img src={cartgif} className="h-[263px]" />
                      </div>
                      <div className="text-[20px] mt-3 text-gray-400 text-center">
                        Không tìm thấy đơn hàng nào đã nhận
                      </div>
                      <Link to="/">
                        <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                          Tiếp tục mua sắm
                        </button>
                      </Link>
                    </div>
                  )
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            ) : tab == 6 ? (
              <div className="Ivite_loho ">
                {isloadingGetOrder == false ? (
                  filteredOrdersCancel.length != 0 ? (
                    <TableAntd orderData={filteredOrdersCancel} />
                  ) : (
                    <div className="flex flex-col">
                      <div className="ml-auto mr-auto">
                        <img src={cartgif} className="h-[263px]" />
                      </div>
                      <div className="text-[20px] mt-3 text-gray-400 text-center">
                        Không tìm thấy đơn hàng nào đã hủy
                      </div>
                      <Link to="/">
                        <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                          Tiếp tục mua sắm
                        </button>
                      </Link>
                    </div>
                  )
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            ) : (
              <div className="Ivite_loho ">
                {getOrder.length != 0 ? (
                  <TableAntd orderData={getOrder} />
                ) : (
                  <div className="flex flex-col">
                    <div className="ml-auto mr-auto">
                      <BsCartCheck size="150px" color="gray" />
                    </div>
                    <div className="text-[20px] mt-3 text-gray-400 text-center">
                      Không tìm thấy đơn hàng
                    </div>
                    <Link to="/">
                      <button className="bg-black text-white w-[25%] h-[35px] text-center ml-auto mr-auto rounded-md mt-2">
                        Tiếp tục mua sắm
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBody;
