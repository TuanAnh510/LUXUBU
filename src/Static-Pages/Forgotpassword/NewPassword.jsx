import styles from "./Forgotpass.module.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/action/auth";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate();
  const dispatch = new useDispatch();
  const [pw, setPw] = useState([]);
  const [newPw, setNewPw] = useState([]);
  const { token } = useParams();

  const password = async () => {
    if (pw === newPw) {
      dispatch(resetPassword(token, pw, navigate));
    } else {
      toast.warning("Mật khẩu không trùng khớp");
    }
  };

  return (
    <div className={styles.main_register}>
      <div className={styles.register_existing}>
        <div className={styles.existing_user}>
          <div className={styles.existing_content_register}>
            <h4 className="text-[20px] font-bold mt-3">Cập nhật mật khẩu</h4>
            <div className={styles.ip_forgotpass_label}>
              Hãy cập nhật lại mật khẩu mới và tiếp tục trải nghiệm nào
              <br />
            </div>
            <div className={styles.register_social_links}></div>
            <div className="">
              <span className="text-[15px]">Bạn đã có tài khoản?</span>
              <Link to={"/Login"} className="text-[15px] underline ml-2">
                {" "}
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.new_user}>
          <div className={styles.new_forgotpass_content}>
            <form className={styles.existing_forgotpass}>
              <Input.Password
                type="password"
                required
                placeholder="Mật khẩu"
                onChange={(e) => setPw(e.target.value)}
              />
              <Input.Password
                type="password"
                required
                name=""
                placeholder="Nhập lại mật khẩu mới"
                onChange={(e) => setNewPw(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  password();
                }}
                className={styles.sing_register_button}
              >
                Xác nhận
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
