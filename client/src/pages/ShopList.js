import React, { useState } from "react";

import "../styles/ShopList.css";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import shoplist from "../assets/blogs.jpg";

import { Link } from "react-router-dom";
// import { getDistance } from "geolib";
// import { useSelector } from "react-redux";

const ShopList = ({ customer }) => {

  // const [check, setcheck] = useState(false);
  // const locations = useSelector((state) => state.location);
  // const [workers, setWorkers] = useState(locations);

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

  //   const sortWorkersBydistance = () => {
  //     setWorkers(workers.sort(compareDistance));
  //   };


  return (
    <>
      <Navbar />
      {/* ------------------------------ShopList----------------------------------- */}

      <div className="shoplist_section">
        <div className="shoplist_container">
          <div className="shoplist_head">
            <h1>List of shops you can checkout</h1>
            <div className="shoplist_filter">
              <div
                type="button"
                className="btn btn-primary distclass"
                // onClick={() => {
                //   sortWorkersBydistance();
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
                //     setWorkers(
                //       locations.filter(
                //         (worker) => worker.occupation === e.target.value
                //       )
                //     );
                //   } else {
                //     setWorkers(locations);
                //   }
                // }}
              >
                <option value="All">All</option>
                <option value="Plumbing Shop">Plumbing Shop</option>
                <option value="Electric Shop">Electric Shop</option>
                <option value="Mechanic Shop">Mechanic Shop</option>
              </select>
            </div>            
          </div> 
                 
          <div className="shoplist_lists">
            <div className="row">

              <div className="col-lg-3 mb-3">
                <div className="shoplist_card">
                  <img src={shoplist} alt="" className="shoplist_image" />
                  <div className="shoplist_carddetails">
                    <h1 className="shoplist_para">
                      Lorem Ipsum Shop
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h5>City : Lorem Ipsum city</h5>
                    <h5>Address : Lorem Ipsum is simply dummy Address</h5>
                    <h5>Owner : Lorem Owner</h5>
                    <h5>Phone : 9876543210</h5>
                    <h5>Mail : Lorem@gmail.com</h5>
                    <Link to="/items">
                      <button className="signup_service_button">Items</button>
                    </Link>
                  </div>                  
                </div>
              </div>

              <div className="col-lg-3 mb-3">
                <div className="shoplist_card">
                  <img src={shoplist} alt="" className="shoplist_image" />
                  <div className="shoplist_carddetails">
                    <h1 className="shoplist_para">
                      Lorem Ipsum Shop
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h5>City : Lorem Ipsum city</h5>
                    <h5>Address : Lorem Ipsum is simply dummy Address</h5>
                    <h5>Owner : Lorem Owner</h5>
                    <h5>Phone : 9876543210</h5>
                    <h5>Mail : Lorem@gmail.com</h5>
                    <Link to="/items">
                      <button className="signup_service_button">Items</button>
                    </Link>
                  </div>                  
                </div>
              </div>


              <div className="col-lg-3 mb-3">
                <div className="shoplist_card">
                  <img src={shoplist} alt="" className="shoplist_image" />
                  <div className="shoplist_carddetails">
                    <h1 className="shoplist_para">
                      Lorem Ipsum Shop
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h5>City : Lorem Ipsum city</h5>
                    <h5>Address : Lorem Ipsum is simply dummy Address</h5>
                    <h5>Owner : Lorem Owner</h5>
                    <h5>Phone : 9876543210</h5>
                    <h5>Mail : Lorem@gmail.com</h5>
                    <Link to="/items">
                      <button className="signup_service_button">Items</button>
                    </Link>
                  </div>                  
                </div>
              </div>

              <div className="col-lg-3 mb-3">
                <div className="shoplist_card">
                  <img src={shoplist} alt="" className="shoplist_image" />
                  <div className="shoplist_carddetails">
                    <h1 className="shoplist_para">
                      Lorem Ipsum Shop
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h5>City : Lorem Ipsum city</h5>
                    <h5>Address : Lorem Ipsum is simply dummy Address</h5>
                    <h5>Owner : Lorem Owner</h5>
                    <h5>Phone : 9876543210</h5>
                    <h5>Mail : Lorem@gmail.com</h5>
                    <Link to="/items">
                      <button className="signup_service_button">Items</button>
                    </Link>
                  </div>                  
                </div>
              </div>

              <div className="col-lg-3 mb-3">
                <div className="shoplist_card">
                  <img src={shoplist} alt="" className="shoplist_image" />
                  <div className="shoplist_carddetails">
                    <h1 className="shoplist_para">
                      Lorem Ipsum Shop
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h5>City : Lorem Ipsum city</h5>
                    <h5>Address : Lorem Ipsum is simply dummy Address</h5>
                    <h5>Owner : Lorem Owner</h5>
                    <h5>Phone : 9876543210</h5>
                    <h5>Mail : Lorem@gmail.com</h5>
                    <Link to="/items">
                      <button className="signup_service_button">Items</button>
                    </Link>
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

export default ShopList

