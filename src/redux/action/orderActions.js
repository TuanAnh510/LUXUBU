import axios from "axios";
import { toast } from "react-toastify";
import {
    CREATE_ODER_FAILURE,
    CREATE_ODER_REQUEST,
    CREATE_ODER_SUCCESS,
    CREATE_ODER_RESET,
    GET_ODER_FAILURE,
    GET_ODER_SUCCESS,
    GET_ODER_REQUEST,
    GET_MONEY_FAILURE,
    GET_MONEY_REQUEST,
    GET_MONEY_SUCCESS

} from "../const/orderConstants"

const api = axios.create({
    baseURL: "https://api-thuongmai.vercel.app",
});

export const createOrder = (cartItems, payment, shipping, userId, totalprice) =>
    async (dispatch) => {
        let toastId = toast("Đang xử lý...", { autoClose: false });
        dispatch({ type: CREATE_ODER_REQUEST });
        try {
            api.post("/api/users/createorder",
                {
                    cart: cartItems,
                    shipping: shipping,
                    payment: payment,
                    totalprice: totalprice,
                    iduser: userId
                }).then((Response) => {
                    dispatch({ type: CREATE_ODER_SUCCESS, payload: Response.data.newOrder })

                    if (toastId >= 0) {

                        toast.update(toastId, {
                            render: "Đơn hàng đã đặt thành công.",
                            type: "success",
                            autoClose: 3000
                        });// does nothing
                    } else {
                        toast("Đơn hàng đã đặt thành công.", { type: "success", autoClose: 3000 });
                    }
                })

        } catch (error) {
            console.log(error);
        }
    }
export const getOrderByIdUser = (Id) =>
    async (dispatch) => {

        dispatch({ type: GET_ODER_REQUEST })
        try {
            api.post("/api/users/findorder", {
                iduser: Id
            }).then((response) => {
                dispatch({ type: GET_ODER_SUCCESS, payload: response.data })

            })
        } catch (error) {
            console.log(error);
        }


    }

export const CancelOrderByIdUser = (Id, Message) =>
    async (dispatch) => {
        let toastId = toast.promise("Đang xử lý...", { autoClose: false });

        try {
            api.post("/api/users/ordercancel", {
                id: Id,
                message: Message
            }).then((response) => {

                if (toastId >= 0) {

                    toast.update(toastId, {
                        render: "Đơn hàng đã hủy.",
                        type: "success",
                        autoClose: 3000
                    });// does nothing
                } else {
                    toast("Đơn hàng đã hủy.", { type: "success", autoClose: 3000 });
                }
            })
        } catch (error) {
            console.log(error);
        }


    }

export const getMoney = (Id, Message) =>
    async (dispatch) => {
        dispatch({ type: GET_MONEY_REQUEST });

        try {
            axios.get("https://api.currencyapi.com/v3/latest?apikey=8HeOPsvWT3nKk4P1TFGIpyFK0I3JeocAl5XNwOva&currencies=EUR%2CUSD%2CVND")
                .then((response) => {
                    dispatch({ type: GET_MONEY_SUCCESS, payload: response.data.data })
                })
        } catch (error) {
            console.log(error);
        }


    }
export const resetOrder = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CREATE_ODER_RESET });

        } catch (error) {
            console.log(error);
        }


    }