import React, { useEffect, useState } from "react";
import "../styles/ChatBox.css";
import { IoMdSend } from "react-icons/io";
import { io } from "socket.io-client";

import chatPic from "../assets/workerman.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

let socket;

const ChatBox = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const type = localStorage.getItem("type");

  const [userSpaces, setUserSpaces] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [selectedSpace, setSelectedSpace] = useState("");
  const ENDPOINT = `https://anyhelper.herokuapp.com`;

  const getUserSpaces = async () => {
    const res = await Axios.post(`https://anyhelper.herokuapp.com/chat/get-users-spaces`, {
      name: user.name || user.admin,
    });
    localStorage.setItem("user_spaces", JSON.stringify(res.data));
    setUserSpaces(res.data);
    console.log(res.data);
  };

  const selectSpace = (space) => {
    setSelectedSpace(space);
  };

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

  const sendMessage = async (e, space) => {
    e.preventDefault();
    console.log(space);
    const username = user.admin || user.name;
    const id = space._id;
    const data = { username, id, message };
    console.log(data);
    if (message) {
      await Axios.post("https://anyhelper.herokuapp.com/chat/send-message", data, {
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
          alert("Message Not Sent!");
        });

      socket.emit("sendMessage", message, () => { });

      setMessage("");
    }
  };

  useEffect(() => {
    getUserSpaces();
    socket = io(ENDPOINT);
    console.log(socket);
    console.log(selectedSpace.spaceName);

    const username = user.admin || user.name;

    socket.on("message", (message) => {
      console.log("message here!");
      setMessages((preValue) => {
        let arr = [...preValue, message].concat(selectedSpace.messages);
        let newUniqueArr = [...new Set(arr)];
        return newUniqueArr;
      });
    });

    if (selectedSpace) {
      socket.emit("join", { username, selectedSpace }, () => { });
    }

    if(selectedSpace){
    socket.emit("join", { username, selectedSpace }, () => {});
    setMessages(selectedSpace.messages);
    }

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [selectedSpace]);

  console.log(userSpaces.members);
  console.log(selectedSpace);

  useEffect(() => {
    if (!user){
     navigate("/")   
    }
},[])

  return (
    <>
    <Navbar />
    <div className="dashboard-con">
      <div className="chat-main">
        <div className="welcome-con">
          {type == 0?
          <h1>Let's chat, {user.admin}!</h1>
          :
          <h1>Let's chat, {user.name}!</h1>
          }
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
                        {userSpaces.map((space,index) => {

                        return(
                          <div
                            className="names"  
                            onClick={() => selectSpace(space)}                        
                          >
                            <img src={chatPic} alt="..." />
                       
                            <h6>{space.members[0] === (user.name || user.admin) ? space.members[1] : space.members[0]}</h6>

                        
                          </div>
                        );
                          })}
                      
                      
                </div>
              </div>
            <div className="chat-box-2">
              {selectedSpace === "" ? 
                <h2>Select a user to chat!</h2>
               :
               <>
                <div className="uid">
                  <h4>
                    Continue your chat with,{""}

                    {selectedSpace.members[0] === (user.name || user.admin) ? selectedSpace.members[1] : selectedSpace.members[0]}
                  </h4>
                  <div className="sender-message">
                    <div className="message-container">
                      {/* {messageList.map((messageContent) => {
                                  return (*/}
                       {selectedSpace.messages ?
                        <>
                          {messages
                            .filter((messages) => {
                              return (
                                messages.spacename === selectedSpace.spaceName
                              );
                            }).map((messages) => {
                              return (
                                <> 
                                  <div  className="message" id={(user.admin || user.name)===messages.username? "message-right": ""}>
                                    <div>
                                      <div className="message-content">
                                        <p>{messages.message}</p>
                                      </div>
                                      <div className="message-meta">
                                        <p id="time">2:30</p>
                                        <p id="author">{messages.username}</p>
                                      </div>
                                    </div>
                                  </div>
                                  

                                </>
                              )
                            })}
                        </>
                        : null
                      } 
                      
                    </div>
                  </div>
                </div>
             </>
}

              <div className="chat-section">
                <input
                  type="text"
                  placeholder="Hey..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="button" className="chat_button" onClick={(e) => sendMessage(e, selectedSpace)}>
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