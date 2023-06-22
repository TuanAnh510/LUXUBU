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

export const blogListReducer = (state = { loading: true, blogs: [] }, action) => {
    switch (action.type) {
        case BLOG_GET_ALL_REQUEST:
            return { loading: true, blogs: [] };

        case BLOG_GET_ALL_SUCCESS:
            return {
                loading: false,
                blogs: action.payload,
            };

        case BLOG_GET_ALL_FAILURES:
            return { loading: false, error: action.payload };

        default:
            return { ...state };
    }
};

export const blogDetailReducer = (state = { loading: true, blog: [] }, action) => {
    switch (action.type) {
        case BLOG_GET_DETAIL_REQUEST:
            return { loading: true, blog: [] };

        case BLOG_GET_DETAIL_SUCCESS:
            return {
                loading: false,
                blog: action.payload,
            };

        case BLOG_GET_DETAIL_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return { ...state };
    }
};

export const blogCategoryListReducer = (state = { loading: true, bCategorys: [] }, action) => {
    switch (action.type) {
        case BLOG_CATEGORY_GET_ALL_REQUEST:
            return { loading: true, bCategorys: [] };

        case BLOG_CATEGORY_GET_ALL_SUCCESS:
            return {
                loading: false,
                bCategorys: action.payload,
            };

        case BLOG_CATEGORY_GET_ALL_FAILURES:
            return { loading: false, error: action.payload };

        default:
            return { ...state };
    }
};