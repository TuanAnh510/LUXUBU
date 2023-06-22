import axios from "axios";
import {
  BRAND_DETAILS_FAILURE,
  BRAND_DETAILS_REQUEST,
  BRAND_DETAILS_SUCCESS,
  BRAND_LIST_FAILURE,
  BRAND_LIST_REQUEST,
  BRAND_LIST_SUCCESS,
} from "../const/brandConstants";

const api = axios.create({
  baseURL: "https://api-thuongmai.vercel.app",
  //  baseURL: "http://localhost:5000" ,
});

export const listbrand = () => async (dispatch) => {
  dispatch({ type: BRAND_LIST_REQUEST });

  try {
    const { data } = await api.get(`/api/brand/`);
    dispatch({ type: BRAND_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BRAND_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listbrandDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BRAND_DETAILS_REQUEST });

    const { data } = await api.get(`/api/brand/${id}`);

    dispatch({ type: BRAND_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BRAND_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
