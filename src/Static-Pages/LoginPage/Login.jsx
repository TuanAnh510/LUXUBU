import React, { useState, useEffect } from "react";
import { useNavigate, link, Link } from "react-router-dom";
import styles from "./Login.module.css";
import facebook from "./logo/Facebook_F_icon.svg.png";
import google from "./logo/Google__G__Logo.svg.png";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Button, Input, Space } from "antd";
import axios from "axios";
import { signin, signinGoogle } from "../../redux/action/auth";
import OAuth2Login from "react-simple-oauth2-login";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  const MAX_LOGIN_ATTEMPTS = 3;
  const storedAttempts =
    parseInt(window.localStorage.getItem("loginAttempts")) || 0;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [numberLogin, setNumberLogin] = useState(0);

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
      .post("https://api-thuongmai.vercel.app/api/users/login", {
        accessToken,
        typeLogin,
      })
      .then((result) => {
        toast.success("Đăng nhập thành công !");
        console.log(result);
      })
      .catch((err) => {
        window.localStorage.setItem();
        console.log(err.response.data);
        if (err.response.status == 400) {
          toast.error("Người dùng không tồn tại vui lòng đăng ký");
        }
      });
    callApi();
  };

  const onFailure = (e) => {
    console.log(e);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(signin({ email, password }, navigate));
    } else {
      toast.warning("Chưa nhập tài khoản hoặc mật khẩu");
    }
  }

  return (
    <div className={styles.main_login}>
      <div className={styles.new_existing}>
        <div className={styles.existing_user}>
          <form action="" className={styles.existing_content_login}>
            <div className={styles.img}></div>

            <h4 className="text-[25px]">{t("logintitle1")}</h4>
            <div className={styles.ip_label}>{t("logintitle2")}</div>
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
              <span className="text-[15px]">{t("logintitle3")}</span>
              <Link to={"/Register"} className=" ml-2 underline text-[15px]">
                {t("logintitle4")}
              </Link>
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
                placeholder={t("logintitle6")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input.Password
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("logintitle7")}
                iconRender={(visible) =>
                  visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                }
              />

              <button className={styles.sing_in_button} onClick={handleSubmit}>
                {t("logintitle1")}
              </button>
              <Link to={"/Forgotpass"} className="text-[15px] underline">
                {t("logintitle5")}
              </Link>
            </form>
            {/* <button className={styles.new_continue}>
              {" "}
              <Link to="/Register" style={{ color: "white" }}>
                Continue
              </Link>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
