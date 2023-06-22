
import {
    COUPON_GET_FAILURES,
    COUPON_GET_REQUEST,
    COUPON_GET_SUCCESS,
} from "../const/couponConstants"

export const couponGetReducer = (state = { coupon: {} }, action) => {
    switch (action.type) {
        case COUPON_GET_REQUEST:
            return { loading: true, coupon: {} };

        case COUPON_GET_SUCCESS:
            return {
                loading: false,
                coupon: action.payload.coupons,
            };

        case COUPON_GET_FAILURES:
            return { loading: false, coupon: {} };

        default:
            return { ...state };
    }
};