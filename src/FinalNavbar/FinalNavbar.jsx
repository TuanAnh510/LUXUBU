import React from "react";
import MainNavbar from "../Static-Pages/MainNavbar/MainNavbar";
import Navbars from "../Static-Pages/Navbars/Navbars";
import Top from "../Static-Pages/Navbardivs/Top";
// import Navbar from "../Static-Pages/Navbardivs/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Static-Pages/Navbars/index";
import { Nav } from "../data/navigation";
import useNavigation from "../hook/useNavigation";
import Tabbar from "../Static-Pages/Tabbar";
import Itop from "../Components/Itop/Itop";
import Ileft from "../Components/Itop/Ileft";
function FinalNavbar() {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div
      style={{
        zIndex: 999,
        top: 0,
        backgroundColor: "white",
      }}
    >
      <Top />

      <Itop />
      <Navbars />
      {/* <MainNavbar /> */}
      <div className={"bg-gray-200"}>
        <Navbar
          navigationData={Nav}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
        />
        <Tabbar
          navigationData={Nav}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
        />
      </div>
      <br />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <Navbar/> */}
    </div>
  );
}

export default FinalNavbar;
