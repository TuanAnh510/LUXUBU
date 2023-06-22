import axios from "axios"
import {
    BLOG_GET_ALL_FAILURES,
    BLOG_GET_ALL_REQUEST,
    BLOG_GET_ALL_SUCCESS,
    BLOG_GET_DETAIL_FAILURE,
    BLOG_GET_DETAIL_REQUEST,
    BLOG_GET_DETAIL_SUCCESS,
    BLOG_CATEGORY_GET_ALL_FAILURES,
    BLOG_CATEGORY_GET_ALL_REQUEST,
    BLOG_CATEGORY_GET_ALL_SUCCESS,
} from "../const/blogConstants"

const api = axios.create(
    {
        baseURL: "https://api-thuongmai.vercel.app",
    }
)

export const blogGetAll = () =>
    async (dispatch) => {
        dispatch({ type: BLOG_GET_ALL_REQUEST })
        try {
            const { data } = await api.get(`/api/blog`)
            dispatch({ type: BLOG_GET_ALL_SUCCESS, payload: data })

        } catch (error) {
            dispatch({
                type: BLOG_GET_ALL_FAILURES,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }

    }


export const blogGetDetail = (idBlog) =>
    async (dispatch) => {
        dispatch({ type: BLOG_GET_DETAIL_REQUEST })
        try {
            const { data } = await api.get(`/api/blog/${idBlog}`)
      
            dispatch({ type: BLOG_GET_DETAIL_SUCCESS, payload: data })

        } catch (error) {
            dispatch({
                type: BLOG_GET_DETAIL_FAILURE,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }

    }


export const blogCategoryGetAll = () =>
    async (dispatch) => {
        dispatch({ type: BLOG_CATEGORY_GET_ALL_REQUEST })
        try {
            const { data } = await api.get(`/api/blogcategory`)
       
            dispatch({ type: BLOG_CATEGORY_GET_ALL_SUCCESS, payload: data })

        } catch (error) {
            dispatch({
                type: BLOG_CATEGORY_GET_ALL_FAILURES,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }

    }