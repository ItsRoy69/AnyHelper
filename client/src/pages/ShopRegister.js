import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import shopregister from "../assets/registershop.png";

import {IoMdAddCircle} from "react-icons/io"
import { Link } from "react-router-dom";

import "../styles/ShopRegister.css";


const ShopRegister = () => {

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }


  const inputArr = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
  };

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };



  return (
    <>
      <Navbar />
      <div className="register_shop">
        <div className="register_shop_header">
          <div className="register_shop_left">
            <h1>Register your shop with us</h1>
            <h4>Join 30,000+ partners across India</h4>
            <div className="register_shop_inputs">
              <div className="register_shop_smallbox">
                <div className="register_shopkeep_name">
                  <input type="text" className="register_shopkeep_name_input" placeholder="Name" />
                </div>
                <div className="register_shop_mail">
                  <input type="text" className="register_shop_mail_input" placeholder="Mail ID" name="requiredField" />
                </div>
              </div>
              <div className="register_shop_smallbox">
                <div className="register_shop_type">
                  <input type="text" className="register_shop_type_input" placeholder="Shop type" name="requiredField" />
                </div>
                <div className="register_shop_name">
                  <input type="text" className="register_shop_name_input" placeholder="Shop name" name="requiredField" />
                </div>
              </div>            
                          
              <div className="register_shop_address">
                <input type="text" className="register_shop_address_input" placeholder="Shop address" name="requiredField" style={{width: "416px"}} />
              </div>
              <div className="register_shop_password">
                <input type="text" className="register_shop_password_input" placeholder="Password" name="requiredField" style={{width: "416px"}} />
              </div>
            </div>
          </div>
          <div className="register_shop_right">
            <img src={shopregister} alt="" className="register_shop_banner" />
          </div>
        </div> 

        <div className="register_shop_mid">
          <h4>List of items in your shop</h4>
          <div className="register_shop_midbox">
            <div className="register_shop_smallbox">              
              <div className="register_shop_items">      
                {arr.map((item, i) => {
                  return (
                    <input
                      onChange={handleChange}
                      value={item.value}
                      id={i}
                      type={item.type}
                      placeholder="Items"
                    />
                  );
                })}
              </div>
              <IoMdAddCircle className="register_shop_btn" size='30px' onClick={addInput}/> 
            </div>
          </div> 
          <div className="register_shop_buttons">
            <p className="shop_registration-paralogin">Already a member of this website ? 
              <Link to="/shoplogin" className="shop_registration-login">
              &nbsp;Login
              </Link>
            </p>         
            <Link to="sign-up">
              <button className="register_shop_button">Register</button>
            </Link>
          </div>
                   
          
        </div>       
      </div>

      

      <Footer />
    </>
  )
}

export default ShopRegister
