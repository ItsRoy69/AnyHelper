import React from 'react';

import "../styles/MenSalon.css";

import { BsArrowRight } from "react-icons/bs"

import mensalon1 from "../assets/mensalon1.png";
import mensalon2 from "../assets/mensalon2.png";
import mensalon3 from "../assets/mensalon3.png";
import mensalon4 from "../assets/mensalon4.png";
import womenservices4 from "../assets/womenservices4.png";
import mensalon6 from "../assets/mensalon6.png";

const MenSalon = ({ setModal }) => {


  return (
    <>
      <div className='backdrop' onClick={()=>setModal(false)}>
        <div className='mensaloncardbody'>
          <div className='headmensaloncard'>
            <h1>Men Salon at home</h1>
            <div className='mensaloncardpara'>
              <div className="mensalon_box">
                <img src={mensalon1} alt="" className="mensalon" />
                <p>Cut & Style</p>
              </div>
              <div className="mensalon_box">
                <img src={mensalon2} alt="" className="mensalon" />
                <p>Hair Colour</p>
              </div>
              <div className="mensalon_box">
                <img src={mensalon3} alt="" className="mensalon" />
                <p>Shave/Beard Grooming</p>
              </div>
              <div className="mensalon_box">
                <img src={mensalon4} alt="" className="mensalon" />
                <p>Face Care</p>
              </div>
              <div className="mensalon_box">
                <img src={womenservices4} alt="" className="mensalon" />
                <p>Pedicure</p>
              </div>
              <div className="mensalon_box">
                <img src={mensalon6} alt="" className="mensalon" />
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

export default MenSalon
