import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Static-Pages/HomePage/HomePage";
import Brands from "./Static-Pages/Brands/Brands";
import Holiday from "./Static-Pages/Holiday/Holiday";
import SkinCare from "./Static-Pages/SkinCare/SkinCare";
import Hair from "./Static-Pages/Hair/Hair";
import Makeup from "./Static-Pages/Makeup/Makeup";
import Bath from "./Static-Pages/Bath-Body/Bath";
import Fragrance from "./Static-Pages/Fragrance/Fragrance";
import Selfcare from "./Static-Pages/Selfcare/Selfcare";
import Tools from "./Static-Pages/Tools/Tools";
import Sales from "./Static-Pages/SalesPage/Sales";
import Login from "./Static-Pages/LoginPage/Login";
import Register from "./Static-Pages/RegisterPage/Register";
import Forgotpass from "./Static-Pages/Forgotpassword/Forgotpass";
import Carts from "./Static-Pages/Cart/Carts";
import Payment from "./Payment-Page/Payment";
import ProductDetails from "./Static-Pages/ProductsSpecifications/ProductDetails";
import Product from "./Static-Pages/ProductsSpecifications/Product";

import { UserInfo } from "./Static-Pages/UserInfo/UserInfo";

import AddProduct from "./Static-Pages/seller/AddProduct";
import ShowUsers from "./admin/ShowUsers";

import Privateroute from "./Components/Privateroute";
import Payments from "./Static-Pages/Payment/Payment";
import Delivery from "./Static-Pages/NewAddress/Delivery";
import AdminPrivate from "./Components/AdminPrivate";
import SellerPrivate from "./Components/SellerPrivate";
import Blog from "./Static-Pages/Blog/Blog";
import Tpost from "./Static-Pages/Blog/Tpost";
import Invite from "./Static-Pages/Invite/Ivite";
import Contact from "./Static-Pages/Invite/Contact/Contact";
import IviteBlog from "./Static-Pages/Invite/IviteBlog";
import Iviteuser from "./Static-Pages/Invite/IviteUser/IviteUser";
import NewPassword from "./Static-Pages/Forgotpassword/NewPassword";
import Information from "./Static-Pages/Invite/Information/Information";

import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/action/auth";
import FContact from "./Static-Pages/Contact/FContact";
import InforLX from "./Static-Pages/Invite/Information/InforLX";
import InforBuy from "./Static-Pages/Invite/Information/InforBuy";
import EditAC from "./Static-Pages/UserInfo/EditAc";
import EditPass from "./Static-Pages/UserInfo/EditPass";
import EditMap from "./Static-Pages/UserInfo/EditMap";
import Chat from "./Static-Pages/ProductsSpecifications/Chat";
import MessengerChat from "./Static-Pages/ProductsSpecifications/Chatmess";
import DealsSale from "./Static-Pages/SalesPage/DealsSale";
function AllRoutes() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser);
  }, [])


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Brands" element={<Brands />} />
      <Route path="/Brands/:id" element={<Holiday />} />
      <Route path="/Sale" element={<Sales />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Forgotpass" element={<Forgotpass />} />
      <Route path="NewPassword/:token" element={<NewPassword />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SkinCare" element={<SkinCare />} />
      <Route path="/Hair" element={<Hair />} />
      <Route path="/Makeup" element={<Makeup />} />
      <Route path="/BathBody" element={<Bath />} />
      <Route path="/Fragrance" element={<Fragrance />} />
      <Route path="/SelfCare" element={<Selfcare />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/Tpost/:id" element={<Tpost />} />
      <Route path="/Invite" element={<Invite />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/IviteBlog" element={<IviteBlog />} />
      <Route path="/Iviteuser" element={<Iviteuser />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/FContact" element={<FContact />} />
      <Route path="/InforLX" element={<InforLX />} />
      <Route path="/InforBuy" element={<InforBuy />} />
      <Route path="/EditAC" element={<EditAC />} />
      <Route path="/EditPass" element={<EditPass />} />
      <Route path="/EditMap" element={<EditMap />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/MessengerChat" element={<MessengerChat />} />
      <Route path="/DealsSale" element={<DealsSale />} />
      <Route path="/Sale/:id" element={<Product />} />
      <Route path="/Tools" element={<Tools />} />

      <Route
        path="/payments"
        element={
          <Privateroute>
            <Payments />
          </Privateroute>
        }
      />

      <Route
        path="/delivery"
        element={
          <Privateroute>
            <Delivery />{" "}
          </Privateroute>
        }
      />

      <Route
        path="/Carts"
        element={
          <Privateroute>
            <Carts />
          </Privateroute>
        }
      />
      <Route
        path="/Payment"
        element={
          <Privateroute>
            <Payment />
          </Privateroute>
        }
      />

      <Route
        path="/userinfo"
        element={
          <Privateroute>
            <UserInfo />
          </Privateroute>
        }
      />

      <Route
        path="/showusers"
        element={
          <Privateroute>
            <AdminPrivate>
              <ShowUsers />
            </AdminPrivate>
          </Privateroute>
        }
      />

      <Route
        path="/addproduct"
        element={
          <Privateroute>
            <SellerPrivate>
              <AddProduct />
            </SellerPrivate>
          </Privateroute>
        }
      />

      {/* <Route path='/Carts' element={<Carts/>}/> */}
    </Routes>
  );
}

export default AllRoutes;
