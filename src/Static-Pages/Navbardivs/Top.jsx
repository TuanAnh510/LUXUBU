import React from "react";
import "./Top.css";
import { FaTruck } from "react-icons/fa";
import { VscDeviceMobile } from "react-icons/vsc";
import { BsBagCheck } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import logoUS from "../../Image/united-states.png";
import logoVN from "../../Image/vietnam.png";

function Top() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <div>
      <div className="AdBottom_mainCon">
        <div className="AdBottom_innerCon">
          <div className="animator_div">
            <div size="25px" />
            <section className="animation">
              <div className="first mt-7">
                <div>{t("ani_text1")}</div>
              </div>
              <div className="second mt-3">
                <div>{t("ani_text2")}</div>
              </div>
              <div className="third">
                <div>{t("ani_text3")}</div>
              </div>
            </section>
          </div>
          <div className="Ab_div flex justify-between">
            <div className="mr-5 w-[100px]">
              <select
                onChange={handleLanguageChange}
                className="appearance-none bg-no-repeat bg-right pr-8 pl-3 h-8 border rounded text-[15px]"
              >

                <option value="vi" className="flex mx-auto" >
                  Tiếng Việt
                </option>
                <option value="en" className="mx-auto" >
                  English
                </option>
              </select>
            </div>
            <div className="flex items-center w-[200px]">
              <div className="AdBottom_div mr-3 flex items-center">
                <FaStore className="mr-1" />
                <p>{t("navtop1")}</p>
              </div>
              <div className="AdBottom_div flex items-center">
                <FaTruck className="mr-1" />
                <p>{t("navtop2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
