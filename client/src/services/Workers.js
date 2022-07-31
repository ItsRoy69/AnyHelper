import React from 'react';

import "../styles/Workers.css";

import { BsArrowRight } from "react-icons/bs"

import workers1 from "../assets/workers1.png";
import workers2 from "../assets/workers2.png";
import workers3 from "../assets/workers3.png";

const Workers = ({ setModal }) => {


  return (
    <>
      <div className='backdrop' onClick={()=>setModal(false)}>
        <div className='workerscardbody'>
          <div className='headworkerscard'>
            <h1>Nearby workers</h1>
            <div className='workerscardpara'>
              <div className="workers_box">
                <img src={workers1} alt="" className="workers" />
                <p>Mechanics</p>
              </div>
              <div className="workers_box">
                <img src={workers2} alt="" className="workers" />
                <p>Electricians</p>
              </div>
              <div className="workers_box">
                <img src={workers3} alt="" className="workers" />
                <p>Plumbers</p>
              </div>
            </div>   
            <a className='servicesignup' href="/servicesignup">More <BsArrowRight /></a>
          </div>            
           
        </div>
      </div>

    </>
  )
}

export default Workers
