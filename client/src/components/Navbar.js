import React, { useEffect } from 'react';
import "../styles/Navbar.css";

import { MdExpandMore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Navbar = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const type = localStorage.getItem("type");
  const user = JSON.parse(localStorage.getItem("user"));


  const signOut = async () => { 
    if(type==0){
    await axios
    .post("https://anyhelper.herokuapp.com/stores/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      token : token
    })
    .then((response) => {
    console.log(response);   
    localStorage.clear();
    navigate('/');
    }).catch((e) => {
      console.log(e);
    })
  }
  else if(type==1){
    await axios
    .post("https://anyhelper.herokuapp.com/workers/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      token : token
    })
    .then((response) => {
    console.log(response);   
    localStorage.clear();
    navigate('/');
    }).catch((e) => {
      console.log(e);
    })
  }
  else{
    await axios
    .post("https://anyhelper.herokuapp.com/customers/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      token : token
    })
    .then((response) => {
    console.log(response);   
    localStorage.clear();
    navigate('/');
    }).catch((e) => {
      console.log(e);
    })
  }
  }

 

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ANYHELPER
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon">-</span> */}
            <MdExpandMore />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/blogs">
                  Blogs
                </a>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              {!token?
              <>
              <li className="nav-item">
                <a className="nav-link" href="/shopregister">
                  Register Shop
                </a>
              </li> 
  
          
  
              <li className="nav-item">
                <a className="nav-link" href="/workerregistration">
                  Register as Professional
                </a>
              </li>
           

              <Link to="/servicesignup" className="nav-btnlink">
                <button className="btn">Sign Up</button>
              </Link>
              </>
              : 
              <>
           
            <Link className="nav-link" to= {{ pathname : `/userdashboard/?id=${user._id}`}} >
                  Dashboard
            </Link>
            <Link to="/" className="nav-btnlink">
              <button className="btn" onClick={signOut}>Logout</button>
            </Link>
            </>
          }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
