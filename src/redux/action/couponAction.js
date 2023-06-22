import axios from "axios"
import { toast } from "react-toastify"
import {
    COUPON_GET_FAILURES,
    COUPON_GET_REQUEST,
    COUPON_GET_SUCCESS,
} from "../const/couponConstants"

const api = axios.create(
    {
        baseURL: "https://api-thuongmai.vercel.app",
    }
)

export const getCoupon = (code, iduser) =>
    async (dispatch) => {
        dispatch({ type: COUPON_GET_REQUEST })
        let toastId = toast("Đang xử lý...", { autoClose: false });
        try {
            const { data } = await api.post(`/api/coupon/checkuser`,
                {
                    name: code,
                    iduser: iduser
                }

            )
            console.log(data);
            if (data.coupons === null) {
                if (toastId >= 0) {

                    toast.update(toastId, {
                        render: "Mã giảm giá Không tồn tại.",
                        type: "warning",
                        autoClose: 3000
                    });
                } else {
                    toast("Mã giảm giá Không tồn tại.", { type: "warning", autoClose: 3000 });
                }
            }
            else if (data.status === "ok") {
                const currentDate = new Date();
                const expiryDate = new Date(data.coupons.expiry);
                if (currentDate > expiryDate) {
                    dispatch({ type: COUPON_GET_FAILURES })
                    if (toastId >= 0) {

                        toast.update(toastId, {
                            render: "Mã giảm giá đã hết hạn.",
                            type: "warning",
                            autoClose: 3000
                        });
                    } else {
                        toast("Mã giảm giá đã hết hạn.", { type: "warning", autoClose: 3000 });
                    }
                } else {
                    if (toastId >= 0) {

                        toast.update(toastId, {
                            render: "Mã giảm giá đã được nhập.",
                            type: "success",
                            autoClose: 3000
                        });
                    } else {
                        toast("Mã giảm giá đã được nhập.", { type: "success", autoClose: 3000 });
                    }
                    dispatch({ type: COUPON_GET_SUCCESS, payload: data })

                }

            }
            else {
                dispatch({ type: COUPON_GET_FAILURES })
                if (toastId >= 0) {

                    toast.update(toastId, {
                        render: "Mã giảm giá đã được sử dụng.",
                        type: "warning",
                        autoClose: 3000
                    });
                } else {
                    toast("Mã giảm giá đã được sử dụng.", { type: "warning", autoClose: 3000 });
                }
            }
        } catch (error) {
            dispatch({
                type: COUPON_GET_FAILURES,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }

    }

export const updateCoupon = (idCoupon, iduser) =>
    async (dispatch) => {

        try {
            const { data } = await api.put(`/api/coupon/user/${idCoupon}`,
                {
                    iduser: iduser
                }
            )
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }

export const giveCoupon = (email) =>
    async (dispatch) => {
        let toastId = toast("Đang xử lý...", { autoClose: false });
        try {
            const { data } = await api.post(`/api/coupon/givecoupon`,
                {
                    email: email
                }
            )
            console.log(data);
            if (toastId >= 0) {

                toast.update(toastId, {
                    render: "Chúng tôi đã gửi tới email bạn 1 Voucher.",
                    type: "success",
                    autoClose: 3000
                });
            } else {
                toast("Chúng tôi đã gửi tới email bạn 1 Voucher.", { type: "success", autoClose: 3000 });
            }
        } catch (error) {
            console.log(error);
        }

    }

