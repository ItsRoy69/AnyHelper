import React, { useState } from "react";

import "../styles/WomenSalonList.css";
import background1 from "../assets/workerslist1.png";
import background2 from "../assets/workerslist2.png";
import background3 from "../assets/workerslist3.png";
import womensalonman from "../assets/workerman.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from "react-router-dom";
// import { getDistance } from "geolib";
// import { useSelector } from "react-redux";
import { RiStarFill } from "react-icons/ri";

const WomenSalonList = ({ customer }) => {

  // const [check, setcheck] = useState(false);
  // const locations = useSelector((state) => state.location);
  // const [womensalon, setwomensalon] = useState(locations);

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

  //   const sortwomensalonBydistance = () => {
  //     setwomensalon(womensalon.sort(compareDistance));
  //   };


  return (
    <>
      <Navbar />
      {/* ------------------------------womensalonlist----------------------------------- */}

      <div className="womensalonlist_section">
        <div className="womensalonlist_container">
          <div className="womensalonlist_head">
            <h1>List of womensalon you can checkout</h1>
            <div className="womensalonlist_filter">
              <div
                type="button"
                className="btn btn-primary distclass"
                // onClick={() => {
                //   sortwomensalonBydistance();
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
                //     setwomensalon(
                //       locations.filter(
                //         (womensalon) => womensalon.occupation === e.target.value
                //       )
                //     );
                //   } else {
                //     setwomensalon(locations);
                //   }
                // }}
              >
                <option value="All">All</option>
                <option value="Plumbing womensalon">Plumbing womensalon</option>
                <option value="Electric womensalon">Electric womensalon</option>
                <option value="Mechanic womensalon">Mechanic womensalon</option>
              </select>
            </div>            
          </div> 
                 
          <div className="womensalonlist_lists">
            <div className="row">
              
              <div className="col-lg-3 mb-3">
                <div className="womensalonlist_card">
                  <div className="card womensalonCard text-white card-has-bg click-col"
                    style={{  backgroundImage:`url(${background1})` }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body">
                        <h3>womensalon.name</h3>
                        <h5>womensalon.occupation</h5>
                        <h5>womensalon.city</h5>
                      </div>
                      <div className="card-footer">
                        <div className="media">
                          <img className="mr-3 rounded-circle" src={womensalonman} style={{ maxWidth: "50px" }} />
                          <div className="media-body">
                            <h6>Phone : womensalon.phoneNo</h6>
                            <h6>womensalon.address</h6>
                            <h5>womensalon.distance km</h5>
                            <h5>5<RiStarFill /></h5>
                            <button className="womensalonlist_btn"
                              // onClick={() => {
                              //   fetch(
                              //     `http://localhost:5000/send-text?recipient=${num}&customer=${customer.userName}&lat=${customer.latitude}&lon=${customer.longitude}`
                              //   ).catch((err) => console.error(err));
                              //   alert(
                              //     `location shared to ${womensalon.occupation} ${womensalon.name}`
                              //   );
                              // }}
                            >Send location to womensalon.name
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

export default WomenSalonList

