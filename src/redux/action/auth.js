import {
  AUTH,
  LOGIN_GET_LOADING,
  LOGIN_GET_SUCCESS,
  LOGIN_GET_ERROR,
  UPDATE_GET_SUCCESS,
  UPDATE_GET_FAILED,
  UPDATE_GET_REQUEST,
  LOGOUT_GET,
} from "../const/actionsTypes";
import * as api from "../../api/index";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

const test = "test";
const apis = axios.create({
  baseURL: "https://api-thuongmai.vercel.app",
  // baseURL: "http://localhost:5000" ,
});


export const loadUser = () => async (dispath) => {
  const localUser = JSON.parse(localStorage.getItem("user_infos"));
  if (localUser) {
    dispath({ type: LOGIN_GET_SUCCESS, payload: localUser });
  }
};

export const signin = (dataForm, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  let toastId = toast("Đang xử lý...", { autoClose: false });
  const emailUser = dataForm.email
  const { data } = await apis.get(`/api/users/find/${dataForm.email}`)
  console.log(data);
  if (data.isBlocked == true) {
    if (toastId >= 0) {

      toast.update(toastId, {
        render: "Tài khoản đã bị khóa vui lòng liên hệ Admin để mở lại",
        type: "error",
        autoClose: 3000
      });// does nothing
    } else {
      toast("Tài khoản đã bị khóa vui lòng liên hệ Admin để mở lại", { type: "error", autoClose: 3000 });
    }
  } else {
    try {
      const { data } = await api.signIn(dataForm);

      await window.localStorage.setItem(JSON.stringify(emailUser), "0");

      if (toastId >= 0) {
        toast.update(toastId, {
          render: "Đăng nhập thành công",
          type: "success",
          autoClose: 3000
        });// does nothing
      } else {
        toast("Đăng nhập thành công", { type: "success", autoClose: 3000 });
      }
      navigate("/");
      return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
    } catch (err) {
      if (err.response.data.message == "Invalid Credentials") {
        if (toastId >= 0) {
          toast.update(toastId, {
            render: "Sai tài khoản hoặc mật khẩu",
            type: "warning",
            autoClose: 3000
          });// does nothing
        } else {
          toast("Sai tài khoản hoặc mật khẩu", { type: "warning", autoClose: 3000 });
        }
        const storedAttempts = parseInt(window.localStorage.getItem(JSON.stringify(emailUser)));
        if (isNaN(storedAttempts)) {
          await window.localStorage.setItem(JSON.stringify(emailUser), "1");
        } else {
          await window.localStorage.setItem(JSON.stringify(emailUser), String(storedAttempts + 1));
        }

        const storedAttempt = parseInt(window.localStorage.getItem(JSON.stringify(emailUser)))

        if (storedAttempt == 5) {


          await apis
            .post(`/api/users/block-user/${emailUser}`)
            .then((result) => {
              if (toastId >= 0) {
                toast.update(toastId, {
                  render: "Tài khoản đã bị khóa",
                  type: "warning",
                  autoClose: 3000
                });// does nothing
              } else {
                toast("Tài khoản đã bị khóa", { type: "warning", autoClose: 3000 });
              }

            })
            .catch((err) => {
              console.log(err);
            });
          await window.localStorage.setItem(JSON.stringify(emailUser), "0");
        }
      }
    }
  }
}


export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
  let toastId = toast("Đang xử lý...", { autoClose: false });

  dispatch({ type: LOGIN_GET_LOADING });
  try {
    const { data } = await api.signInGoogle(accessToken);
    if (data.isBlocked == true) {
      if (toastId >= 0) {

        toast.update(toastId, {
          render: "Tài khoản đã bị khóa",
          type: "error",
          autoClose: 3000
        });// does nothing
      } else {
        toast("Tài khoản đã bị khóa", { type: "error", autoClose: 3000 });
      }
      return;
    }
    navigate("/");

    if (toastId >= 0) {
      toast.update(toastId, {
        render: "Đăng nhập thành công",
        type: "success",
        autoClose: 3000
      });// does nothing
    } else {
      toast("Đăng nhập thành công", { type: "success", autoClose: 3000 });
    }

    return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    if (err.response.data.message == "User don't exist!") {
      const { data } = await api.signUpGoogle(accessToken);
      navigate("/");

      if (toastId >= 0) {
        toast.update(toastId, {
          render: "Đăng nhập thành công",
          type: "success",
          autoClose: 3000
        });// does nothing
      } else {
        toast("Đăng nhập thành công", { type: "success", autoClose: 3000 });
      }

      return dispatch({ type: LOGIN_GET_SUCCESS, payload: data.result });
    }
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  let toastId = toast("Đang xử lý...", { autoClose: false });

  try {
    const { data } = await api.signUp(formData);
    if (toastId >= 0) {

      toast.update(toastId, {
        render: "Đăng ký thành công.",
        type: "success",
        autoClose: 3000
      });// does nothing
    } else {
      toast("Đăng ký thành công.", { type: "success", autoClose: 3000 });
    }
    navigate("/");
    return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
  } catch (err) {
    if (err.response.status == "500") {
      if (toastId >= 0) {

        toast.update(toastId, {
          render: "Email đã tồn tại.",
          type: "warning",
          autoClose: 3000
        });// does nothing
      } else {
        toast("Email đã tồn tại.", { type: "warning", autoClose: 3000 });
      }
      return
    }
  }
};

export const signupGoogle = (accessToken, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  try {
    const { data } = await api.signUpGoogle(accessToken);

    navigate("/");
    return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    if (err.response.status == "500") {
      return toast.error("Email đã tồn tại");
    }
  }
};

export const logout = () =>

  async (dispatch) => {
    // to remove all userinfo at the time of user logout
    dispatch({
      type: LOGOUT_GET,
    });
    toast.success("Đăng xuất thành công");

  };

export const updateUser = (id, firstName, lastName, email, phone) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  let toastId = toast("Đang xử lý...", { autoClose: false });

  try {
    apis.put(`/api/users/edit-user/${id}`, {
      firstname: firstName,
      lastname: lastName,
      email: email,
      mobile: phone
    }).then((response) => {
      dispatch({ type: LOGIN_GET_SUCCESS, payload: response.data })
      if (toastId >= 0) {

        toast.update(toastId, {
          render: "Thay đổi thông tin thành công.",
          type: "success",
          autoClose: 3000
        });// does nothing
      } else {
        toast("Thay đổi thông tin thành công.", { type: "success", autoClose: 3000 });
      }
    })
  } catch (error) {
    dispatch({
      type: LOGIN_GET_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const updateUserAddress = (id, city, district, ward, address) => async (dispatch) => {
  let toastId = toast("Đang xử lý...", { autoClose: false });

  dispatch({ type: LOGIN_GET_LOADING });

  try {
    apis.put(`/api/users/save-address/${id}`, {
      city: city,
      district: district,
      ward: ward,
      address: address
    }).then((response) => {
      dispatch({ type: LOGIN_GET_SUCCESS, payload: response.data })
      if (toastId >= 0) {

        toast.update(toastId, {
          render: "Thay đổi địa chỉ thành công.",
          type: "success",
          autoClose: 3000
        });// does nothing
      } else {
        toast("Thay đổi địa chỉ thành công.", { type: "success", autoClose: 3000 });
      }
    })
  } catch (error) {
    dispatch({
      type: LOGIN_GET_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,

    });
  }
}

export const resetPassword = (token, pw, navigate) => {
  return async (dispatch) => {
    let toastId = toast("Đang xử lý...", { autoClose: false });
    try {
      await apis.put(`/api/users/reset-password/${token}`, {
        password: pw,
      })
        .then((result) => {
          if (toastId >= 0) {

            toast.update(toastId, {
              render: "Thay đổi mật khẩu thành công.",
              type: "success",
              autoClose: 3000
            });// does nothing
          } else {
            toast("Thay đổi mật khẩu thành công.", { type: "success", autoClose: 3000 });
          }
          navigate("/login");
        })
        .catch((err) => {
          console.log("err", err);
          if (err.response.status == 500) {
            if (toastId >= 0) {

              toast.update(toastId, {
                render: "Mã đã hết hạn.",
                type: "error",
                autoClose: 3000
              });

            } else {

              toast("Mã đã hết hạn.", { type: "error", autoClose: 3000 });
            }
          } else {
            if (toastId >= 0) {

              toast.update(toastId, {
                render: "Mật khẩu đổi không thành công.",
                type: "error",
                autoClose: 3000
              });// does nothing
            } else {
              toast("Mật khẩu đổi không thành công.", { type: "error", autoClose: 3000 });
            }

          }
        });
    } catch (err) {


    }
  };
};

export const generatePassword = (email) => {
  return async (dispatch) => {
    let toastId = toast("Đang xử lý...", { autoClose: false });
    try {
      await apis.post("/api/users/forgot-password-token", {
        email: email,
      })
        .then((result) => {
          if (toastId >= 0) {

            toast.update(toastId, {
              render: "Vui lòng kiểm tra lại email để đặt lại mật khẩu",
              type: "success",
              autoClose: 3000
            });
          } else {
            toast("Vui lòng kiểm tra lại email để đặt lại mật khẩu", { type: "success", autoClose: 3000 });
          }
        })
        .catch((err) => {
          if (err.response.status == 500) {
            if (toastId >= 0) {

              toast.update(toastId, {
                render: "Email không tồn tại.",
                type: "error",
                autoClose: 3000
              });

            } else {

              toast("Email không tồn tại.", { type: "error", autoClose: 3000 });
            }
          }
        });
    } catch (err) {
      console.log(err);

    }
  };
};