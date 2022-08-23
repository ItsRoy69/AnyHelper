import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import WomenServices from "../services/WomenServices";
import WomenSalon from "../services/WomenSalon";
import MenSalon from "../services/MenSalon";
import Therapies from "../services/Therapies";
import Cleaning from "../services/Cleaning";
import Shops from "../services/Shops";
import Workers from "../services/Workers";

import "../styles/Home.css";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

import about from "../assets/about.png";

import service_img1 from "../assets/service_img1.png";
import service_img2 from "../assets/service_img2.png";
import service_img3 from "../assets/service_img3.png";
import service_img4 from "../assets/service_img4.png";
import service_img5 from "../assets/service_img5.png";
import service_img6 from "../assets/service_img6.png";
import service_img7 from "../assets/service_img7.png";

import { FcNext, FcPrevious } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BsArrowDownCircle } from "react-icons/bs";

const Home = () => {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);

  return (
    <>
      <Navbar />

      {/* --------------------------------BANNER------------------------------------ */}

      <div className="banner">
        <div
          id="carouselExampleCaptions"
          className="carousel "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="banner_slider">
                <div className="banner_container">
                  <div className="banner_para">
                    <h1>SERVICES AT YOUR DOORSTEP</h1>
                    <p className="banner_about">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>

                    <Link to="/servicesignup" className="banner-btnlink">
                      <button className="banner_btn">Sign Up / Login</button>
                    </Link>


                    <div className="down_button">
                      <BsArrowDownCircle className="down_button_circle" /> ABOUT
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
                    <h1>GET JOBS BY PROVIDING SERVICES</h1>
                    <p className="banner_about">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <Link to="/workerregistration" className="banner-btnlink">
                      <button className="banner_btn">GET JOBS</button>
                    </Link>
                    <div className="down_button">
                      <BsArrowDownCircle className="down_button_circle" /> ABOUT
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
                    <h1>BUY ITEMS FROM SHOPS AROUND YOU</h1>
                    <p className="banner_about">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>

                    <Link to="/shoplist" className="banner-btnlink">
                      <button className="banner_btn">BUY ITEMS</button>
                    </Link>

                    <div className="down_button">
                      <BsArrowDownCircle className="down_button_circle" /> ABOUT
                    </div>
                  </div>
                  <div className="banner_pic">
                    <img src={banner3} alt="" />
                  </div>
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
            <FcPrevious style={{ fontSize: "1.5rem" }} />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <FcNext style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
      </div>

      {/* --------------------------------ABOUT------------------------------------ */}

      <div className="about">
        <div className="about_left">
          <img src={about} alt="" className="worker_register_banner" />
        </div>
        <div className="container-fluid about_right">
          <h1>About</h1>
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </h4>
        </div>
      </div>

      {/* --------------------------------BLOGS------------------------------------ */}

      <div className="blogs" id="blogs">
        <div className="blogs_boxes">
          <div className="blog_box">
            <div className="blog_para">
              <h2>One tap services</h2>
              <Link to="/blogs" className="blog_link" type="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry ...
              </Link>
            </div>
          </div>

          <div className="blog_box">
            <div className="blog_para">
              <h2>One tap services</h2>
              <Link to="/blogs" className="blog_link" type="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry ...
              </Link>
            </div>
          </div>

          <div className="blog_box">
            <div className="blog_para">
              <h2>One tap services</h2>
              <Link to="/blogs" className="blog_link" type="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry ...
              </Link>
            </div>
          </div>
        </div>
        <div className="blogs_more">
          <a type="h2" href="/blogs">
            More...
          </a>
        </div>
        <div
          className="down_button"
          style={{ marginLeft: "5rem", marginTop: "5rem" }}
        >
          <BsArrowDownCircle className="down_button_circle" /> SERVICES
        </div>
      </div>

      {/* --------------------------------SERVICES------------------------------------ */}

      <div className="services_section" id="services">
        <h1>Services</h1>
        <div className="services_box">
          <div className="services_provided">
            <div className="service" onClick={() => setModal1(true)}>
              <img src={service_img1} alt="" className="service_img1" />
              <p className="service_about">WOMEN RELATED SERVICES</p>
            </div>

            <div className="service" onClick={() => setModal2(true)}>
              <img src={service_img7} alt="" className="service_img7" />
              <p className="service_about">WOMEN SALON</p>
            </div>

            <div className="service" onClick={() => setModal3(true)}>
              <img src={service_img2} alt="" className="service_img2" />
              <p className="service_about">MEN SALON</p>
            </div>

            <div className="service" onClick={() => setModal4(true)}>
              <img src={service_img3} alt="" className="service_img3" />
              <p className="service_about">THERAPIES</p>
            </div>

            <div className="service" onClick={() => setModal5(true)}>
              <img src={service_img4} alt="" className="service_img4" />
              <p className="service_about">CLEANING</p>
            </div>

            {modal1 && <WomenServices setModal={setModal1} />}
            {modal2 && <WomenSalon setModal={setModal2} />}
            {modal3 && <MenSalon setModal={setModal3} />}
            {modal4 && <Therapies setModal={setModal4} />}
            {modal5 && <Cleaning setModal={setModal5} />}
          </div>

          <div className="services_provided">
            <div className="service" onClick={() => setModal6(true)}>
              <img src={service_img5} alt="" className="service_img5" />
              <p className="service_about">SHOPS</p>
            </div>

            <div className="service" onClick={() => setModal7(true)}>
              <img src={service_img6} alt="" className="service_img6" />
              <p className="service_about">WORKERS</p>
            </div>

            {modal6 && <Shops setModal={setModal6} />}
            {modal7 && <Workers setModal={setModal7} />}
          </div>
        </div>
      </div>

      <div
        className="down_button"
        style={{ marginLeft: "5rem", marginTop: "5rem" }}
      >
        <BsArrowDownCircle className="down_button_circle" /> FOOTER
      </div>

      {/* --------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  );
};

export default Home;
