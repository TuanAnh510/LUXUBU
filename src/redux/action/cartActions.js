import axios from 'axios';
import { toast } from 'react-toastify';
import {
	CART_RESET,
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_SHIPPING_ADDRESS,
	CART_SAVE_PAYMENT_METHOD,
	CART_RESET_CART
} from '../const/cartConstants';

const api = axios.create({
	baseURL: "https://api-thuongmai.vercel.app",
});
export const loadCart = () => async (dispath) => {
	const localcart = localStorage.getItem("cartItems")

	if (localcart) {
		dispath({ type: CART_RESET, payload: localcart });
	}
};
// get the product id and the quantity of the item to add to the cart
export const addItem = (id, qty) => async (dispatch, getState) => {
	let toastId = toast("Đang xử lý...", { autoClose: false });

	try {
		const { data } = await api.get(`/api/product/${id}`);

		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				product: data._id,
				title: data.title,
				image: data.images[0] == undefined ? "" : data.images[0].url,
				price: data.price,
				quantityProduct: data.quantity,
				qty,
			},
		});
		if (toastId >= 0) {

			toast.update(toastId, {
				render: "Sản phẩm đã được đưa vào giỏ hàng.",
				type: "success",
				autoClose: 3000
			});// does nothing
		} else {
			toast("Sản phẩm đã được đưa vào giỏ hàng.", { type: "success", autoClose: 3000 });
		}
		localStorage.setItem(
			'cartItems',
			JSON.stringify(getState().cart.cartItems)
		);

	} catch (error) {
		console.error(error);
	}
};

// get the product id to be removed from the cart
export const removeItem = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: CART_REMOVE_ITEM,
			payload: id,
		});
		// update the local storage with the updated cart
		localStorage.setItem(
			'cartItems',
			JSON.stringify(getState().cart.cartItems)
		);
		toast("Sản phẩm đã xóa.", { type: "success", autoClose: 3000 });

	} catch (error) {
		console.log(error);
	}
};

// get the shipping address data and dispatch corresponding action
export const saveShippingAddress = (data) => async (dispatch) => {
	try {
		dispatch({
			type: CART_SAVE_SHIPPING_ADDRESS,
			payload: data,
		});
		localStorage.setItem('shippingAddress', JSON.stringify(data));
	} catch (error) {
		console.log(error);
	}
};

// get the option for payment and update the local storage as well
export const savePaymentMethod = (data) => async (dispatch) => {
	try {
		dispatch({
			type: CART_SAVE_PAYMENT_METHOD,
			payload: data,
		});
		localStorage.setItem('paymentMethod', JSON.stringify(data));
	} catch (error) {
		console.log(error);
	}
};
export const resetCart = () => async (dispatch) => {
	try {
		localStorage.removeItem("cartItems");
		dispatch({ type: CART_RESET_CART })
	} catch (error) {
		console.log(error);
	}
}