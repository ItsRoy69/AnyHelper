import React from 'react'

import "../styles/ShopList.css";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import shoplist from "../assets/blogs.jpg";

import { Link } from "react-router-dom";

const ShopList = () => {
  return (
    <>
      <Navbar />
      {/* ------------------------------ShopList----------------------------------- */}

      <div className="shoplist_section">
        <div className="shoplist_container">
          <div className="shoplist_head">
            <h1>List of shops you can checkout</h1>
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

