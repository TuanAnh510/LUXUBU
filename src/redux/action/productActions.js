import axios from "axios";
import { toast } from "react-toastify";
import {
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_FIND_FAILURE,
  PRODUCT_FIND_REQUEST,
  PRODUCT_FIND_SUCCESS,
} from "../const/productConstants";

const api = axios.create({
  baseURL: "https://api-thuongmai.vercel.app",
});

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await api.get(`/api/product/`);

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const findProductsPrice =
  (minPrice, maxPrice, idBrand, inStock, idCategory) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const { data } = await api.get(
        `/api/product/findproduct?minPrice=${minPrice}&maxPrice=${maxPrice}&idBrand=${idBrand}&inStock=${inStock}&idCategory=${idCategory}`
      );

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const findProducts =
  (minPrice, maxPrice, idBrand, inStock, idCategory) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_FIND_REQUEST });

      const { data } = await api.get(
        `/api/product/findproduct?minPrice=${minPrice}&maxPrice=${maxPrice}&idBrand=${idBrand}&inStock=${inStock}&idCategory=${idCategory}`
      );

      dispatch({ type: PRODUCT_FIND_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_FIND_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await api.get(`/api/product/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
