import React from 'react';

import "../styles/Cleaning.css";

import { BsArrowRight } from "react-icons/bs"

import cleaning1 from "../assets/cleaning1.png";
import cleaning2 from "../assets/cleaning2.png";
import cleaning3 from "../assets/cleaning3.png";
import cleaning4 from "../assets/cleaning4.png";
import cleaning5 from "../assets/cleaning5.png";
import cleaning6 from "../assets/cleaning6.png";

const Cleaning = ({ setModal }) => {


  return (
    <>
      <div className='backdrop' onClick={()=>setModal(false)}>
        <div className='cleaningcardbody'>
          <div className='headcleaningcard'>
            <h1>Cleaning at your tip</h1>
            <div className='cleaningcardpara'>
              <div className="cleaning_box">
                <img src={cleaning1} alt="" className="cleaning" />
                <p>Bathroom cleaning</p>
              </div>
              <div className="cleaning_box">
                <img src={cleaning2} alt="" className="cleaning" />
                <p>Kitchen cleaning</p>
              </div>
              <div className="cleaning_box">
                <img src={cleaning3} alt="" className="cleaning" />
                <p>Mini cleaning services</p>
              </div>
              <div className="cleaning_box">
                <img src={cleaning4} alt="" className="cleaning" />
                <p>Pest control</p>
              </div>
              <div className="cleaning_box">
                <img src={cleaning5} alt="" className="cleaning" />
                <p>Full home cleaning</p>
              </div>
              <div className="cleaning_box">
                <img src={cleaning6} alt="" className="cleaning" />
                <p>Disinfection</p>
              </div>
            </div>   
            <a className='servicesignup' href="/servicesignup">More <BsArrowRight /></a>
          </div>            
           
        </div>
      </div>

    </>
  )
}

export default Cleaning
