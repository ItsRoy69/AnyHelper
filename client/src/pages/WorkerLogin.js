import React, { useEffect, useState } from 'react'

import "../styles/WorkerLogin.css";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import wokerbanner from "../assets/workerlogin.png";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const WorkerLogin = () => {

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
      .post("https://anyhelper.herokuapp.com/workers/login", data, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        console.log(response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", 1);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          alert("Logged in Successfully!");
          navigate(`/userdashboard/?id=${response.data.user._id}`);
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
            <div className="worker_login_mail">
              <input type="text" className="worker_login_mail_input" placeholder="Mail ID" name="email" value={loguser.email} onChange={inputsHandler} />
            </div>
            <div className="worker_registration_password">
              <input type="password" className="worker_registration_password_input" placeholder="Password" name="password" value={loguser.password} onChange={inputsHandler} />
            </div>
          </div>

          <p className="worker_login-paralogin">Not a member of this website ? 
            <Link to="/workerregistration" className="worker_login-login">
            &nbsp;Signup
            </Link>
          </p>
          <Link to="/userdashboard" className="worker_login-button">
            <button className="worker_register_btn" type="submit" onClick={signIn}>Login</button>
          </Link>
        </div>
      </div>  

      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default WorkerLogin
