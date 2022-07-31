import React from 'react';
import "../styles/Navbar.css";

import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
