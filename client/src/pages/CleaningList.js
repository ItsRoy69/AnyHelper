import React, { useState } from "react";

import "../styles/CleaningList.css";
import background1 from "../assets/workerslist1.png";
import background2 from "../assets/workerslist2.png";
import background3 from "../assets/workerslist3.png";
import cleaningman from "../assets/workerman.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from "react-router-dom";
// import { getDistance } from "geolib";
// import { useSelector } from "react-redux";
import { RiStarFill } from "react-icons/ri";

const CleaningList = ({ customer }) => {

  // const [check, setcheck] = useState(false);
  // const locations = useSelector((state) => state.location);
  // const [cleaning, setcleaning] = useState(locations);

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

  //   const sortcleaningBydistance = () => {
  //     setcleaning(cleaning.sort(compareDistance));
  //   };


  return (
    <>
      <Navbar />
      {/* ------------------------------cleaninglist----------------------------------- */}

      <div className="cleaninglist_section">
        <div className="cleaninglist_container">
          <div className="cleaninglist_head">
            <h1>List of cleaning you can checkout</h1>
            <div className="cleaninglist_filter">
              <div
                type="button"
                className="btn btn-primary distclass"
                // onClick={() => {
                //   sortcleaningBydistance();
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
                //     setcleaning(
                //       locations.filter(
                //         (cleaning) => cleaning.occupation === e.target.value
                //       )
                //     );
                //   } else {
                //     setcleaning(locations);
                //   }
                // }}
              >
                <option value="All">All</option>
                <option value="Plumbing cleaning">Plumbing cleaning</option>
                <option value="Electric cleaning">Electric cleaning</option>
                <option value="Mechanic cleaning">Mechanic cleaning</option>
              </select>
            </div>            
          </div> 
                 
          <div className="cleaninglist_lists">
            <div className="row">
              
              <div className="col-lg-3 mb-3">
                <div className="cleaninglist_card">
                  <div className="card cleaningCard text-white card-has-bg click-col"
                    style={{  backgroundImage:`url(${background1})` }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body">
                        <h3>cleaning.name</h3>
                        <h5>cleaning.occupation</h5>
                        <h5>cleaning.city</h5>
                      </div>
                      <div className="card-footer">
                        <div className="media">
                          <img className="mr-3 rounded-circle" src={cleaningman} style={{ maxWidth: "50px" }} />
                          <div className="media-body">
                            <h6>Phone : cleaning.phoneNo</h6>
                            <h6>cleaning.address</h6>
                            <h5>cleaning.distance km</h5>
                            <h5>5<RiStarFill /></h5>
                            <button className="cleaninglist_btn"
                              // onClick={() => {
                              //   fetch(
                              //     `http://localhost:5000/send-text?recipient=${num}&customer=${customer.userName}&lat=${customer.latitude}&lon=${customer.longitude}`
                              //   ).catch((err) => console.error(err));
                              //   alert(
                              //     `location shared to ${cleaning.occupation} ${cleaning.name}`
                              //   );
                              // }}
                            >Send location to cleaning.name
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

export default CleaningList

