import React, { useState, useEffect } from "react";
import "moment-timezone";
import { Select } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserAddress } from "../redux/action/auth";
import { toast } from "react-toastify";
const { Option } = Select;

const AddressUser = () => {
  const userAddress =
    window.localStorage.getItem("userAddress") != ""
      ? JSON.parse(window.localStorage.getItem("userAddress"))
      : null;
  const userId = window.localStorage.getItem("userid");
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState(
    userAddress != null ? userAddress.city : ""
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    userAddress != null ? userAddress.district : ""
  );
  const [selectedWard, setSelectedWard] = useState(
    userAddress != null ? userAddress.ward : ""
  );
  const [selectedAddress, setSelectedAddress] = useState(
    userAddress != null ? userAddress.address : ""
  );
  const [result, setResult] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get(
        "https://provinces.open-api.vn/api/?depth=1"
      );
      setCities(response.data);
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      const response = await axios.get(
        `https://provinces.open-api.vn/api/p/${selectedCity}?depth=2`
      );
      setDistricts(response.data.districts);
    };

    fetchDistricts();
  }, [selectedCity]);

  useEffect(() => {
    const fetchWards = async () => {
      const response = await axios.get(
        `https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`
      );
      setWards(response.data.wards);
    };

    fetchWards();
  }, [selectedDistrict]);

  const fetchDistricts = async (cityId) => {
    const response = await axios.get(
      `https://provinces.open-api.vn/api/p/${cityId}?depth=2`
    );
    setDistricts(response.data.districts);
  };

  const fetchWards = async (districtId) => {
    const response = await axios.get(
      `https://provinces.open-api.vn/api/d/${districtId}?depth=2`
    );
    setWards(response.data.wards);
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
    setSelectedDistrict("");
    setSelectedWard("");
    setResult("");

    if (value) {
      fetchDistricts(value);
    } else {
      setDistricts([]);
      setWards([]);
    }
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    setSelectedWard("");
    setResult("");

    if (value) {
      fetchWards(value);
    } else {
      setWards([]);
    }
  };
  const handleWardChange = (value) => {
    setSelectedWard(value);
    printResult();
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    if (selectedCity && selectedDistrict && selectedWard && selectedAddress) {
      dispatch(
        updateUserAddress(
          userId,
          selectedCity,
          selectedDistrict,
          selectedWard,
          selectedAddress
        )
      );
    } else {
      toast.warning("Hãy kiểm tra lại còn dữ liệu chưa chọn");
    }
  };

  const printResult = () => {
    if (selectedCity && selectedDistrict && selectedWard) {
      const cityText = cities.find((city) => city.code === selectedCity)?.name;
      const districtText = districts.find(
        (district) => district.code === selectedDistrict
      )?.name;
      const wardText = wards.find((ward) => ward.code === selectedWard)?.name;
      const resultText = `${cityText} | ${districtText} | ${wardText}`;
      setResult(resultText);
    }
  };
  return (
    <div>
      <form onSubmit={handleSaveAddress}>
        <p className="text-xl font-medium">Địa chỉ giao hàng</p>
        <p className="text-gray-400">Xem lại thông tin trước khi đặt hàng</p>
        <div className="Ivite_loho">
          <div className="text-left my-2 mx-auto">
            <label className="my-2 text-lg">Tỉnh / Thành phố: </label>
            <br />
            <Select
              showSearch
              style={{
                width: 400,
              }}
              placeholder="Chọn tỉnh thành"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.children ?? "")
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              value={selectedCity}
              onChange={handleCityChange}
            >
              {cities?.map((city) => (
                <Option key={city.code} value={city.code}>
                  {city.name}
                </Option>
              ))}
            </Select>
          </div>

          <div className="text-left my-2 mx-auto">
            <label className="my-2 text-lg">Quận / Huyện: </label>
            <br />
            <Select
              showSearch
              style={{
                width: 400,
              }}
              placeholder="Chọn quận huyện"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.children ?? "")
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              value={selectedDistrict}
              onChange={handleDistrictChange}
            >
              {districts?.map((district) => (
                <Option key={district.code} value={district.code}>
                  {district.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="text-left my-2 mx-auto">
            <label className="my-2 text-lg">Phường / Xã: </label>
            <br />
            <Select
              showSearch
              style={{
                width: 400,
              }}
              placeholder="Chọn phường xã"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.children ?? "")
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              value={selectedWard}
              onChange={handleWardChange}
            >
              {wards?.map((ward) => (
                <Option key={ward.code} value={ward.code}>
                  {ward.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="text-left my-2 mx-auto">
            <label className="my-2 text-lg">Địa chỉ giao hàng: </label>
            <br />
            <input
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
              type="text"
              className="w-[400px] text-lg ml-2 placeholder:text-black border-b-2 color-[black]"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white text-[15px]"
            >
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressUser;
