import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/action/auth";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { toast } from "react-toastify";

const InfoUser = () => {
  const dispatch = new useDispatch();

  const [userId, setUserId] = useState(localStorage.getItem("userid") || "");
  const [userName, setUserName] = useState(
    localStorage.getItem("username") || ""
  );
  const [firstName, setFirstName] = useState(
    localStorage.getItem("userfirstname") || ""
  );
  const [userMobile, setUserMobile] = useState(
    localStorage.getItem("usermobile") || ""
  );
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("useremail") || ""
  );

  const handleEditUser = (e) => {
    e.preventDefault();

    const isValidPhoneNumber = (phoneNumber) => {
      const pattern = /^\d{10}$/;
      return pattern.test(phoneNumber);
    };
    if (!isValidPhoneNumber(userMobile)) {
      toast.warning("Sai đinh dạng số điện thoại");
      return;
    }
    dispatch(updateUser(userId, firstName, userName, userEmail, userMobile));
  };

  return (
    <div>
      <form onSubmit={handleEditUser}>
        <p className="text-xl font-medium">Thông tin</p>
        <p className="text-gray-400">Xem lại thông tin trước khi đặt hàng</p>
        <label for="email" className="mt-4 mb-2 block text-sm font-medium">
          Họ
        </label>
        <div className="relative">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-md border py-3 border-gray-200  pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            required
          />

          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <GrUserExpert />
          </div>
        </div>
        <label for="email" className="mt-4 mb-2 block text-sm font-medium">
          Tên
        </label>

        <div className="relative">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full rounded-md border py-3 border-gray-200  pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            required
          />

          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <GrUserExpert />
          </div>
        </div>
        <label
          for="card-holder"
          className="mt-4 mb-2 block text-sm font-medium"
        >
          Email
        </label>
        <div className="relative">
          <input
            disabled
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full rounded-md border py-3 border-gray-200  pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <AiOutlineMail />
          </div>
        </div>
        <label
          for="card-holder"
          className="mt-4 mb-2 block text-sm font-medium"
        >
          Số điện thoại
        </label>
        <div className="relative">
          <input
            type="text"
            value={userMobile}
            onChange={(e) => setUserMobile(e.target.value)}
            className="w-full rounded-md border py-3 border-gray-200  pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Nhập số điện thoại"
            required
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <AiOutlinePhone />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 mb-8 w-full rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white text-[15px]"
        >
          Thay đổi thông tin
        </button>
      </form>
    </div>
  );
};

export default InfoUser;
