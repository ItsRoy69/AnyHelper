import React from 'react';
import Navbar from "../components/Navbar";
import "../styles/Home.css"

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

import { FcNext, FcPrevious } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BsArrowDownCircle, BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='banner'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="banner_slider">
                <div className="banner_container">
                  <div className="banner_para">
                    <h1>
                      SERVICES AT YOUR DOORSTEP
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <Link to="sign-up" className="banner-btnlink">
                      <button className="banner_btn">Sign Up / Login</button>
                    </Link>
                    <div className="down_button">
                      <BsArrowDownCircle className="down_button_circle" /> BLOGS
                    </div>
                  </div>
                  <div className="banner_pic">
                    <img src={banner1} alt="" />
                  </div>
                </div>                
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_slider">
                <div className="banner_container">
                  <div className="banner_para">
                    <h1>
                      GET JOBS BY PROVIDING SERVICES
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <Link to="sign-up" className="banner-btnlink">
                      <button className="banner_btn">GET JOBS</button>
                    </Link>
                    <div className="down_button">
                      <BsArrowDownCircle className="down_button_circle" /> BLOGS
                    </div>
                  </div>
                  <div className="banner_pic">
                    <img src={banner2} alt="" />
                  </div>
                </div>                
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_slider">
                <div className="banner_container">
                  <div className="banner_para">
                    <h1>
                      BUY ITEMS FROM SHOPS
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <Link to="sign-up" className="banner-btnlink">
                      <button className="banner_btn">BUY ITEMS</button>
                    </Link>
                    <div className="down_button">
                      <BsArrowDownCircle className="down_button_circle" /> BLOGS
                    </div>
                  </div>
                  <div className="banner_pic">
                    <img src={banner3} alt="" />
                  </div>
                </div>                
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <FcPrevious style={{ fontSize: "1.5rem" }} />
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <FcNext style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
      </div>

      <div className="blogs">
        <div className="blogs_boxes">
          <div className="blog_box">
            <div className="blog_para">
              <h2>
                One tap services
              </h2>
                <Link to="sign-up" className='blog_link' type='p'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry ...
                </Link>
            </div>            
          </div>

          <div className="blog_box">
            <div className="blog_para">
              <h2>
                One tap services
              </h2>
              <Link to="sign-up" className='blog_link' type='p'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry ...
              </Link>
            </div> 
          </div>

          <div className="blog_box">
            <div className="blog_para">
                <h2>
                  One tap services
                </h2>
                <Link to="sign-up" className='blog_link' type='p'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry ...
                </Link>
              </div> 
          </div>
        </div>
        <div className="blogs_more">
          <a type='h2'>More...</a>
        </div>  
        <div className="down_button" style={{marginLeft: "5rem", marginTop: "5rem"}}>
          <BsArrowDownCircle className="down_button_circle" /> SERVICES
        </div>      
      </div>
    </>
  )
}

export default Home
