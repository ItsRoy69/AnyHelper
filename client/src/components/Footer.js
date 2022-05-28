import React from 'react';
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>    
        <footer className="new_footer_area bg_color" id='footer'>
            <div className="new_footer_top">
                <div className="container">
                    <div className="footerbox">
                        <div className="boxes">
                            <div className="title">
                                <h3>AnyHelper</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus lorem at diam mauris viverra in varius. Fusce nunc, turpis porta lacinia accumsan cursus.</p>
                            </div>
                        </div>

                        <div className="boxes">
                            <div className="title">
                                <h3>Follow Us</h3>
                                <p>Follow us on our social media profile in order to keep updated.</p>
                            </div>
                            <div className="social_icon">
                                <a className="icon" href={"/"}><GrFacebookOption/></a>
                                <a className="icon" href={"/"}><FaLinkedinIn/></a>
                                <a className="icon" href={"/"}><FaTwitter/></a>
                            </div>
                        </div>
                        
                        <div className="boxes">
                            <div className="title">
                                <h3>Help</h3>
                            </div>
                            <div className="help_link">
                                <ul className="list-unstyled list">
                                    <li><a href={"/"}>FAQ</a></li>
                                    <li><a href={"/"}>Term &amp; conditions</a></li>
                                    <li><a href={"/"}>Reporting</a></li>
                                    <li><a href={"/"}>Documentation</a></li>
                                    <li><a href={"/"}>Support Policy</a></li>
                                    <li><a href={"/"}>Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="text">
                    <p className="mb-0 f_400">© Roy.. 2022 All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}
export default Footer
