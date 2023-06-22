import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill, BsMinecartLoaded } from "react-icons/bs";
import { TbBrandBootstrap } from "react-icons/tb";
import { CgInbox } from "react-icons/cg";
import { FaBlog,FaPhoneAlt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import styles from "./Tabbar.module.css";
import { Link } from "react-router-dom";

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
    const getTabIcon = useCallback((item) => {
        switch (item.icon) {
            case "Home":
                return <AiFillHome />;
            case "Discover":
                return <AiFillCompass />;
            case "Store":
                return <BsFillBagFill />;
            case "Inbox":
                return <CgInbox />;
            case "Profile":
                return <BsFillPersonFill />;
            case "Cart":
                return <BsMinecartLoaded />;
            case "Brand":
                return <TbBrandBootstrap />;
            case "About":
                return <FaPhoneAlt />;
            case "Contact":
                return <GrContact />;
            case "Blog":
                return <FaBlog />;
        }
    }, []);

    return (
        <nav className={"z-50  flex md:hidden lg:hidden flex-row items-center justify-around px-8 h-18 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl shadow-2xl shadow-black"}>
            {navigationData.map((item, index) => (
                <span
                    key={index}
                    className={classNames([
                        "text-gray-400 hover:text-gray-700 cursor-pointer w-18 h-full flex items-center justify-center",
                        currentRoute === item && "bg-gradient-to-t from-white to-gray-100 border-t-3 border-gray-700 text-gray-700",
                    ])}
                    onClick={() => setCurrentRoute(item)}
                >
                    <Link to={item.path}>
                        <span className={"-mb-1"} style={{ color: "black" }}>{getTabIcon(item)}</span>
                    </Link>
                </span>
            ))}
        </nav>
    );
};

export default Tabbar;