import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import shopregister from "../assets/registershop.png";

import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "../styles/ShopRegister.css";

const ShopRegister = () => {
  const navigate = useNavigate();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [shop, setShop] = useState({
    admin: "",
    address: "",
    email: "",
    sname: "",
    password: "",
    stype: "",
    walletAddress: "",
  });

  let name, value;

  const inputsHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setShop({ ...shop, [name]: value });
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  };

  if (latitude && longitude) {
    localStorage.setItem("Latitude", latitude);
    localStorage.setItem("Longitude", longitude);
  }

  // console.log("Latitude is : ", latitude);
  // console.log("Latitude is : ", longitude);

  // const inputArr = [
  //   {
  //     type: "text",
  //     id: 1,
  //     value: ""
  //   }
  // ];

  const [arr, setArr] = useState([""]);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s, ""
      ];
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        latitude: latitude,
        longitude: longitude,
        admin: shop.admin,
        email: shop.email,
        sname: shop.sname,
        stype: shop.stype,
        address: shop.address,
        password: shop.password,
        walletAddress : shop.walletAddress,
        items: arr
      };
      await axios
        .post("https://anyhelper.herokuapp.com/stores/register", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          alert("Registration Successfull!");
          navigate("/shoplogin");
          console.log(response);
        })
        .catch((e) => {
          alert("Registration Unsuccessfull!");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index] = e.target.value;

      return newArr;
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Navbar />
      <div className="register_shop">
        <div className="register_shop_header">


          <div className="register_shop_left">
            <h1>Register your shop with us</h1>
            <h4>Join 30,000+ partners across India</h4>

            <div className="register_shop_inputs">
              <div className="register_shop_smallbox">
                <div className="register_shopkeep_name">
                  <input
                    type="text"
                    className="register_shopkeep_name_input"
                    placeholder="Name"
                    name="admin"
                    onChange={inputsHandler}
                    value={shop.admin}
                  />
                </div>
                <div className="register_shop_mail">
                  <input
                    type="text"
                    className="register_shop_mail_input"
                    placeholder="Mail ID"
                    name="email"
                    onChange={inputsHandler}
                    value={shop.email}
                  />
                </div>
              </div>
              <div className="register_shop_smallbox">
                <div className="register_shop_type">
                  <input
                    type="text"
                    className="register_shop_type_input"
                    placeholder="Shop type"
                    name="stype"
                    onChange={inputsHandler}
                    value={shop.stype}
                    list="browsers"
                  />
                </div>
                <datalist id="browsers">
                  <option value="Mechanical Shops" />
                  <option value="Electrical Shops" />
                  <option value="Plumbing Shops" />
                </datalist>
                <div className="register_shop_name">
                  <input
                    type="text"
                    className="register_shop_name_input"
                    placeholder="Shop name"
                    name="sname"
                    onChange={inputsHandler}
                    value={shop.sname}
                  />
                </div>
              </div>
              <div className="register_shop_address">
                <textarea
                  type="text"
                  className="register_shop_address_input"
                  placeholder="Shop address"
                  name="address"
                  onChange={inputsHandler}
                  value={shop.address}
                  style={{ width: "416px" }}
                />
              </div>
              <div className="register_shop_password">
                <input
                  type="password"
                  className="register_shop_password_input"
                  placeholder="Password"
                  name="password"
                  onChange={inputsHandler}
                  value={shop.password}
                  style={{ width: "416px" }}
                />
              </div>
              <div className="register_shop_wallet">
                <input
                  type="text"
                  className="register_shop_wallet_input"
                  placeholder="Wallet Address"
                  name="walletAddress"
                  onChange={inputsHandler}
                  value={shop.walletAddress}
                  style={{ width: "416px" }}
                />
              </div>
            </div>

          </div>


          <div className="register_shop_right">
            <img src={shopregister} alt="" className="register_shop_banner" />
          </div>
        </div>

        <div className="register_shop_mid">
          <h4 className="register_shop_mid_list_heading">
            List of items in your shop
          </h4>
          <div className="register_shop_midbox">
            <div className="register_shop_smallbox">
              <div className="register_shop_items">
                {arr.map((item, i) => {
                  return (
                    <input
                      onChange={handleChange}
                      value={item.value}
                      id={i}
                      type={item.type}
                      placeholder="Items"
                    />
                  );
                })}
              </div>
              <IoMdAddCircle
                className="register_shop_btn"
                size="30px"
                onClick={addInput}
              />
            </div>
          </div>
          <div className="register_shop_buttons">
            <p className="shop_registration-paralogin">
              Already a member of this website ?
              <Link to="/shoplogin" className="shop_registration-login">
                &nbsp;Login
              </Link>
            </p>
            <Link to="sign-up">
              <button
                className="register_shop_button"
                type="submit"
                onClick={submitHandler}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShopRegister;
