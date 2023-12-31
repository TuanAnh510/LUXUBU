import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_SHIPPING_ADDRESS,
	CART_SAVE_PAYMENT_METHOD,
	CART_RESET,
	CART_RESET_CART
} from '../const/cartConstants';

export const cartReducer = (
	state = { cartItems: [], shippingAddress: {} },
	action
) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;

			const existingItem = state.cartItems.find(
				(ele) => ele.product === item.product
			);
			if (existingItem) {
				return {
					...state,
					cartItems: state.cartItems.map((ele) =>
						ele.product === existingItem.product ? item : ele
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(ele) => ele.product !== action.payload
				),
			};
		case CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
		case CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};
		case CART_RESET: {

			return {
				cartItems: JSON.parse(action.payload),
				shippingAddress: action.payload,
			};
		}
		case CART_RESET_CART: {

			return {
				cartItems: [],

			};
		}
		default:
			return { ...state };
	}
};
