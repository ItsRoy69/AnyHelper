import React from "react";
import "../styles/WorkerJoin.css";
import shp1 from "../assets/shp1.svg";
import Navbar from "../components/Navbar";

const WorkerJoin = () => {
  return (
    <>
      <Navbar />

      <div className="shopjoin_container container">
        <div className="shopjoin_container_inner">
          <h2 className="shopjoin_header">Join with us for getting work </h2>

          <div className="shopjoin_form1 row">
            <div className="col-lg-6 col-md-12">
              <img
                src="https://i.ibb.co/W224PWg/workersignin.gif"
                alt="hellothere"
                className="shopsignin_img"
              />
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
                  placeholder="Phone"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Username"
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
                  placeholder="City"
                />

                <input
                  type="email"
                  className="form-control form1_control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Address"
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
                        Plumber
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Electrician
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Mechanic
                      </a>
                    </li>
                  </ul>
                </div>



                <button type="submit" className="btn btn-warning">
                  Join us
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkerJoin;
