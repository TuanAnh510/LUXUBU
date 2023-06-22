
import {
    CATEGORY_DETAILS_FAILURE,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_LIST_FAILURE,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS
} from '../const/categoryConstants';

export const categoryListReducer = (state = { categorys: [] }, action) => {
	switch (action.type) {
		case CATEGORY_LIST_REQUEST:
			return { loading: true, categorys: [] };

		case CATEGORY_LIST_SUCCESS:
			return {
				loading: false,
				categorys: action.payload,
			};

		case CATEGORY_LIST_FAILURE:
			return { loading: false, error: action.payload };

		default:
			return { ...state };
	}
};

// details about a particular product
export const categoryDetailsReducer = (
	state = { category: { } },
	action
) => {
	switch (action.type) {
		case CATEGORY_DETAILS_REQUEST:
			return { loading: true, ...state };
		case CATEGORY_DETAILS_SUCCESS:
			return { loading: false, category: action.payload };
		case CATEGORY_DETAILS_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return { ...state };
	}
};
