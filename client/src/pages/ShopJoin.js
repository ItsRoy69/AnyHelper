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
                  className="form-control form1_control"
                  placeholder="Name"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Email"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Latitude"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Longitude"
                />

                <a type="button" className="btn btn-warning" style={{ marginBottom: "2rem" }} href="https://gps-coordinates.org/">
                   Get Location         
                </a>

                <input
                  className="form-control form1_control"
                  placeholder="Password"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Phone"
                />

                <input
                  className="form-control form1_control"
                  placeholder="City"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Address"
                />

                <input
                  className="form-control form1_control"
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
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="shopjoin_form1 row">
            <div className="col-lg-3 col-md-12 form_col">              

              <input
                className="form-control form1_control"
                id="item1"
                placeholder="Tap"
              />

              <input
                className="form-control form1_control"
                id="item2"
                placeholder="Showers"
              />              
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  className="form-control form1_control"
                  id="item3"
                  placeholder="Valves"
                />

                <input
                  className="form-control form1_control"
                  id="item4"
                  placeholder="PVC Pipes"
                />              
                
              </form>
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  className="form-control form1_control"
                  id="item5"
                  placeholder="Metal Fittings"
                />

                <input
                  className="form-control form1_control"
                  id="item6"
                  placeholder="Sinks"
                />               
                
              </form>
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  className="form-control form1_control"
                  id="item7"
                  placeholder="Toilet Pot"
                />

                <input
                  className="form-control form1_control"
                  id="item8"
                  placeholder="Flush Valve"
                />
              </form>
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  className="form-control form1_control"
                  id="item9"
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
