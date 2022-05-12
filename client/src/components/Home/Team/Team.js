import React from 'react';
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import teammember from '../../../assets/teammember.png';
import "./Team.css";

const Team = () => {
  return (
    <>
      <div id='team'>
        <div className="teammidbanner">
            <div className="teammidbannerpicdetails">
              <div className="badge">
                <h1>Meet Our Team</h1>                
              </div>
            </div>
        </div>

        <div className="teamcards">
          <div className="teampiccards">

            <div className="teamdetailcardinfo">
              <div className="teamdetailaboutpic">
                <img className="bannerbg" src={teammember} alt="images"/>
              </div>
              <div className="teamdetailcard">
                <div className="teamdetailabout">
                  <h4>Jyotirmoy Roy</h4>
                  <p>Web Developer</p>
                  <div className='values-list' >
                    <button className="icon" href={"/"}><GrFacebookOption/></button>
                    <button className="icon" href={"/"}><FaLinkedinIn/></button>
                    <button className="icon" href={"/"}><FaTwitter/></button>
                  </div>
                </div>
              </div>
            </div>

              <div className="teamdetailcardinfo">
                <div className="teamdetailaboutpic">
                  <img className="bannerbg" src={teammember} alt="images"/>
                </div>
                <div className="teamdetailcard">
                  <div className="teamdetailabout">
                    <h4>Anshu Sarkar</h4>
                    <p>Web Developer</p>
                    <div className='values-list' >
                      <button className="icon" href={"/"}><GrFacebookOption/></button>
                      <button className="icon" href={"/"}><FaLinkedinIn/></button>
                      <button className="icon" href={"/"}><FaTwitter/></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="teamdetailcardinfo">
                <div className="teamdetailaboutpic">
                  <img className="bannerbg" src={teammember} alt="images"/>
                </div>
                <div className="teamdetailcard">
                  <div className="teamdetailabout">
                    <h4>Aritra Samanta</h4>
                    <p>Web Developer</p>
                    <div className='values-list' >
                      <button className="icon" href={"/"}><GrFacebookOption/></button>
                      <button className="icon" href={"/"}><FaLinkedinIn/></button>
                      <button className="icon" href={"/"}><FaTwitter/></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="teamdetailcardinfo">
                <div className="teamdetailaboutpic">
                  <img className="bannerbg" src={teammember} alt="images"/>
                </div>
                <div className="teamdetailcard">
                  <div className="teamdetailabout">
                    <h4>Anjushree Sen</h4>
                    <p>Web Developer</p>
                    <div className='values-list' >
                      <button className="icon" href={"/"}><GrFacebookOption/></button>
                      <button className="icon" href={"/"}><FaLinkedinIn/></button>
                      <button className="icon" href={"/"}><FaTwitter/></button>
                    </div>
                  </div>
                </div>
              </div>

              </div>

              <div className="teampiccardss">

                <div className="teamdetailcardinfo">
                  <div className="teamdetailaboutpic">
                    <img className="bannerbg" src={teammember} alt="images"/>
                  </div>
                  <div className="teamdetailcard">
                    <div className="teamdetailabout">
                      <h4>Debabdyuti Paul</h4>
                      <p>Web Developer</p>
                      <div className='values-list' >
                        <button className="icon" href={"/"}><GrFacebookOption/></button>
                        <button className="icon" href={"/"}><FaLinkedinIn/></button>
                        <button className="icon" href={"/"}><FaTwitter/></button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="teamdetailcardinfo">
                  <div className="teamdetailaboutpic">
                    <img className="bannerbg" src={teammember} alt="images"/>
                  </div>
                  <div className="teamdetailcard">
                    <div className="teamdetailabout">
                      <h4>Raunak Sarkar</h4>
                      <p>Web Developer</p>
                      <div className='values-list' >
                        <button className="icon" href={"/"}><GrFacebookOption/></button>
                        <button className="icon" href={"/"}><FaLinkedinIn/></button>
                        <button className="icon" href={"/"}><FaTwitter/></button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="teamdetailcardinfo">
                  <div className="teamdetailaboutpic">
                    <img className="bannerbg" src={teammember} alt="images"/>
                  </div>
                  <div className="teamdetailcard">
                    <div className="teamdetailabout">
                      <h4>Srija Mukherjee</h4>
                      <p>Web Developer</p>
                      <div className='values-list' >
                        <button className="icon" href={"/"}><GrFacebookOption/></button>
                        <button className="icon" href={"/"}><FaLinkedinIn/></button>
                        <button className="icon" href={"/"}><FaTwitter/></button>
                      </div>
                    </div>
                  </div>
                </div>
               
          </div>
        </div>
       </div>
    </>
  )
}

export default Team