import React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@mui/styles";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import signup from "../assets/shop.png";
import shp1 from "../assets/shp1.svg";

import "../styles/ShopJoin.css";

const ShopJoin = () => {
  return (
    <>
      <Navbar />

      <div className="shopjoin_container container">
        <div className="shopjoin_container_inner">
          <h2 className="shopjoin_header">Register your shop</h2>

          <div className="shopjoin_form1 row">
            <div className="col-lg-6 col-md-12">
              <img src={shp1} alt="" className="shp_img1" />
            </div>

            <div className="col-lg-6 col-md-12 form_col">
              <form>
                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Latitude"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Longitude"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="City"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Shop name"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Shop name"
                />

                <div class="nav-item dropdown">
                  <p
                    class="dropdown-toggle form1_control"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Dropdown
                  </p>

                  <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Shop name"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Shop name"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Shop name"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Shop name"
                />

                <button type="submit" className="btn btn-warning">
                  SignIn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopJoin;
