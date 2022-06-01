import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

                <a type="button" className="btn btn-warning" style={{ marginBottom: "2rem" }} href="https://gps-coordinates.org/">
                   Get Location         
                </a>

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

                <div class="nav-item dropdown">
                  <p
                    class="dropdown-toggle form1_control"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Occupation
                  </p>

                  <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/">
                        Plumbing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Electric
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Mechanic
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Electric
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="shopjoin_form1 row">
            <div className="col-lg-3 col-md-12 form_col">              

              <input
                type="email"
                className="form-control form1_control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Tap"
              />

              <input
                type="email"
                className="form-control form1_control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Showers"
              />              
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Valves"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="PVC Pipes"
                />              
                
              </form>
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Metal Fittings"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Sinks"
                />               
                
              </form>
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Toilet Pot"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Flush Valve"
                />
              </form>
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Geyser"
                />
                <button type="submit" className="btn btn-warning">
                  SignUp
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
