import {
	REVIEW_ADD_FAILURE,
	REVIEW_ADD_REQUEST,
	REVIEW_ADD_SUCCESS,
	REVIEW_GET_FAILURE,
	REVIEW_GET_REQUEST,
	REVIEW_GET_SUCCESS,
} from '../const/reviewConstants';

export const reviewAddReducer = (state = { loadingRV: false }, action) => {
	switch (action.type) {
		case REVIEW_ADD_REQUEST:
			return { loadingRV: true };

		case REVIEW_ADD_SUCCESS:
			return {
				loadingRV: false,
			};
		case REVIEW_ADD_FAILURE:
			return { loadingRV: false, error: action.payload };

		default:
			return { ...state };
	}
};

export const reviewGetReducer = (state = { loadingRV: false, reviews: [], currentPage: '', totalPages: '' }, action) => {
	switch (action.type) {
		case REVIEW_GET_REQUEST:
			return { loadingRV: true, reviews: [], currentPage: '', totalPages: '' };

		case REVIEW_GET_SUCCESS:
			return {
				loadingRV: false,
				reviews: action.payload.reviews,
				totalPages: action.payload.totalPages,
				currentPage: action.payload.currentPage,
			};

		case REVIEW_GET_FAILURE:
			return { loadingRV: false, error: action.payload };

		default:
			return { ...state };
	}
};