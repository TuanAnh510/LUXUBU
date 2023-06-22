import "./mostsearch.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MostSearch = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const categorylist = useSelector((state) => state.categoryList);
  const { categorys } = categorylist;

  // const handerCategorys = (idCategorys) => {
  //   dispatch(findProductsPrice("", "", "", "", `["${idCategorys}"]`));
  // };

  return (
    <div className="most-search mt-5">
      <div className="text-[22px] mt-10 font-bold text-left">
        <p>{t("carts5")}</p>
      </div>
      <ul className="mt-5">
        <Swiper
          className=""
          slidesPerView={6}
          spaceBetween={10}
          breakpoints={{
            992: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          {categorys?.map((item, index) => (
            <SwiperSlide key={index}>
              <li className="w-[80%] mr-[10px] text-center">
                <Link
                  // onClick={handerCategorys(item._id)}
                  to="/Sale"
                >
                  <button className="text-[14px]">{item.title}</button>
                </Link>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default MostSearch;
