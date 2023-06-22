
import {
	BRAND_DETAILS_FAILURE,
	BRAND_DETAILS_REQUEST,
	BRAND_DETAILS_SUCCESS,
	BRAND_LIST_FAILURE,
	BRAND_LIST_REQUEST,
	BRAND_LIST_SUCCESS
} from '../const/brandConstants';

export const brandListReducer = (state = { brands: [] }, action) => {
	switch (action.type) {
		case BRAND_LIST_REQUEST:
			return { loading: true, brands: [] };

		case BRAND_LIST_SUCCESS:
			return {
				loading: false,
				brands: action.payload,
			};

		case BRAND_LIST_FAILURE:
			return { loading: false, error: action.payload };

		default:
			return { ...state };
	}
};

// details about a particular product
export const brandDetailsReducer = (
	state = { brand: {} },
	action
) => {
	switch (action.type) {
		case BRAND_DETAILS_REQUEST:
			return { loading: true, ...state };
		case BRAND_DETAILS_SUCCESS:
			return { loading: false, brand: action.payload };
		case BRAND_DETAILS_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return { ...state };
	}
};
