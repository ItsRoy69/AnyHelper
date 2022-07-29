import React from 'react'

import "../styles/WorkerRegistration.css";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import wokerbanner from "../assets/wokerbanner.png";

import { Link } from "react-router-dom";

const WorkerRegistration = () => {
  return (
    <>
      <Navbar />

      {/* --------------------------------REGISTRATION OF WORKERS------------------------------------ */}

      <div className="worker_registration">
        <div className="worker_registration_left">
          <h1>Earn More. Earn Respect. Safety Ensured.</h1>
          <h4>Join 30,000+ partners across India</h4>
        </div>
        <div className="worker_registration_right">
            <img src={wokerbanner} alt="" className="worker_register_banner" />
        </div>
      </div>
      <div className="worker_registration_mid">
        <div className="worker_registration_box">
          <h2>Let's get connected and help people by providing services</h2>
          <div className="worker_registration_inputs">
            <div className="worker_registration_name">
              <input type="text" className="worker_registration_name_input" placeholder="Name" />
            </div>
            <div className="worker_registration_mail">
              <input type="text" className="worker_registration_mail_input" placeholder="Mail ID" />
            </div>
            <div className="worker_registration_phone">
              <input type="text" className="worker_registration_phone_input" placeholder="Your phone number" />
            </div>
            <div className="worker_registration_work">
              <input type="text" className="worker_registration_work_input" placeholder="Work your want to do ?" />
            </div>
          </div>

          <p className="worker_registration-paralogin">Already a member of this website ? 
            <Link to="sign-up" className="worker_registration-login">
            &nbsp;Login
            </Link>
          </p>
          <Link to="sign-up" className="worker_registration-button">
            <button className="worker_register_btn">Join Us</button>
          </Link>
        </div>
      </div>  

      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default WorkerRegistration
