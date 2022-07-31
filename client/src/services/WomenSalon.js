import React from 'react';

import "../styles/WomenSalon.css";

import { BsArrowRight } from "react-icons/bs"

import womensalon1 from "../assets/womensalon1.png";
import womensalon2 from "../assets/womensalon2.png";
import womensalon3 from "../assets/womensalon3.png";
import womensalon4 from "../assets/womensalon4.png";
import womensalon5 from "../assets/womensalon5.png";
import womensalon6 from "../assets/womensalon6.png";

const WomenSalon = ({ setModal }) => {


  return (
    <>
      <div className='backdrop' onClick={()=>setModal(false)}>
        <div className='womensaloncardbody'>
          <div className='headwomensaloncard'>
            <h1>Women Salon at home</h1>
            <div className='womensaloncardpara'>
              <div className="womensalon_box">
                <img src={womensalon1} alt="" className="womensalon" />
                <p>Cut & Style</p>
              </div>
              <div className="womensalon_box">
                <img src={womensalon2} alt="" className="womensalon" />
                <p>Blowdry</p>
              </div>
              <div className="womensalon_box">
                <img src={womensalon3} alt="" className="womensalon" />
                <p>Anti-Freez Keratin</p>
              </div>
              <div className="womensalon_box">
                <img src={womensalon4} alt="" className="womensalon" />
                <p>Hair Care</p>
              </div>
              <div className="womensalon_box">
                <img src={womensalon5} alt="" className="womensalon" />
                <p>Hair Trim</p>
              </div>
              <div className="womensalon_box">
                <img src={womensalon6} alt="" className="womensalon" />
                <p>Hair Colouring</p>
              </div>
            </div>   
            <a className='servicesignup' href="/servicesignup">More <BsArrowRight /></a>
          </div>            
           
        </div>
      </div>

    </>
  )
}

export default WomenSalon
