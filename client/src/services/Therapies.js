import React from 'react';

import "../styles/Therapies.css";

import { BsArrowRight } from "react-icons/bs"

import therapies1 from "../assets/therapies1.png";
import therapies2 from "../assets/therapies2.png";
import therapies3 from "../assets/therapies3.png";
import therapies4 from "../assets/therapies4.png";
import therapies5 from "../assets/therapies5.png";
import therapies6 from "../assets/therapies6.png";

const Therapies = ({ setModal }) => {


  return (
    <>
      <div className='backdrop' onClick={()=>setModal(false)}>
        <div className='cleaningcardbody'>
          <div className='headcleaningcard'>
            <h1>Therapies at home</h1>
            <div className='cleaningcardpara'>
              <div className="cleaning_box">
                <img src={therapies1} alt="" className="cleaning" />
                <p>Work Distress</p>
              </div>
              <div className="cleaning_box">
                <img src={therapies2} alt="" className="cleaning" />
                <p>Pain Relief</p>
              </div>
              <div className="cleaning_box">
                <img src={therapies3} alt="" className="cleaning" />
                <p>Stress Relief</p>
              </div>
              <div className="cleaning_box">
                <img src={therapies4} alt="" className="cleaning" />
                <p>Therapy</p>
              </div>
              <div className="cleaning_box">
                <img src={therapies5} alt="" className="cleaning" />
                <p>Spa</p>
              </div>
              <div className="cleaning_box">
                <img src={therapies6} alt="" className="cleaning" />
                <p>Beauty Retreat</p>
              </div>
            </div>   
            <a className='servicesignup' href="/servicesignup">More <BsArrowRight /></a>
          </div>            
           
        </div>
      </div>

    </>
  )
}

export default Therapies
