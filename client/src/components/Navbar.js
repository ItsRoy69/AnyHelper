import React from "react";
import navimg from "../assets/nav.png";
import { MdExpandMore } from "react-icons/md";



import "../styles/Navbar.css";

export default function Navbar() {
  return (

    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={navimg} alt="img" className="navbar_brand_logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon">-</span> */}
            <MdExpandMore />
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
