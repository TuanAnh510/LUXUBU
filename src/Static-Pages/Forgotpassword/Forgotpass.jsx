import React, { useState } from "react";
import styles from "./Forgotpass.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import { generatePassword } from "../../redux/action/auth";
import { toast } from "react-toastify";

function Forgotpass() {
  const [email, setEmail] = useState([]);
  const dispatch = useDispatch();

  var checkMail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const HanlerClickgenerate = () => {
    if (!checkMail.test(email) || email.length == "") {
      toast.warning("Email không hợp lệ!");
      return;
    }
    dispatch(generatePassword(email));
  };

  return (
    <div className={styles.main_register}>
      <div className={styles.register_existing}>
        <div className={styles.existing_user}>
          <div className={styles.existing_content_register}>
            <h1 className="text-[25px] text-left font-bold mt-3">
              Quên mật khẩu
            </h1>
            <div className={styles.ip_forgotpass_label}>
              Nhập địa chỉ email đã đăng ký
              <br />
              Sau đó kiểm tra email để đổi mật khẩu mới
            </div>
            <div className={styles.register_social_links}></div>
            <div className="text-lg">
              <span className="text-[15px]">Bạn đã có tài khoản?</span>
              <Link className=" text-[15px] underline" to={"/Login"}>
                {" "}
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.new_user}>
          <div className={styles.new_forgotpass_content}>
            <form className={styles.existing_forgotpass}>
              <label className="text-left text-base">Email:</label>
              <Input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email"
                name="email"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  HanlerClickgenerate();
                }}
                className={styles.sing_register_button}
              >
                Xác nhận email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forgotpass;
