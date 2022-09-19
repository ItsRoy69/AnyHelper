import React, { useEffect, useState } from "react";

import "../styles/WorkerRegistration.css";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import wokerbanner from "../assets/wokerbanner.png";

import { Link, useNavigate } from "react-router-dom";

const WorkerRegistration = () => {
  
  const navigate = useNavigate();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  


 const [worker, setWorker] = useState({
   name: "",
   phone: "",
   email: "",
   password: "",
   profession: ""
 });

 let name, value;

 const inputsHandler = (e) => {
   name = e.target.name;
   value = e.target.value;

   setWorker({ ...worker, [name]: value });
 };

const getLocation = () => {
 if (navigator.geolocation) {
   navigator.geolocation.watchPosition(function(position) {
   setLatitude(position.coords.latitude);
   setLongitude(position.coords.longitude);
 
   });
 }
}

if(latitude && longitude){
 localStorage.setItem("Latitude",latitude);
 localStorage.setItem("Longitude",longitude);
}

const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const data = {
      latitude : latitude,
      longitude : longitude,
      name : worker.name,
      email: worker.email,
      profession : worker.profession,
      phone : worker.phone,
      password : worker.password
    };
    await axios
      .post("https://anyhelper.herokuapp.com/workers/register", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        alert("Registration Successfull!");
        navigate("/workerlogin");
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
},[])


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
              <input
                type="text"
                className="worker_registration_name_input wr_inputs"
                placeholder="Name"
                name="name"
                onChange={inputsHandler}
                value={worker.name}
              />
            </div>
            <div className="worker_registration_mail">
              <input
                type="text"
                className="worker_registration_mail_input wr_inputs"
                placeholder="Mail ID"
                name="email"
                onChange={inputsHandler}
                value={worker.email}
              />
            </div>
            <div className="worker_registration_phone">
              <input
                type="text"
                className="worker_registration_phone_input wr_inputs"
                placeholder="Your phone number"
                name="phone"
                onChange={inputsHandler}
                value={worker.phone}
              />
            </div>
            <div className="worker_registration_work">
              <input
                type="text"
                className="worker_registration_work_input wr_inputs"
                placeholder="Work your want to do ?"
                name="profession"
                onChange={inputsHandler}
                value={worker.profession}
                list="browsers"
              />   

              <datalist id="browsers">
                <option value="Bathroom cleaning" />
                <option value="Kitchen cleaning" />
                <option value="Mini cleaning services" />
                <option value="Pest control" />
                <option value="Full home cleaning" />
                <option value="Disinfection" />
                <option value="Shave/Beard Grooming" />
                <option value="Men Salon" />
                <option value="Therapy" />
                <option value="Spa" />
                <option value="Women Salon" />
                <option value="Waxing" />
                <option value="Facial" />
                <option value="Mechanics" />
                <option value="Electricians" />
                <option value="Plumbers" />
              </datalist>  

            </div>            
            <div className="worker_registration_password">
              <input
                type="password"
                className="worker_registration_password_input wr_inputs"
                placeholder="Set password"
                name="password"
                onChange={inputsHandler}
                value={worker.password}
              />
            </div>
          </div>

          <p className="worker_registration-paralogin">
            Already a member of this website ?
            <Link to="/workerlogin" className="worker_registration-login">
              &nbsp;Login
            </Link>
          </p>

          <div className="worker_registration_join_button_div">
            {window.innerWidth < 430 ? (
              <Link to="sign-up" className="worker_registration-button">
                <button className="worker_join_btn" type="submit" onClick={submitHandler}>
                  Register
                </button>
              </Link>
            ) : (
              <Link to="sign-up" className="worker_registration-button">
                 <button className="worker_join_btn" type="submit" onClick={submitHandler}>
                  Register
                </button>
              </Link>
            )}

          </div>
        </div>
      </div>

      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  );
};

export default WorkerRegistration;
