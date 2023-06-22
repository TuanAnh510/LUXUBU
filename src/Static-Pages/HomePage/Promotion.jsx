import { useTranslation } from "react-i18next";

const Promotion = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-4">
      <h3 className="col-span-4 text-left text-left text-[22px] font-bold">
        <p>{t("carts6")}</p>
      </h3>
      <div className="col-span-1">
        <img
          src="https://upload.lixibox.com/system/banners/covers/000/001/446/original/1672400900.jpg"
          alt="alt"
        />
      </div>
      <div className="col-span-1">
        <img
          src="https://upload.lixibox.com/system/banners/covers/000/001/445/original/1672936953.jpg"
          alt="alt"
        />
      </div>
      <div className="col-span-1">
        <img
          src="https://upload.lixibox.com/system/banners/covers/000/001/412/original/1671795783.png"
          alt="alt"
        />
      </div>
      <div className="col-span-1">
        <img
          src="https://upload.lixibox.com/system/banners/covers/000/001/444/original/1672936783.png"
          alt="alt"
        />
      </div>
    </div>
  );
};

export default Promotion;
