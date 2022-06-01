import React from "react";

import Link from "@mui/material/Link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <>
      <Navbar />

      <div className="shopsignin_container">
        <div className="row shopsignin_row">
          <div className="col-lg-6 col-md-12 shopsignin_imgcol col-sm-12">
            <img
              src="https://i.ibb.co/gz4yCVX/shopsignin.gif"
              alt="hellothere"
              className="shopsignin_img"
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 shopsignin_detailscol">
            <div className="shopsignin_details">
              <h1 className="shopsignin_header">Sign Up</h1>

              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="form-control shopsignin_input"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your username"
                className="form-control shopsignin_input"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter your password"
                className="form-control shopsignin_input"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Confirm your password"
                className="form-control shopsignin_input"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Latitude"
                className="form-control shopsignin_input"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Longitude"
                className="form-control shopsignin_input"
              />

              <button
                className="btn btn-warning"
                style={{ marginBottom: "2rem" }}
              >
                Get Location
              </button>

              <br />

              <button className="btn btn-warning shopsignin_btn">
                Sign In
              </button>

              <p className="shopsignin_p">
                Already have an account?{" "}
                <Link href="/shop-sign-up">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
