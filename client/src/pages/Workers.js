import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";

import mshop1 from "../assets/eshop1.jpg";
import mshop2 from "../assets/eshop2.jpg";
import mshop3 from "../assets/eshop3.jpg";
import user from "../assets/user.webp";

import "../styles/Workers.css";

export default function Workers() {
  return (
    <>
      <Navbar />
      <div className="container eleccontainer">
        <div className="banner">
          <h1>Find workers</h1>
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
          <div class="card_image">
            {" "}
            <img src={mshop1} alt="totallyanimage" />{" "}
          </div>
          <div class="card_title">
            <p className="elec_name">Jyotirmoy Roy</p>
            <p className="text elec_city">
              <FontAwesomeIcon icon={faCity} />
              &nbsp; Kolkata
            </p>

            <div className="elec_details">
              <p className="elec_add">Mahestala, Batanagar</p>
              <p className="elec_ra">Cover 50km</p>
              <Link to="/message">
                <button type="button" className="boxbutton">
  Message
</button>
              </Link>
            </div>
          </div>
        </div>

        <div class="card 2 eleccards">
          <div class="card_image">
            <img src={mshop2} alt="totallyanimage" />
          </div>
          <div class="card_title">
            <p className="elec_name">Jyotirmoy Roy</p>
            <p className="text elec_city">
              <FontAwesomeIcon icon={faCity} />
              &nbsp; Kolkata
            </p>

            <div className="elec_details">
              <p className="elec_add">Mahestala, Batanagar</p>
              <p className="elec_ra">Cover 50km</p>
              <Link to="/message">
                <button type="button" className="boxbutton">
                  Message
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div class="card 3 eleccards">
          <div class="card_image">
            <img src={mshop3} alt="totallyanimage" />
          </div>
          <div class="card_title">
            <p className="elec_name">Jyotirmoy Roy</p>
            <p className="text elec_city">
              <FontAwesomeIcon icon={faCity} />
              &nbsp; Kolkata
            </p>

            <div className="elec_details">
              <p className="elec_add">Mahestala, Batanagar</p>
              <p className="elec_ra">Cover 50km</p>
              <Link to="/message">
                <button type="button" className="boxbutton">
                  Message
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div class="card 4 eleccards">
          <div class="card_image">
            <img src={mshop3} alt="totallyanimage" />
          </div>
          <div class="card_title">
            <p className="elec_name">Jyotirmoy Roy</p>
            <p className="text elec_city">
              <FontAwesomeIcon icon={faCity} />
              &nbsp; Kolkata
            </p>

            <div className="elec_details">
              <p className="elec_add">Mahestala, Batanagar</p>
              <p className="elec_ra">Cover 50km</p>
              <Link to="/message">
                <button type="button" className="boxbutton">
                  Message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
