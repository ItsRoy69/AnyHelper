import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import user from "../assets/user.webp";

import { ImSearch } from "react-icons/im";
import { IoMdSend } from "react-icons/io";

import '../styles/Message.css';

const Message = () => {
  return (
    <>
      <Navbar />
        <div className="container">
          <div className='messagebox'>            
            <div className='messagenamebox'>
              <div className='messagenamesearchbox'>
                <div className="search-box">
                    <input
                      type="text"
                      id=""
                      className="search"
                    />
                </div>
                <div className="searchbtn">
                    <ImSearch />                  
                </div>
              </div>
              <div className="name-box">              
                <div
                  className="names"
                >
                  <img src={user} alt="..." />
                  <h3>space.chatHead</h3>
                </div>
                <div
                  className="names"
                >
                  <img src={user} alt="..." />
                  <h3>space.chatHead</h3>
                </div>
                <div
                  className="names"
                >
                  <img src={user} alt="..." />
                  <h3>space.chatHead</h3>
                </div>
                <div
                  className="names"
                >
                  <img src={user} alt="..." />
                  <h3>space.chatHead</h3>
                </div>
                <div
                  className="names"
                >
                  <img src={user} alt="..." />
                  <h3>space.chatHead</h3>
                </div>
                <div
                  className="names"
                >
                  <img src={user} alt="..." />
                  <h3>space.chatHead</h3>
                </div>
                <div
                  className="names"
                >
                  <img src={user} alt="..." />
                  <h3>space.chatHead</h3>
                </div>
              </div>
            </div>
            <div className='messagechatbox'>
              <div className="message">
                <div className="message-content">
                  <p>messages.message</p>
                </div>
                <div className="message-meta">
                  <p id="time">2:30</p>
                  <p id="author">messages.username</p>
                </div>                
              </div>
              <div className="message">
                <div className="message-content">
                  <p>messages.message</p>
                </div>
                <div className="message-meta">
                  <p id="time">2:30</p>
                  <p id="author">messages.username</p>
                </div>                
              </div>
              <div className="message">
                <div className="message-content">
                  <p>messages.message</p>
                </div>
                <div className="message-meta">
                  <p id="time">2:30</p>
                  <p id="author">messages.username</p>
                </div>                
              </div>
            </div>
            <div className="chat-section">
              <input
                type="text"
                placeholder="Hey..."
                className='chat-input'
              />
              <button>
                <IoMdSend />
              </button>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Message
