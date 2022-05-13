import React from "react";
import { Link } from "react-router-dom";
import navimg from "./../../assets/nav.png";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="main_navbar fixed-top">
          <div className="brand-logo-name">
            <Link to={"/"} className="brand-logo">
              <img src={navimg} alt="img" />
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#footer">Footer</a>
              </li>
            </ul>
          </nav>
        </div>
    </>
  );
}