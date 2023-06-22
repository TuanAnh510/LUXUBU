import React, { useEffect, useState } from "react";
import "./Ac.css";
import { AiFillCloseCircle, AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import imgqc from "../../Image/Ivite1.jpg";
import { Link, useNavigate } from "react-router-dom";
import styles from "../LoginPage/Login.module.css";
import facebook from "../LoginPage/logo/Facebook_F_icon.svg.png";
import google from "../LoginPage/logo/Google__G__Logo.svg.png";
import { useSelector, useDispatch } from "react-redux";

import { Button, Input, Space } from "antd";
import axios from "axios";
import { signin, signinGoogle } from "../../redux/action/auth";
import OAuth2Login from "react-simple-oauth2-login";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AClogin = () => {
  useEffect(() => {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "block";
  }, []);
  const { isauth } = useSelector((store) => store.login);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleShowModal();
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;

    dispatch(signinGoogle(accessToken, navigate));
  }
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  const loginFb = async (e) => {
    const accessToken = e.access_token;
    const typeLogin = "facebook";
    const callApi = await axios
      .post("https://ecom-z3we.onrender.com/api/users/login", {
        accessToken,
        typeLogin,
      })
      .then((result) => {
        toast.success("Đăng nhập thành công !");
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.status == 400) {
          toast.error("Ú sờ chưa tồn tại vui lòng đăng ký dùm");
        }
      });
  };

  const onFailure = (e) => {
    console.log(e);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(signin({ email, password }, navigate));
    }
  }

  return !isauth ? (
    <>
      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <button onClick={handleCloseModal} className="Ac_items">
              <div>
                <AiFillCloseCircle size="25px" />
              </div>
            </button>

            <div className={styles.new_ac}>
              <div className={styles.existing_user}>
                <form action="" className={styles.existing_content_login}>
                  <div className={styles.img}></div>
                  <h4>Đăng nhập</h4>
                  <div className={styles.ip_label}>
                    Đăng nhập để mua hàng và sử dụng những tiện ích mới nhất từ
                    www.luxubu.com
                  </div>
                  <div className={styles.social_links}>
                    <Link to={""} className={styles.btn_fb}>
                      <img src={facebook} alt="facebook_logo" />
                      <OAuth2Login
                        buttonText="Facebook"
                        authorizationUrl="https://www.facebook.com/dialog/oauth"
                        responseType="token"
                        clientId="203369009102213"
                        redirectUri="http://localhost:3000/"
                        scope="public_profile"
                        onSuccess={loginFb}
                        onFailure={onFailure}
                      />
                    </Link>
                    <div></div>
                    <Link onClick={() => login()} className={styles.btn_email}>
                      <img src={google} alt="google_logo" />
                      Google
                    </Link>
                  </div>
                  <div>
                    <span>Bạn chưa có tài khoản?</span>
                    <Link to={"/Register"}>Đăng ký</Link>
                  </div>
                </form>
              </div>
              <div className={styles.new_user}>
                <div className={styles.new_user_content}>
                  <form action="" className={styles.existing_content}>
                    <Input
                      autoFocus
                      type="email"
                      name="email"
                      required
                      placeholder="Nhập email..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input.Password
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập mật khẩu ..."
                      iconRender={(visible) =>
                        visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                      }
                    />

                    <button
                      className={styles.sing_in_button}
                      onClick={handleSubmit}
                    >
                      Đăng nhập
                    </button>
                    <Link to={"/Forgotpass"}>Quên mật khẩu?</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  ) : null;
};

export default AClogin;
