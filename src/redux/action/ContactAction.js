import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://api-thuongmai.vercel.app",
});

export const newContact = (name, email, message) => async (dispatch) => {
  let toastId = toast("Đang xử lý...", { autoClose: false });

  try {
    api
      .post("/api/contact/", {
        name: name,
        email: email,
        message: message,
      })
      .then((Response) => {
        console.log(Response);

        if (toastId >= 0) {
          toast.update(toastId, {
            render: "Phản hồi gửi thành công.",
            type: "success",
            autoClose: 3000,
          }); // does nothing
        } else {
          toast("Phản hồi gửi thành công.", {
            type: "success",
            autoClose: 3000,
          });
        }
      });
  } catch (error) {
    console.log(error);
    if (toastId >= 0) {
      toast.update(toastId, {
        render: "Phản hồi gửi không thành công.",
        type: "error",
        autoClose: 3000,
      }); // does nothing
    } else {
      toast("Phản hồi gửi không thành công.", {
        type: "error",
        autoClose: 3000,
      });
    }
  }
};
