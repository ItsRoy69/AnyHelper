import React from 'react';

import "../styles/Shops.css";

import { BsArrowRight } from "react-icons/bs"

import shop1 from "../assets/shop1.png";
import shop2 from "../assets/shop2.png";
import shop3 from "../assets/shop3.png";

const Shops = ({ setModal }) => {


  return (
    <>
      <div className='backdrop' onClick={()=>setModal(false)}>
        <div className='shopcardbody'>
          <div className='headshopcard'>
            <h1>Nearby Shops</h1>
            <div className='shopcardpara'>
              <div className="shop_box">
                <img src={shop1} alt="" className="shop" />
                <p>Mechanical Shops</p>
              </div>
              <div className="shop_box">
                <img src={shop2} alt="" className="shop" />
                <p>Electrical Shops</p>
              </div>
              <div className="shop_box">
                <img src={shop3} alt="" className="shop" />
                <p>Plumbing Shops</p>
              </div>
            </div>   
            <a className='servicesignup' href="/shoplist">More <BsArrowRight /></a>
          </div>            
           
        </div>
      </div>

    </>
  )
}

export default Shops
