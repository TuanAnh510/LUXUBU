import { Link } from "react-router-dom";
import "./ModalBrand.css";
import { useSelector } from "react-redux";
import logo1 from "../logo/Nivea-FILEminimizer.jpg";
import logo2 from "../logo/60ed0c57e2189-kem-duong-am-vichy-giai-cuu-lan-da-thieu-am-1.jpeg";
import logo3 from "../logo/Header_banner_mobile_size1536x500px_9a2edfbfbe.jpg";
import logo4 from "../logo/035_img_subbanner9_brandinfo_800x300px_fbd4d48fdcce4f2091a115b643f2a114.webp";
import { useTranslation } from "react-i18next";

const ModalBrand = () => {
  const brandlist = useSelector((state) => state.brandList);
  const { brands } = brandlist;
  const { t } = useTranslation();


  return (
    <div className="BrandSetMainParent ">
      <div className="flex flex-col gap-2 BrandPriceHolder w-[250px]">
        <div className="text-left font-bold text-black text-[20px]   ">
          {t("listCategoryBrand")}
        </div>
        <div className="h-[400px]  mt-3">
          {brands?.map((item, index) => (
            <Link key={item._id} to={`brands/${item._id}`}>
              <p
                className={`hover:text-[#ff2b70] text-left ${index !== 0 ? "mt-5" : ""
                  }`}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 mt-10 BrandHold">
        <div className="brandgift">
          <img src={logo1} alt="" />
        </div>
        <div className="brandgift">
          <img src={logo2} alt="" />
        </div>
        <div className="brandgift">
          <img src={logo3} alt="" />
        </div>
        <div className="brandgift">
          <img src={logo4} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ModalBrand;
