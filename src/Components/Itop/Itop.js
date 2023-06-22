import ScrollToTop from "react-scroll-to-top";
import React, { useState, useEffect } from "react";
import "./Itop.css";
import axios from "axios";
import { FaCaretUp } from "react-icons/fa";

const Itop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="scrollButton">
        {isVisible && (
          <button onClick={scrollToTop}>
            <div size="25px">
              <FaCaretUp />
            </div>
          </button>
        )}
      </div>
      <div className="chat-buttons">
        <ul>
          {/* <li>
            <a>
              <img
                src="https://everev.vn/wp-content/uploads/2023/03/icon-zalo-EverEV.png"
                alt="Zalo chat icon"
                className="iconZalo"
              />
            </a>
          </li> */}
          {/* <li>
            <a>
              <img
                src="https://everev.vn/wp-content/uploads/2023/03/icon-call-EverEV.png"
                alt="Phone icon"
                className="iconPhone"
              />
            </a>
          </li> */}
        </ul>
      </div>
      {/* <ScrollToTop component={CustomScrollToTopArrow} smooth /> */}
    </>
  );
};

export default Itop;
