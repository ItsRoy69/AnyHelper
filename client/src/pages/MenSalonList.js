import React, { useState } from "react";

import "../styles/MenSalonList.css";
import background1 from "../assets/workerslist1.png";
import background2 from "../assets/workerslist2.png";
import background3 from "../assets/workerslist3.png";
import mensalonman from "../assets/workerman.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from "react-router-dom";
// import { getDistance } from "geolib";
// import { useSelector } from "react-redux";
import { RiStarFill } from "react-icons/ri";

const MenSalonList = ({ customer }) => {

  // const [check, setcheck] = useState(false);
  // const locations = useSelector((state) => state.location);
  // const [mensalon, setmensalon] = useState(locations);

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

  //   const sortmensalonBydistance = () => {
  //     setmensalon(mensalon.sort(compareDistance));
  //   };


  return (
    <>
      <Navbar />
      {/* ------------------------------mensalonlist----------------------------------- */}

      <div className="mensalonlist_section">
        <div className="mensalonlist_container">
          <div className="mensalonlist_head">
            <h1>List of mensalon you can checkout</h1>
            <div className="mensalonlist_filter">
              <div
                type="button"
                className="btn btn-primary distclass"
                // onClick={() => {
                //   sortmensalonBydistance();
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
                //     setmensalon(
                //       locations.filter(
                //         (mensalon) => mensalon.occupation === e.target.value
                //       )
                //     );
                //   } else {
                //     setmensalon(locations);
                //   }
                // }}
              >
                <option value="All">All</option>
                <option value="Plumbing mensalon">Plumbing mensalon</option>
                <option value="Electric mensalon">Electric mensalon</option>
                <option value="Mechanic mensalon">Mechanic mensalon</option>
              </select>
            </div>            
          </div> 
                 
          <div className="mensalonlist_lists">
            <div className="row">
              
              <div className="col-lg-3 mb-3">
                <div className="mensalonlist_card">
                  <div className="card mensalonCard text-white card-has-bg click-col"
                    style={{  backgroundImage:`url(${background1})` }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body">
                        <h3>mensalon.name</h3>
                        <h5>mensalon.occupation</h5>
                        <h5>mensalon.city</h5>
                      </div>
                      <div className="card-footer">
                        <div className="media">
                          <img className="mr-3 rounded-circle" src={mensalonman} style={{ maxWidth: "50px" }} />
                          <div className="media-body">
                            <h6>Phone : mensalon.phoneNo</h6>
                            <h6>mensalon.address</h6>
                            <h5>mensalon.distance km</h5>
                            <h5>5<RiStarFill /></h5>
                            <button className="mensalonlist_btn"
                              // onClick={() => {
                              //   fetch(
                              //     `http://localhost:5000/send-text?recipient=${num}&customer=${customer.userName}&lat=${customer.latitude}&lon=${customer.longitude}`
                              //   ).catch((err) => console.error(err));
                              //   alert(
                              //     `location shared to ${mensalon.occupation} ${mensalon.name}`
                              //   );
                              // }}
                            >Send location to mensalon.name
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

export default MenSalonList

