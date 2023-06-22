import axios from "axios";
import { SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./signup.types";
import * as api from "../../api/index";
let API = process.env.API;

export const signup = (creds) => async (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  try {
    let res = await axios.post(
      "https://ecom-z3we.onrender.com/api/users/register",
      creds
    );
    const data = await res.data;

    dispatch({ type: SIGNUP_SUCCESS, payload: data });
    return data;
  } catch (e) {
    dispatch({ type: SIGNUP_ERROR, payload: e.message });
  }
};

export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
  try {
    // login user
    const { data } = await api.signInGoogle(accessToken);

    dispatch({ type: SIGNUP_SUCCESS, data });
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
