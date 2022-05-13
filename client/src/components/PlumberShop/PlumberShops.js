import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import pshop1 from "./../../assets/eshop1.jpg";
import pshop2 from "./../../assets/eshop2.jpg";
import pshop3 from "./../../assets/eshop3.jpg";
import user from "./../../assets/user.webp";

import "./PlumberShops.css";

export default function PlumberShops(){
  return (
    <>
        <Navbar />
          <div className="container">
            <div className="banner">
              <h1>Plumber Shops</h1>
            </div>
            <button
                type="button"
                className="button"
              >
                Sort By Distance
            </button>
            <select className="button dropdown-toggle" name="Occupation" id="selectOccupation" style={{marginLeft: "10px"}}>
              <option value="All">All</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Mechanic">Mechanic</option>
            </select>
          </div>
          <div className="containers">

            <div className="cards">
              <div className="card pemCard card-has-bg click-col" style={{ backgroundImage:`url(${pshop1})`}} >
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h3>pshop.name</h3>
                    <div className="card-title mt-0 ">
                      <h5>pshop.plumber</h5>
                    </div>                    
                      <h5 className="text">
                        <FontAwesomeIcon icon={faCity}/>
                        &nbsp;
                        pshop.city
                      </h5>
                  </div>
                  <div className="card-footer">
                    <div className="media">
                      <img src={user} alt="user" />
                        <div className="media-body">
                          <h6>Phone : pshop.phoneNo</h6>
                          <h6>pshop.address</h6>
                          <h6>pshop.distance km</h6>
                          <Link to="/items">
                            <button type="button" className="boxbutton">
                                Items
                            </button>
                          </Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>   
            </div>

            <div className="cards">
              <div className="card pemCard card-has-bg click-col" style={{ backgroundImage:`url(${pshop2})`}} >
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h3>pshop.name</h3>
                    <div className="card-title mt-0 ">
                      <h5>pshop.mechanic</h5>
                    </div>                    
                      <h5 className="text">
                        <FontAwesomeIcon icon={faCity}/>
                        &nbsp;
                        pshop.city
                      </h5>
                  </div>
                  <div className="card-footer">
                    <div className="media">
                      <img src={user} alt="user" />
                        <div className="media-body">
                          <h6>Phone : pshop.phoneNo</h6>
                          <h6>pshop.address</h6>
                          <h6>pshop.distance km</h6>
                          <Link to="/items">
                            <button type="button" className="boxbutton">
                                Items
                            </button>
                          </Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>   
            </div>
            
            <div className="cards">
              <div className="card pemCard card-has-bg click-col" style={{ backgroundImage:`url(${pshop3})`}} >
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h3>pshop.name</h3>
                    <div className="card-title mt-0 ">
                      <h5>pshop.electrecian</h5>
                    </div>                    
                      <h5 className="text">
                        <FontAwesomeIcon icon={faCity}/>
                        &nbsp;
                        pshop.city
                      </h5>
                  </div>
                  <div className="card-footer">
                    <div className="media">
                      <img src={user} alt="user" />
                        <div className="media-body">
                          <h6>Phone : pshop.phoneNo</h6>
                          <h6>pshop.address</h6>
                          <h6>pshop.distance km</h6>
                          <Link to="/items">
                            <button type="button" className="boxbutton">
                                Items
                            </button>
                          </Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>   
            </div>

          </div>

        <Footer />            
    </>
  )
}
