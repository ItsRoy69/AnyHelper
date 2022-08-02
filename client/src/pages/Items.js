import React from 'react';
import "../styles/Items.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import items from "../assets/blogs.jpg";

const Items = () => {
  return (
    <>
      <Navbar />
      <div className="items">
        <h1>List of Plumbing Items </h1>
        <div className="items_list">
            <div className="row">
                <div className="col-lg-2 mb-2">
                    <div className="items_card">
                        <img src={items} alt="" className="items_image" />
                        <div className="items_carddetails">
                            <h5 className="items_para">Lorem Ipsum Items</h5>  
                            <button className="items_service_button">Items</button>
                        </div>                  
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
