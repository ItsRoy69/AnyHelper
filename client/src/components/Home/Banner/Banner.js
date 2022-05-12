import React from "react";
import Slider from "react-slick";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.jpg";

import "./Banner.css";

export default function Features() {
  return (
    <>      
      <div
        id="carouselExampleCaptions"
        interval="100"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <div className="caption">
                <h1>
                  Find the worker you need
                </h1>
                <p>                  
                  From this website, you can buy necessary products online. Here, you can get the workers for different purposes. A huge amount of money and time can be saved us in this website because it's user friendly.
                </p>
              </div>              
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <div className="caption">
                <h1>
                  Save Time And Money
                </h1>
                <p>                  
                  From this website, you can buy necessary products online. Here, you can get the workers for different purposes. A huge amount of money and time can be saved us in this website because it's user friendly.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <div className="caption">
                  <h1>
                    Buy Products Online
                  </h1>
                  <p>                  
                    From this website, you can buy necessary products online. Here, you can get the workers for different purposes. A huge amount of money and time can be saved us in this website because it's user friendly.
                  </p>
                </div>
              </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>     
    </>
  );
}