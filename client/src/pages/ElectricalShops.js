import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import eshop1 from "../assets/eshop1.jpg";
import eshop2 from "../assets/eshop2.jpg";
import eshop3 from "../assets/eshop3.jpg";

import "../styles/ElectricalShops.css";

export default function ElectricalShops() {
  return (
    <>
      <Navbar />
      <div className="container eleccontainer">
        <div className="banner">
          <h1>Electrical Shops</h1>
        </div>
        <button type="button" className="button">
          Sort By Distance
        </button>
        <select
          className="button dropdown-toggle"
          name="Occupation"
          id="selectOccupation"
          style={{ marginLeft: "10px" }}
        >
          <option value="All">All</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Mechanic">Mechanic</option>
        </select>
      </div>

      <div class="container cards-list">

        <div class="card 1 eleccards">
          <div class="card_image"> <img src={eshop1} alt="totallyanimage" /> </div>
          <div class="card_title">
            <p className="elec_name">Jyotirmoy Roy</p>
            <p className="text elec_city">
              <FontAwesomeIcon icon={faCity} />
              &nbsp; Kolkata
            </p>
            <div className="elec_details">
              <p className="elec_ph">(+91) 903252-3499</p>
              <p className="elec_add">Mahestala, Batanagar</p>
              <p className="elec_ra">Cover 50km</p>
              <Link to="/items">
                <button type="button" className="boxbutton">
                  Items
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div class="card 2 eleccards">
          <div class="card_image">
            <img src={eshop2} alt="totallyanimage" />
          </div>
          <div class="card_title">
            <p className="elec_name">Jyotirmoy Roy</p>
            <p className="text elec_city">
              <FontAwesomeIcon icon={faCity} />
              &nbsp; Kolkata
            </p>
            <div className="elec_details">
              <p className="elec_ph">(+91) 903252-3499</p>
              <p className="elec_add">Mahestala, Batanagar</p>
              <p className="elec_ra">Cover 50km</p>
              <Link to="/items">
                <button type="button" className="boxbutton">
                  Items
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div class="card 3 eleccards">
          <div class="card_image">
            <img src={eshop3} alt="totallyanimage" />
          </div>
          <div class="card_title">
            <p className="elec_name">Jyotirmoy Roy</p>
            <p className="text elec_city">
              <FontAwesomeIcon icon={faCity} />
              &nbsp; Kolkata
            </p>
            <div className="elec_details">
              <p className="elec_ph">(+91) 903252-3499</p>
              <p className="elec_add">Mahestala, Batanagar</p>
              <p className="elec_ra">Cover 50km</p>
              <Link to="/items">
                <button type="button" className="boxbutton">
                  Items
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div class="card 4 eleccards">
          <div class="card_image">
            <img src={eshop3} alt="totallyanimage" />
          </div>
          <div class="card_title">
            <p className="elec_name">Jyotirmoy Roy</p>
            <p className="text elec_city">
              <FontAwesomeIcon icon={faCity} />
              &nbsp; Kolkata
            </p>
            <div className="elec_details">
              <p className="elec_ph">(+91) 903252-3499</p>
              <p className="elec_add">Mahestala, Batanagar</p>
              <p className="elec_ra">Cover 50km</p>
              <Link to="/items">
                <button type="button" className="boxbutton">
                  Items
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
