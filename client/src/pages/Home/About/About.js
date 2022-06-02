import React from "react";
import "./About.css";
import aboutus1 from "../../../assets/aboutus1.png";
import aboutus2 from "../../../assets/aboutus2.png";

const AboutUs = () => {
  return (   
    <>
      <div className="container" id="about">
        <h1 className="abt_header">About Us</h1>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img src={aboutus1} alt="about" className="aboutus_img" />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about_desc">
              <h2 style={{ marginTop: "2rem" }}>Our Vision</h2>
              <p className="para_desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "3rem", }}>
          <div className="col-lg-6 col-md-12">
            <div className="about_desc">
              <h2 style={{ marginTop: "6rem" }}>Our Process</h2>
              <p className="para_desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={aboutus2} alt="about" className="aboutus_img" style={{ marginTop: "2rem", marginBottom: "2rem" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
