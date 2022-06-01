import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

import service1 from "../../../assets/service1.jpg";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import service4 from "../../../assets/service4.png";
import service5 from "../../../assets/service5.png";
import service6 from "../../../assets/service6.png";

export default function Service({ customerDetails }) {
  return (
    <>
      <div className="container servicecontainer" id="services">
        <h1 className="serviceheader">Our Services</h1>
        <div className="cards_parent">

          <div className="card workcard">
            <div className=" workcard_body">
              <img
                src={service1}
                alt="Electrical Shops"
              />
              <h3 className="  text-truncate workname">
                Electrical Shops
              </h3>
              <span className="text justify-content  ">
                Find the nearest electrical shops Near your place
              </span>
              <div className="d-block  ">
                <Link to="/electricalshops">
                  <button className=" btn service_btn btn-warning">Shops</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service2} width={30} alt="Mechanic shops" />
              <h3 className="  text-truncate workname">Mechanic shops</h3>
              <span className="text justify-content  ">
                Find the nearest Mechanic shops Near your place
              </span>
              <div className="d-block  ">
                <Link to="/mechanicshops">
                  <button className=" btn service_btn btn-warning">Shops</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service3} width={30} alt="Plumbing shops" />
              <h3 className="  text-truncate workname">Plumbing shops</h3>
              <span className="text justify-content  ">
                Find the nearest Mechanic shops Near your place
              </span>
              <div className="d-block  ">
                <Link to="/plumbershops">
                  <button className=" btn service_btn btn-warning">Shops</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service4} width={30} alt="Find Workers" />
              <h3 className="  text-truncate workname">Find Workers</h3>
              <span className="text justify-content  ">
                Find the worker you need to make your work done
              </span>
              <div className="d-block  ">
                <Link to="/workers">
                  <button className=" btn service_btn btn-warning">Workers</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service5} width={30} alt="Shop Join" />
              <h3 className="  text-truncate workname">Shop Join</h3>
              <span className="text justify-content  ">
                Join your shop with us and sell your items online
              </span>
              <br />
              <div className="d-block  ">
                <Link to="/shopjoin">
                  <button className="  btn service_btn btn-warning" data-inline="true">
                    Add Shop
                  </button>
                </Link>
                <Link to="/shopsignin">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service6} width={30} alt="Workers Join" />
              <h3 className="  text-truncate workname">Workers Join</h3>
              <span className="text justify-content  ">
                workers can Join our website and get work.
              </span>
              <div className="d-block  ">
                <Link to="/workerJoin">
                  <button className=" btn service_btn btn-warning">Join</button>
                </Link>
                <Link to="/workersignin">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
