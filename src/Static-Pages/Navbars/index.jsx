import { useState } from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";
import "./Navbar.css";
import "./Navshow.css";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import ModalBlog from "./Model/ModalBlog";
import Category from "./Model/Category";
import ModalBrand from "./Model/ModalBrand";
import { useTranslation } from "react-i18next";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const showHandler = () => {
    setShow(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };

  const showHandler2 = () => {
    setShow2(true);
    setShow(false);
    setShow3(false);
    setShow4(false);
  };

  const showHandler3 = () => {
    setShow3(true);
    setShow(false);
    setShow2(false);
    setShow4(false);
  };

  const showHandler4 = () => {
    setShow4(true);
    setShow(false);
    setShow2(false);
    setShow3(false);
  };

  const dontShowHandler = () => {
    setShow(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };

  const [showSubmenu, setShowSubmenu] = useState(null);

  return (
    <nav
      className={
        "hidden md:flex flex-row items-center justify-center px-8 pb-6 bg-white shadow-md"
      }
    >
      <div>
        <header className="banner" role="banner">
          <nav className="navbar" role="navigation" aria-label="menu">
            <ul className="menuNav">
              <Link to={"/"}>
                <li className="dropdown nav-link nav-link-fade-up transition-all duration-700 mx-10 hover:text-[#ff2b70]">
                  <p>{t("menu1")}</p>
                </li>
              </Link>

              <Link to={"/Sale"}>
                <li
                  className="dropdown nav-link nav-link-fade-up mx-10 hover:text-[#ff2b70]"
                  onMouseOver={showHandler2}
                >
                  <p>{t("menu2")}</p>
                  {show2 && (
                    <ul
                      className="dropdown-nav dropdown-nav2"
                      onMouseLeave={dontShowHandler}
                    >
                      <Category />
                    </ul>
                  )}
                </li>
              </Link>

              <Link to={"/Brands"}>
                <li
                  className="dropdown nav-link nav-link-fade-up mx-10 hover:text-[#ff2b70] "
                  onMouseOver={showHandler}
                >
                   <p>{t("menu3")}</p>
                  {show && (
                    <div>
                      <ul
                        className="dropdown-nav"
                        onMouseLeave={dontShowHandler}
                      >
                        <ModalBrand />
                      </ul>
                    </div>
                  )}
                </li>
              </Link>

              <Link to={"/Invite"}>
                <li className="dropdown nav-link nav-link-fade-up mx-10 hover:text-[#ff2b70]">
                <p>{t("menu4")}</p>
                  {/* {show3 && (
                    <ul
                      className="dropdown-nav dropdown-nav3"
                      onMouseLeave={dontShowHandler}
                    ></ul>
                  )} */}
                </li>
              </Link>

              <Link to={"/blog"}>
                <li
                  className="dropdown nav-link nav-link-fade-up mx-10 hover:text-[#ff2b70]"
                  onMouseOver={showHandler3}
                >
                  <p>Blog</p>
                  {show3 && (
                    <ul
                      className="dropdown-nav dropdown-nav3"
                      onMouseLeave={dontShowHandler}
                    >
                      <ModalBlog />
                    </ul>
                  )}
                </li>
              </Link>

              <Link to={"/Contact"}>
                <li className="dropdown nav-link nav-link-fade-up mx-10 hover:text-[#ff2b70]">
                <p>{t("menu6")}</p>
                </li>
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
