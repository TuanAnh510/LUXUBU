import axios from 'axios';
import {
    CATEGORY_DETAILS_FAILURE,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_LIST_FAILURE,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS
} from '../const/categoryConstants';

const api = axios.create({
    baseURL: "https://api-thuongmai.vercel.app",
});

export const listCategory = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_LIST_REQUEST });

            const { data } = await api.get(
                `/api/category/`
            );

            dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });

        } catch (error) {
            dispatch({
                type: CATEGORY_LIST_FAILURE,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

export const listCategoryDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_DETAILS_REQUEST });

        const { data } = await api.get(`/api/category/${id}`);

        dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CATEGORY_DETAILS_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

