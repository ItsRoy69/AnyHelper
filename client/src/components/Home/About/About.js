import React from 'react';
import "./About.css";
import aboutus1 from "../../../assets/aboutus1.png";
import aboutus2 from "../../../assets/aboutus2.png";

const AboutUs = () => {
  return (
    <>
      <div className="container mt-5" id='about'>
        <div className="badge">
          <h1>About Us</h1>
        </div>
        <div className="paras">
          <div className="firstpara">
            <div className="para">
                <h2>Our Vision</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="image">
                <img src={aboutus1} alt="about" />
            </div>
          </div>
          <div className="secondpara">
            <div className="image">
                <img src={aboutus2} alt="about" />
            </div>
            <div className="para">
                <h2>Our Process</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default AboutUs