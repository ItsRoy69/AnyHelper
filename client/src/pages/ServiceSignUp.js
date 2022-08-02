import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import service_signup from "../assets/service_signup.png";

import { Link } from "react-router-dom";

import "../styles/ServiceSignUp.css";


const ServiceSignUp = () => {

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

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
                <input type="text" className="signup_service_name_input" placeholder="Name" name="requiredField" style={{width: "416px"}} />
              </div>
              <div className="signup_service_mail">
                <input type="text" className="signup_service_mail_input" placeholder="Mail ID" name="requiredField" style={{width: "416px"}} />
              </div>
              <div className="signup_service_password">
                <input type="text" className="signup_service_password_input" placeholder="Password" name="requiredField" style={{width: "416px"}} />
              </div>
              <div className="signup_service_address">
                <textarea type="text" className="signup_service_password_input" placeholder="Address" name="requiredField" style={{width: "416px"}} />
              </div>
              <div className="signup_service_buttons">
                <Link to="sign-up">
                  <button className="signup_service_button">Signup</button>
                </Link>
                <p className="signup_service-paralogin">Already a member of this website ? 
                  <Link to="/servicelogin" className="signup_service-login">
                  &nbsp;Login
                  </Link>
                </p> 
              </div>
            </div>
          </div>
          <div className="signup_service_right">
            <img src={service_signup} alt="" className="signup_service_banner" />
          </div>          
        </div>               
      </div>    

      <Footer />
    </>
  )
}

export default ServiceSignUp
