import React from 'react'

import "../styles/WorkerLogin.css";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import wokerbanner from "../assets/wokerbanner.png";

import { Link } from "react-router-dom";

const WorkerLogin = () => {
  return (
    <>
      <Navbar />

      {/* --------------------------------LOGIN OF WORKERS------------------------------------ */}

      <div className="worker_login">
        <div className="worker_login_left">
          <h1>Login to the website & work with us.</h1>
          <h4>Join 30,000+ partners across India</h4>
        </div>
        <div className="worker_login_right">
            <img src={wokerbanner} alt="" className="worker_register_banner" />
        </div>
      </div>
      <div className="worker_login_mid">
        <div className="worker_login_box">
          <h2>Let's get connected and help people by providing services</h2>
          <div className="worker_login_inputs">
            <div className="worker_login_name">
              <input type="text" className="worker_login_name_input" placeholder="Name" />
            </div>
            <div className="worker_login_mail">
              <input type="text" className="worker_login_mail_input" placeholder="Mail ID" />
            </div>
            <div className="worker_login_phone">
              <input type="text" className="worker_login_phone_input" placeholder="Your phone number" />
            </div>
            <div className="worker_login_location">
              <input type="text" className="worker_login_work_location" placeholder="Your Address" />
            </div>
            <div className="worker_login_work">
              <input type="text" className="worker_login_work_input" placeholder="Work your want to do ?" />
            </div>
          </div>

          <p className="worker_login-paralogin">Already a member of this website ? 
            <Link to="/workerlogin" className="worker_login-login">
            &nbsp;Login
            </Link>
          </p>
          <Link to="sign-up" className="worker_login-button">
            <button className="worker_register_btn">Join Us</button>
          </Link>
        </div>
      </div>  

      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default WorkerLogin
