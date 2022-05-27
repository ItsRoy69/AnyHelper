import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import teammember from "../../../assets/teammember.png";
import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="container">

        <h2 className="team_header">Meet our team</h2>

        <div className="teamcards_parent">


          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>





      </div>
    </>
  );
};

export default Team;
