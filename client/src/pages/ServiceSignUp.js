import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

import service_signup from "../assets/service_signup.png";

import { Link, useNavigate } from "react-router-dom";

import "../styles/ServiceSignUp.css";

const ServiceSignUp = () => {
  const navigate = useNavigate();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
  });

  let name, value;

  const inputsHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setCustomer({ ...customer, [name]: value });
    console.log(e.target.value);
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

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = {
        latitude: latitude,
        longitude: longitude,
        name: customer.name,
        email: customer.email,
        address: customer.address,
        password: customer.password,
      };
      await axios
        .post("https://anyhelper.herokuapp.com/customers/register", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          alert("Registration Successfull!");
          navigate("/servicelogin");
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

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Navbar />
      <div className="signup_service">
        <div className="signup_service_header">
          <div className="signup_service_left">
            <h1>Signup to get services</h1>
            <h4>Join 30,000+ partners across India</h4>
            <div className="signup_service_inputs">
              <div className="signup_service_name">
                <input
                  type="text"
                  className="service_signup_inputs signup_service_name_input "
                  placeholder="Name"
                  style={{ width: "416px" }}
                  name="name"
                  value={customer.name}
                  onChange={inputsHandler}
                />
              </div>
              <div className="signup_service_mail">
                <input
                  type="text"
                  className="service_signup_inputs signup_service_mail_input "
                  placeholder="Mail ID"
                  style={{ width: "416px" }}
                  name="email"
                  value={customer.email}
                  onChange={inputsHandler}
                />
              </div>
              <div className="signup_service_password">
                <input
                  type="password"
                  className="service_signup_inputs signup_service_password_input "
                  placeholder="Password"
                  style={{ width: "416px" }}
                  name="password"
                  value={customer.password}
                  onChange={inputsHandler}
                />
              </div>
              <div className="signup_service_address">
                <textarea
                  type="text"
                  className="service_signup_inputs signup_service_password_input "
                  placeholder="Address"
                  style={{ width: "416px" }}
                  name="address"
                  value={customer.address}
                  onChange={inputsHandler}
                />
              </div>
              <div className="signup_service_buttons">
                <div className="signup_service_signup_button_div">
                  <Link to="sign-up">
                    <button
                      className="signup_service_button"
                      type="submit"
                      onClick={submitHandler}
                    >
                      Signup
                    </button>
                  </Link>
                </div>
                <p className="signup_service-paralogin">
                  Already a member of this website ?
                  <Link to="/servicelogin" className="signup_service-login">
                    &nbsp;Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="signup_service_right">
            <img
              src={service_signup}
              alt=""
              className="signup_service_banner"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServiceSignUp;
