import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import service_login from "../assets/service_login.png";

import { Link } from "react-router-dom";

import "../styles/ServiceLogin.css";


const ServiceLogin = () => {

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

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
                <input type="text" className="login_service_mail_input" placeholder="Mail ID" name="requiredField" style={{width: "416px"}} />
              </div>
              <div className="login_service_password">
                <input type="text" className="login_service_password_input" placeholder="Password" name="requiredField" style={{width: "416px"}} />
              </div>
              <div className="login_service_buttons">
                <Link to="sign-up">
                  <button className="login_service_button">Login</button>
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
