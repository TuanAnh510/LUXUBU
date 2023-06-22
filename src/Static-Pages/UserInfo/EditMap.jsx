import React, { useState, useEffect } from "react";
import "./css/UserInfor.css";
import UsrAcount from "./UserAcount";
import User from "./User";
import "moment-timezone";
import { Select } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserAddress } from "../../redux/action/auth";
const { Option } = Select;
const EditMap = () => {
  const userAddress = window.localStorage.getItem("userAddress")
    ? JSON.parse(window.localStorage.getItem("userAddress"))
    : "";
  const userId = window.localStorage.getItem("userid");
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState(
    userAddress.city ? userAddress.city : ""
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    userAddress.district ? userAddress.district : ""
  );
  const [selectedWard, setSelectedWard] = useState(
    userAddress.ward ? userAddress.ward : ""
  );
  const [selectedAddress, setSelectedAddress] = useState(
    userAddress.address ? userAddress.address : ""
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
    if (selectedCity && selectedDistrict && selectedWard) {
      // Do something with the selected values
      console.log("Selected City:", selectedCity);
      console.log("Selected District:", selectedDistrict);
      console.log("Selected Ward:", selectedWard);
      console.log("Selected Addres:", selectedAddress);

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
      console.log("Please select all fields");
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
    <>
      <div className="Iv-container">
        <div className="Iv-style">
          <div className="wrapLayout">
            <div className="flex flex-wrap justify-between">
              <div className=" mt-2 w-[30%]">
                <div className="UserNav">
                  <User />
                </div>
                {/* <div className="mt-3 UserNavHis">
                  <UserHistory />
                </div> */}
                <div className="mt-3 UserAC pb-3">
                  <UsrAcount />
                </div>
              </div>
              <div className="main_styler w-[100%] mb-2">
                <div className="flex flex-col bg-[#f5f6f6] pt-2">
                  <div className="bg-white rounded-[8px] ">
                    <div className="w-[100%] h-[44px] bg-white text-[25px] text-black mt-2">
                      <div className="text-center ">Cập nhật địa chỉ </div>
                    </div>
                    <div>
                      <form onSubmit={handleSaveAddress}>
                        <div className="Ivite_loho">
                          <div className="text-left my-2 mx-auto">
                            <label className="my-2 text-lg">
                              Tỉnh / Thành phố:{" "}
                            </label>
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
                            <label className="my-2 text-lg">
                              Quận / Huyện:{" "}
                            </label>
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
                                <Option
                                  key={district.code}
                                  value={district.code}
                                >
                                  {district.name}
                                </Option>
                              ))}
                            </Select>
                          </div>
                          <div className="text-left my-2 mx-auto">
                            <label className="my-2 text-lg">
                              Phường / Xã:{" "}
                            </label>
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
                            <label className="my-2 text-lg">
                              Địa chỉ giao hàng:{" "}
                            </label>
                            <br />
                            <input
                              value={selectedAddress}
                              onChange={(e) =>
                                setSelectedAddress(e.target.value)
                              }
                              type="text"
                              className="w-[400px] text-lg ml-2 placeholder:text-black border-b-2 color-[black]"
                            />
                          </div>
                          <div className="">
                            <button
                              type="submit"
                              className="mt-4 mb-8 w-full text-[15px] rounded-md bg-[#fe2c6d] px-6 py-2 font-medium text-white"
                            >
                              Cập nhật
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMap;
