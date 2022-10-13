import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import service_login from "../assets/service_login.png";

import { Link, useNavigate } from "react-router-dom";

import "../styles/ServiceLogin.css";
import axios from 'axios';


const ServiceLogin = () => {


  const navigate = useNavigate();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [loguser, setLogUser] = useState({
    email: "",
    password: "",
  });

  
  let name, value;

  const inputsHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setLogUser({ ...loguser, [name]: value });
  };

  const signIn = async (e) => {
    e.preventDefault();

    const { email, password } = loguser;

    const data = { email, password };

    await axios
      .post("https://anyhelper.herokuapp.com/customers/login", data, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        console.log(response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", 2);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          alert("Logged in Successfully!");
          navigate(`/userdashboard?id=${response.data.user._id}`);
      }).catch((e) => {
        alert("Log in failed");
        console.log(e);
      });
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    
      });
    }
  }
  

  useEffect(() => {
    getLocation();
  },[])

  return (
    <>
      <Navbar />
      <div className="login_service">
        <div className="login_service_header">
          <div className="login_service_right">
            <img src={service_login} alt="" className="login_service_banner" />
          </div>
          <div className="login_service_left">
            <h1>Login to the website</h1>
            <h4>Join 30,000+ partners across India</h4>
            <div className="login_service_inputs">              
              <div className="login_service_mail">
                <input type="text" className="login_service_mail_input" placeholder="Mail ID"  style={{width: "416px"}} name = "email" value={loguser.email} onChange={inputsHandler}/>
              </div>
              <div className="login_service_password">
                <input type="password" className="login_service_password_input" placeholder="Password"  style={{width: "416px"}} name = "password" value={loguser.password} onChange={inputsHandler}/>
              </div>
              <div className="login_service_buttons">
                <Link to="sign-up">
                  <button className="login_service_button" type="submit" onClick={signIn}>Login</button>
                </Link>
                <p className="shop_registration-paralogin">Not a member of this website ? 
                  <Link to="/servicesignup" className="shop_registration-login">
                  &nbsp;Register
                  </Link>
                </p> 
              </div>
            </div>
          </div>
        </div>               
      </div>     

      <Footer />
    </>
  )
}

export default ServiceLogin
