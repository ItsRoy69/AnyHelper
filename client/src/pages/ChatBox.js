import React, { useEffect, useState } from "react";
import "../styles/ChatBox.css";
import { IoMdSend } from "react-icons/io";
// import Axios from "axios";
// import { io } from "socket.io-client";

import chatPic from "../assets/workerman.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// let socket;

const ChatBox = () => {
  // const user = JSON.parse(localStorage.getItem("user_info"));

  // const [userSpaces, setUserSpaces] = useState([]);
  // const [message, setMessage] = useState("");
  // const [messages, setMessages] = useState([]);
  // const [search, setSearch] = useState("");
  // const [searchRes, setSearchRes] = useState([]);
  // const [selectedSpace, setSelectedSpace] = useState("");
  // const ENDPOINT = `https://devcom69.herokuapp.com`;

  // const getUserSpaces = async () => {
  //   const res = await Axios.post(`https://devcom69.herokuapp.com/get-users-spaces`, {
  //     username: user.username,
  //   });
  //   localStorage.setItem("user_spaces", JSON.stringify(res.data));
  //   setUserSpaces(res.data);
  //   console.log(res.data);
  // };

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   if (e.target.value === "") {
  //     setSearchRes([]);
  //   }
  // };

  // const submitSearch = async () => {
  //   const res = await Axios.post(`https://devcom69.herokuapp.com/search-space`, {
  //     username: user.username,
  //     search: search,
  //   });
  //   setSearchRes(res.data);
   
  //   console.log(res.data);
  // };

  // const sendMessage = async (e, space) => {
  //   e.preventDefault();
  //   console.log(space);
  //   const username = user.username;
  //   const id = space._id;
  //   const data = { username, id, message };
  //   console.log(data);
  //   if (message) {
  //     await Axios.post("https://devcom69.herokuapp.com/send-message", data, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         alert("Message Not Sent!");
  //       });

  //     socket.emit("sendMessage", message, () => { });

  //     setMessage("");
  //   }
  // };

  // useEffect(() => {
  //   getUserSpaces();
  //   socket = io(ENDPOINT);
  //   console.log(socket);
  //   console.log(selectedSpace.spaceName);

  //   const username = user.username;

  //   socket.on("message", (message) => {
  //     console.log("message here!");
  //     setMessages((preValue) => {
  //       let arr = [...preValue, message].concat(selectedSpace.messages);
  //       let newUniqueArr = [...new Set(arr)];
  //       return newUniqueArr;
  //     });
  //   });

  //   if (selectedSpace) {
  //     socket.emit("join", { username, selectedSpace }, () => { });
  //   }

  //   // if(selectedSpace){
  //   // socket.emit("join", { username, selectedSpace }, () => {});
  //   // setMessages(selectedSpace.messages);
  //   // }

  //   return () => {
  //     socket.disconnect();
  //     socket.off();
  //   };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedSpace]);

  // console.log(userSpaces.members);
  // console.log(selectedSpace);

  return (
    <>
    <Navbar />
    <div className="dashboard-con">
      <div className="chat-main">
        <div className="welcome-con">
          <h1>Let's chat, user.fullname!</h1>
        </div> 
          <div className="chat-box">
            <div className="chat-box-1">
              <div className="search-box">
                  <input
                    type="text"
                    id=""
                    className="search"
                  />
                  {/* <input type="text" placeholder='Type something' className='inp' /> */}
                  <div className="btn">
                    Search
                  </div>
                </div>
                <div className="name-box">
                {/* {searchRes.length === 0
                    ? userSpaces.map((space) => {
                        return ( */}
                          <div
                            className="names"                          
                          >
                            <img src={chatPic} alt="..." />
                            <h6>space.chatHead</h6>
                          </div>
                          
                        {/* );
                      })
                    : searchRes.map((space) => {
                        return ( */}
                          <div
                            className="names"
                            // key={space.spaceName}
                            
                          >
                            <img src={chatPic} alt="..." />
                            <h6>space.chatHead</h6>
                          </div>
                        {/* );
                      })} */}
                </div>
              </div>
            <div className="chat-box-2">
              {/* {selectedSpace === "" ? ( */}
                <h2>Select a user to chat!</h2>
              {/* ) : ( */}
                <div className="uid">
                  <h4>
                    Continue your chat with,{" "}

                    {/* {selectedSpace.members[0] === user.username ? selectedSpace.members[1] : selectedSpace.members[0]} */}
                  </h4>
                  <div className="sender-message">
                    <div className="message-container">
                      {/*{messageList.map((messageContent) => {
                                  return (*/}
                      {/* {selectedSpace.messages ?
                        <>
                          {messages
                            .filter((messages) => {
                              return (
                                messages.spacename === selectedSpace.spaceName
                              );
                            }).map((messages) => {
                              return (
                                <> */}
                                  <div className="message" >
                                    <div>
                                      <div className="message-content">
                                        <p>messages.message</p>
                                      </div>
                                      <div className="message-meta">
                                        <p id="time">2:30</p>
                                        <p id="author">messages.username</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message" >
                                    <div>
                                      <div className="message-content">
                                        <p>messages.message</p>
                                      </div>
                                      <div className="message-meta">
                                        <p id="time">2:30</p>
                                        <p id="author">messages.username</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message" >
                                    <div>
                                      <div className="message-content">
                                        <p>messages.message</p>
                                      </div>
                                      <div className="message-meta">
                                        <p id="time">2:30</p>
                                        <p id="author">messages.username</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message" >
                                    <div>
                                      <div className="message-content">
                                        <p>messages.message</p>
                                      </div>
                                      <div className="message-meta">
                                        <p id="time">2:30</p>
                                        <p id="author">messages.username</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message" >
                                    <div>
                                      <div className="message-content">
                                        <p>messages.message</p>
                                      </div>
                                      <div className="message-meta">
                                        <p id="time">2:30</p>
                                        <p id="author">messages.username</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message" >
                                    <div>
                                      <div className="message-content">
                                        <p>messages.message</p>
                                      </div>
                                      <div className="message-meta">
                                        <p id="time">2:30</p>
                                        <p id="author">messages.username</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message" >
                                    <div>
                                      <div className="message-content">
                                        <p>messages.message</p>
                                      </div>
                                      <div className="message-meta">
                                        <p id="time">2:30</p>
                                        <p id="author">messages.username</p>
                                      </div>
                                    </div>
                                  </div>
                                  

                                {/* </>
                              )
                            })}
                        </>
                        : null
                      } */}
                      
                    </div>
                  </div>
                </div>
              {/* )} */}

              <div className="chat-section">
                <input
                  type="text"
                  placeholder="Hey..."
                  
                />
                <button type="button" className="chat_button">
                  <IoMdSend className="chat_btn"/>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default ChatBox;