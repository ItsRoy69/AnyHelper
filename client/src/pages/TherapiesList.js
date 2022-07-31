import React, { useState } from "react";

import "../styles/TherapiesList.css";
import background1 from "../assets/workerslist1.png";
import background2 from "../assets/workerslist2.png";
import background3 from "../assets/workerslist3.png";
import therapiesman from "../assets/workerman.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from "react-router-dom";
// import { getDistance } from "geolib";
// import { useSelector } from "react-redux";
import { RiStarFill } from "react-icons/ri";

const TherapiesList = ({ customer }) => {

  // const [check, setcheck] = useState(false);
  // const locations = useSelector((state) => state.location);
  // const [therapies, settherapies] = useState(locations);

  //   // -----------------------------------------DISTANCE CALCULATION------------------------------------------------
  //   locations.map(
  //     (location) =>
  //       (location.distance =
  //         getDistance(
  //           { latitude: location.latitude, longitude: location.longitude },
  //           { latitude: customer.latitude, longitude: customer.longitude }
  //         ) / 1000)
  //   );

  //   // ----------------------------------------SORTING-----------------------------------------------------
  //   function compareDistance(a, b) {
  //     if (a.distance < b.distance) {
  //       return -1;
  //     }
  //     if (a.distance > b.distance) {
  //       return 1;
  //     }
  //     return 0;
  //   }

  //   const sorttherapiesBydistance = () => {
  //     settherapies(therapies.sort(compareDistance));
  //   };


  return (
    <>
      <Navbar />
      {/* ------------------------------therapieslist----------------------------------- */}

      <div className="therapieslist_section">
        <div className="therapieslist_container">
          <div className="therapieslist_head">
            <h1>List of therapies you can checkout</h1>
            <div className="therapieslist_filter">
              <div
                type="button"
                className="btn btn-primary distclass"
                // onClick={() => {
                //   sorttherapiesBydistance();
                //   setcheck(!check);
                // }}
              >
                Sort By Distance
              </div>
              <select
                className="btn btn-secondary dropdown-toggle"
                name="Occupation"
                id="selectOccupation"
                // onChange={(e) => {
                //   if (e.target.value !== "All") {
                //     settherapies(
                //       locations.filter(
                //         (therapies) => therapies.occupation === e.target.value
                //       )
                //     );
                //   } else {
                //     settherapies(locations);
                //   }
                // }}
              >
                <option value="All">All</option>
                <option value="Plumbing therapies">Plumbing therapies</option>
                <option value="Electric therapies">Electric therapies</option>
                <option value="Mechanic therapies">Mechanic therapies</option>
              </select>
            </div>            
          </div> 
                 
          <div className="therapieslist_lists">
            <div className="row">
              
              <div className="col-lg-3 mb-3">
                <div className="therapieslist_card">
                  <div className="card therapiesCard text-white card-has-bg click-col"
                    style={{  backgroundImage:`url(${background1})` }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body">
                        <h3>therapies.name</h3>
                        <h5>therapies.occupation</h5>
                        <h5>therapies.city</h5>
                      </div>
                      <div className="card-footer">
                        <div className="media">
                          <img className="mr-3 rounded-circle" src={therapiesman} style={{ maxWidth: "50px" }} />
                          <div className="media-body">
                            <h6>Phone : therapies.phoneNo</h6>
                            <h6>therapies.address</h6>
                            <h5>therapies.distance km</h5>
                            <h5>5<RiStarFill /></h5>
                            <button className="therapieslist_btn"
                              // onClick={() => {
                              //   fetch(
                              //     `http://localhost:5000/send-text?recipient=${num}&customer=${customer.userName}&lat=${customer.latitude}&lon=${customer.longitude}`
                              //   ).catch((err) => console.error(err));
                              //   alert(
                              //     `location shared to ${therapies.occupation} ${therapies.name}`
                              //   );
                              // }}
                            >Send location to therapies.name
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>


            </div>            
          </div>
        </div>        
      </div>
      
      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default TherapiesList

