import React, { useState } from "react";

import "../styles/WomenServiceList.css";
import background1 from "../assets/workerslist1.png";
import background2 from "../assets/workerslist2.png";
import background3 from "../assets/workerslist3.png";
import workerman from "../assets/workerman.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from "react-router-dom";
// import { getDistance } from "geolib";
// import { useSelector } from "react-redux";
import { RiStarFill } from "react-icons/ri";

const WomenserviceList = ({ customer }) => {

  // const [check, setcheck] = useState(false);
  // const locations = useSelector((state) => state.location);
  // const [womenservice, setwomenservice] = useState(locations);

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

  //   const sortwomenserviceBydistance = () => {
  //     setwomenservice(womenservice.sort(compareDistance));
  //   };


  return (
    <>
      <Navbar />
      {/* ------------------------------womenservicelist----------------------------------- */}

      <div className="womenservicelist_section">
        <div className="womenservicelist_container">
          <div className="womenservicelist_head">
            <h1>List of womenservice you can checkout</h1>
            <div className="womenservicelist_filter">
              <div
                type="button"
                className="btn btn-primary distclass"
                // onClick={() => {
                //   sortwomenserviceBydistance();
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
                //     setwomenservice(
                //       locations.filter(
                //         (worker) => worker.occupation === e.target.value
                //       )
                //     );
                //   } else {
                //     setwomenservice(locations);
                //   }
                // }}
              >
                <option value="All">All</option>
                <option value="Plumbing womenservice">Plumbing womenservice</option>
                <option value="Electric womenservice">Electric womenservice</option>
                <option value="Mechanic womenservice">Mechanic womenservice</option>
              </select>
            </div>            
          </div> 
                 
          <div className="womenservicelist_lists">
            <div className="row">
              
              <div className="col-lg-3 mb-3">
                <div className="womenservicelist_card">
                  <div className="card womenserviceCard text-white card-has-bg click-col"
                    style={{  backgroundImage:`url(${background1})` }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body">
                        <h3>worker.name</h3>
                        <h5>worker.occupation</h5>
                        <h5>worker.city</h5>
                      </div>
                      <div className="card-footer">
                        <div className="media">
                          <img className="mr-3 rounded-circle" src={workerman} style={{ maxWidth: "50px" }} />
                          <div className="media-body">
                            <h6>Phone : worker.phoneNo</h6>
                            <h6>worker.address</h6>
                            <h5>worker.distance km</h5>
                            <h5>5<RiStarFill /></h5>
                            <button className="womenservicelist_btn"
                              // onClick={() => {
                              //   fetch(
                              //     `http://localhost:5000/send-text?recipient=${num}&customer=${customer.userName}&lat=${customer.latitude}&lon=${customer.longitude}`
                              //   ).catch((err) => console.error(err));
                              //   alert(
                              //     `location shared to ${worker.occupation} ${worker.name}`
                              //   );
                              // }}
                            >Send location to worker.name
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

export default WomenserviceList

