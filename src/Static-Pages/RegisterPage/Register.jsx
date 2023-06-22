import React, { useState } from "react";
import styles from "./Register.module.css";
import facebook from "../LoginPage/logo/Facebook_F_icon.svg.png";
import google from "../LoginPage/logo/Google__G__Logo.svg.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Space } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { useGoogleLogin } from "@react-oauth/google";
import { signup, signupGoogle } from "../../redux/action/auth";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const InitState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const { t } = useTranslation();

  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const [sForm, setsForm] = useState(InitState);
  var checkMail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var checkPassword =
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) =>
    setsForm({
      ...sForm,
      [e.target.name]: e.target.value,
    });

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    dispatch(signupGoogle(accessToken, nagivate));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (
      sForm.firstname == "" ||
      sForm.lastname == "" ||
      sForm.email == "" ||
      sForm.password == "" ||
      sForm.confirmPassword == "" ||
      sForm.mobile == ""
    ) {
      toast.warning("Vui lòng nhập đầy đủ thông tin đăng ký!");
      return;
    } else if (sForm.password.length < 8) {
      toast.warning("Độ dài mật khẩu trên 8 kí tự");
      return;
    } else if (!checkPassword.test(sForm.password)) {
      toast.warning(
        "Mật khẩu phải có chữ hoa, chữ thường số và kí tự đặc biệt"
      );
      return;
    } else if (!checkMail.test(sForm.email) || sForm.email.length == "") {
      toast.warning("Email không hợp lệ!");
      return;
    } else if (sForm.password === sForm.confirmPassword) {
      dispatch(signup(sForm, nagivate));
    } else {
      toast.warning("Nhập lại mật khẩu không chính xác");
    }
  }
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });
  return (
    <div className={styles.main_register}>
      <div className={styles.register_existing}>
        <div className={styles.existing_user}>
          <div className={styles.existing_content_register}>
            <h4 className="text-[25px] mt-5">{t("Registertitle")}</h4>
            <div className={styles.ip_register_label}>
              {t("Registertitle1")}
            </div>
            {/* <div className={styles.register_social_links}>
              <Link to={""} className={styles.register_btn_fb}>
                <img src={facebook} alt="facebook_logo" />
                Facebook
              </Link>
              <Link
                onClick={() => login()}
                className={styles.register_btn_email}
              >
                <img src={google} alt="google_logo" />
                Google
              </Link>
            </div> */}
            <div className="mt-72">
              <span className="text-[15px]">Bạn đã có tài khoản?</span>
              <Link to={"/Login"} className="text-[15px] underline ml-2">
                {" "}
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.new_user}>
          <div className={styles.new_register_content}>
            <form className={styles.existing_register}>
              <Input
                required
                placeholder="Họ"
                name="firstname"
                onChange={handleChange}
              />
              <Input
                required
                placeholder="Tên"
                name="lastname"
                onChange={handleChange}
              />
              <Input
                required
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <Input
                required
                type="Number"
                placeholder="Số điện thoại"
                name="mobile"
                onChange={handleChange}
              />

              <Input.Password
                placeholder="Nhập mật khẩu"
                name="password"
                onChange={handleChange}
              />

              <Input.Password
                placeholder="Nhập lại mật khẩu"
                name="confirmPassword"
                onChange={handleChange}
              />
              {/* <ReCAPTCHA sitekey="Your client site key" />, */}
              <button
                className={styles.sing_register_button}
                onClick={handleOnSubmit}
              >
                Tạo tài khoản
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
