import React from 'react';

import "../styles/WomenServices.css";

import { BsArrowRight } from "react-icons/bs"

import womenservices1 from "../assets/womenservices1.png";
import womenservices2 from "../assets/womenservices2.png";
import womenservices3 from "../assets/womenservices3.png";
import womenservices4 from "../assets/womenservices4.png";
import womenservices5 from "../assets/womenservices5.png";
import womenservices6 from "../assets/womenservices6.png";

const WomenServices = ({ setModal }) => {


  return (
    <>
      <div className='backdrop' onClick={()=>setModal(false)}>
        <div className='womenservicescardbody'>
          <div className='headwomenservicescard'>
            <h1>Services for women at home</h1>
            <div className='womenservicescardpara'>
              <div className="womenservices_box">
                <img src={womenservices1} alt="" className="womenservices" />
                <p>Waxing</p>
              </div>
              <div className="womenservices_box">
                <img src={womenservices2} alt="" className="womenservices" />
                <p>Facial</p>
              </div>
              <div className="womenservices_box">
                <img src={womenservices3} alt="" className="womenservices" />
                <p>Manicure</p>
              </div>
              <div className="womenservices_box">
                <img src={womenservices4} alt="" className="womenservices" />
                <p>Pedicure</p>
              </div>
              <div className="womenservices_box">
                <img src={womenservices5} alt="" className="womenservices" />
                <p>Threading</p>
              </div>
              <div className="womenservices_box">
                <img src={womenservices6} alt="" className="womenservices" />
                <p>Body Massage</p>
              </div>
            </div>   
            <a className='servicesignup' href="/servicesignup">More <BsArrowRight /></a>
          </div>            
           
        </div>
      </div>

    </>
  )
}

export default WomenServices
