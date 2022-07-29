import React from 'react';
import "../styles/Footer.css";

import footer from "../assets/footer.png";
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";
import footer4 from "../assets/footer4.png";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="footer_box">
          <div className="footer_provided">

            <div className="footer_boxes">
              <div className="footer_left">
                <h1>ANYHELPER</h1>
                <div className="footer_categories">
                  <div className="footer_categories_details">
                    <a className='footer_line'>About Us</a>
                    <a className='footer_line'>Terms & Conditions</a>
                    <a className='footer_line'>Privacy Policy</a>
                    <a className='footer_line'>Blogs</a>
                    <a className='footer_line'>Ratings</a>
                    <a className='footer_line'>Careers</a>
                    <a className='footer_line'>Complaints</a>
                    <a className='footer_line'>Contact Us</a>
                    <div className="footer_categories_contact_social">
                      <img src={footer1} alt="" className="social1" />
                      <img src={footer2} alt="" className="social2" />
                      <img src={footer3} alt="" className="social3" />
                      <img src={footer4} alt="" className="social4" />
                    </div>
                  </div>
                  <div className="footer_categories_contact">
                    
                  </div>
                </div>
              </div>

              <div className="footer_right">
                <img src={footer} alt="" className="footer_img" />
              </div>
            </div>

          </div>          
        </div>
        
      </div>
    </>
  )
}

export default Footer
