import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Items.css";

import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";

import items1 from "../assets/items1.png";
import items2 from "../assets/items2.png";
import items3 from "../assets/items3.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Items = () => {
  return (
    <>
    
      <Navbar />
        <div className="Items-container-header">
          <h1>shop.Items</h1>
        </div>
        <div className="containers-box">
          <div className="Items-container-body">
            <div className="Items-container-body-boxes">

              <div className="Items-container-body-box">
                <div className="Items-container-body-box-image">
                  <img src={items1} alt="items1" />
                </div>  
                <div className="Items-container-body-box-text">
                  <h2>PHILIPS Base B22 LED Bulb</h2>
                  <p>2.7 watt led bulb</p>
                  <h3>Rs.190</h3>
                </div>
                <div className="Items-container-body-box-button">
                  <Link to="/workerJoin">
                    <button className="bton">
                      <BsFillCartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      />                  
                      Add to cart
                    </button>
                  </Link>
                  <Link to="/workersignin">
                    <button className="bton"
                    >
                      <BsFillHeartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      /> 
                      Wishlist
                    </button>
                  </Link>
                </div>
              </div> 
              
              <div className="Items-container-body-box">
                <div className="Items-container-body-box-image">
                  <img src={items3} alt="items3" />
                </div>  
                <div className="Items-container-body-box-text">
                  <h2>PHILIPS Base B22 LED Bulb</h2>
                  <p>2.7 watt led bulb</p>
                  <h3>Rs.190</h3>
                </div>
                <div className="Items-container-body-box-button">
                  <Link to="/workerJoin">
                    <button className="bton">
                      <BsFillCartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      />                  
                      Add to cart
                    </button>
                  </Link>
                  <Link to="/workersignin">
                    <button className="bton"
                    >
                      <BsFillHeartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      /> 
                      Wishlist
                    </button>
                  </Link>
                </div>
              </div> 

              <div className="Items-container-body-box">
                <div className="Items-container-body-box-image">
                  <img src={items1} alt="items1" />
                </div>  
                <div className="Items-container-body-box-text">
                  <h2>PHILIPS Base B22 LED Bulb</h2>
                  <p>2.7 watt led bulb</p>
                  <h3>Rs.190</h3>
                </div>
                <div className="Items-container-body-box-button">
                  <Link to="/workerJoin">
                    <button className="bton">
                      <BsFillCartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      />                  
                      Add to cart
                    </button>
                  </Link>
                  <Link to="/workersignin">
                    <button className="bton"
                    >
                      <BsFillHeartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      /> 
                      Wishlist
                    </button>
                  </Link>
                </div>
              </div>

              <div className="Items-container-body-box">
                <div className="Items-container-body-box-image">
                  <img src={items2} alt="items1" />
                </div>  
                <div className="Items-container-body-box-text">
                  <h2>PHILIPS Base B22 LED Bulb</h2>
                  <p>2.7 watt led bulb</p>
                  <h3>Rs.190</h3>
                </div>
                <div className="Items-container-body-box-button">
                  <Link to="/workerJoin">
                    <button className="bton">
                      <BsFillCartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      />                  
                      Add to cart
                    </button>
                  </Link>
                  <Link to="/workersignin">
                    <button className="bton"
                    >
                      <BsFillHeartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      /> 
                      Wishlist
                    </button>
                  </Link>
                </div>
              </div>

              <div className="Items-container-body-box">
                <div className="Items-container-body-box-image">
                  <img src={items1} alt="items1" />
                </div>  
                <div className="Items-container-body-box-text">
                  <h2>PHILIPS Base B22 LED Bulb</h2>
                  <p>2.7 watt led bulb</p>
                  <h3>Rs.190</h3>
                </div>
                <div className="Items-container-body-box-button">
                  <Link to="/workerJoin">
                    <button className="bton">
                      <BsFillCartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      />                  
                      Add to cart
                    </button>
                  </Link>
                  <Link to="/workersignin">
                    <button className="bton"
                    >
                      <BsFillHeartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      /> 
                      Wishlist
                    </button>
                  </Link>
                </div>
              </div>

              <div className="Items-container-body-box">
                <div className="Items-container-body-box-image">
                  <img src={items1} alt="items1" />
                </div>  
                <div className="Items-container-body-box-text">
                  <h2>PHILIPS Base B22 LED Bulb</h2>
                  <p>2.7 watt led bulb</p>
                  <h3>Rs.190</h3>
                </div>
                <div className="Items-container-body-box-button">
                  <Link to="/workerJoin">
                    <button className="bton">
                      <BsFillCartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      />                  
                      Add to cart
                    </button>
                  </Link>
                  <Link to="/workersignin">
                    <button className="bton"
                    >
                      <BsFillHeartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      /> 
                      Wishlist
                    </button>
                  </Link>
                </div>
              </div>


              <div className="Items-container-body-box">
                <div className="Items-container-body-box-image">
                  <img src={items1} alt="items1" />
                </div>  
                <div className="Items-container-body-box-text">
                  <h2>PHILIPS Base B22 LED Bulb</h2>
                  <p>2.7 watt led bulb</p>
                  <h3>Rs.190</h3>
                </div>
                <div className="Items-container-body-box-button">
                  <Link to="/workerJoin">
                    <button className="bton">
                      <BsFillCartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      />                  
                      Add to cart
                    </button>
                  </Link>
                  <Link to="/workersignin">
                    <button className="bton"
                    >
                      <BsFillHeartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      /> 
                      Wishlist
                    </button>
                  </Link>
                </div>
              </div>


              <div className="Items-container-body-box">
                <div className="Items-container-body-box-image">
                  <img src={items1} alt="items1" />
                </div>  
                <div className="Items-container-body-box-text">
                  <h2>PHILIPS Base B22 LED Bulb</h2>
                  <p>2.7 watt led bulb</p>
                  <h3>Rs.190</h3>
                </div>
                <div className="Items-container-body-box-button">
                  <Link to="/workerJoin">
                    <button className="bton">
                      <BsFillCartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      />                  
                      Add to cart
                    </button>
                  </Link>
                  <Link to="/workersignin">
                    <button className="bton"
                    >
                      <BsFillHeartFill
                        size={20}
                        style={{ fill: "#ffff" , marginRight: "5px" }}
                      /> 
                      Wishlist
                    </button>
                  </Link>
                </div>
              </div>
              
            </div>  
          </div>
        </div>
      
      <Footer />
    </>
  )
}

export default Items
