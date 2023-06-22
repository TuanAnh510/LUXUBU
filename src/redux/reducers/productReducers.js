import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAILURE,
	PRODUCT_DETAILS_FAILURE,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_FIND_FAILURE,
    PRODUCT_FIND_REQUEST,
    PRODUCT_FIND_SUCCESS
} from '../const/productConstants';

export const productListReducer = (state = {loading: false, products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };

		case PRODUCT_LIST_SUCCESS:
			return {
				loading: false,
				products: action.payload,
			};

		case PRODUCT_LIST_FAILURE:
			return { loading: false, error: action.payload };

		default:
			return { ...state };
	}
};
export const productFindReducer = (state = {loading: false, productFind: [] }, action) => {
	switch (action.type) {
		case PRODUCT_FIND_REQUEST:
			return { loading: true, productFind: [] };

		case PRODUCT_FIND_SUCCESS:
			return {
				loading: false,
				productFind: action.payload,
				// page: action.payload.page,
				// pages: action.payload.pages,
			};

		case PRODUCT_FIND_FAILURE:
			return { loading: false, error: action.payload };

		default:
			return { ...state };
	}
};
// details about a particular product
export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return { loading: true, ...state };
		case PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload };
		case PRODUCT_DETAILS_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return { ...state };
	}
};
