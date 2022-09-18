import React, { useEffect, useState } from "react";

import "../styles/WorkersList.css";
import background1 from "../assets/workerslist1.png";
import background2 from "../assets/workerslist2.png";
import background3 from "../assets/workerslist3.png";
import workerman from "../assets/workerman.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate } from "react-router-dom";
// import { getDistance } from "geolib";
// import { useSelector } from "react-redux";
import { RiStarFill } from "react-icons/ri";
import Axios from 'axios';
import axios from "axios";

const WorkersList = ({ customer }) => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const [allWorkers, setAllWorkers] = useState("");

  // const [check, setcheck] = useState(false);
  // const locations = useSelector((state) => state.location);
  // const [workers, setWorkers] = useState(locations);

  //   // -----------------------------------------DISTANCE CALCULATION------------------------------------------------
  //   locations.map(
  //     (location) =>
  //       (location.distance =
  //         getDistance(
  //           { latitude: location.latitude, longitude: location.longitude },
  //           { latitude: customer.latitude, longitude: customer.longitude }
  //         ) / 1000)
  //   );

  //   // ----------------------------------------SORTING-----------------------------------------------------
  //   function compareDistance(a, b) {
  //     if (a.distance < b.distance) {
  //       return -1;
  //     }
  //     if (a.distance > b.distance) {
  //       return 1;
  //     }
  //     return 0;
  //   }

  //   const sortWorkersBydistance = () => {
  //     setWorkers(workers.sort(compareDistance));
  //   };

  const handleConnect = async(worker) => {
    await axios.post(
      `https://anyhelper.herokuapp.com/chat/create-space`, {
        admin : user.email,
        members : [user.admin|| user.name, worker.name],
        spaceName : worker.email,
        chatPic : "https://www.lifehacker.com.au/2020/05/everything-you-can-and-cant-do-with-facebooks-new-avatars/",
        chatHead: worker.name
      }).then((res) => {
        console.log("Space Created");
        navigate('/chatbox');
      }).catch((err) => {
        console.error(err)
        alert("You are already connected to this user.");
        navigate('/chatbox');
      });
  }

  const handleCustomerConnect = async(worker) => {
    await axios.post(
      `https://anyhelper.herokuapp.com/chat/create-space`, {
        admin : user.email,
        members : [user.admin|| user.name, worker.name],
        spaceName : worker.email,
        chatPic : "https://www.lifehacker.com.au/2020/05/everything-you-can-and-cant-do-with-facebooks-new-avatars/",
        chatHead: worker.name
      }).then((res) => {
        console.log("Space Created");
        axios.post('https://anyhelper.herokuapp.com/customers/create-order',{
          name : user.name,
          email : user.email,
          address : user.address,
          workerEmail : worker.email
        })
        .then((response) => {
          console.log(response);
          navigate('/chatbox');
        }).catch((e) => {
          console.log(e);
        })
        
      }).catch((err) => {
        console.error(err)
        alert("You are already connected to this user.");
        navigate('/chatbox');
      });
  }

  const type = localStorage.getItem("type");

    const getAllWorkers = async () => {
    await Axios.get(`https://anyhelper.herokuapp.com/workers/get-all-workers`).then((res) => {
      setAllWorkers(res.data);
    }).catch((e) => {
      console.log(e);
    });
  };

  console.log(allWorkers);

  useEffect(() => {
    getAllWorkers();
  },[])

  return (
    <>
      <Navbar />
      {/* ------------------------------WorkersList----------------------------------- */}
    {allWorkers? 
      <div className="workerslist_section">
        <div className="workerslist_container">
          <div className="workerslist_head">
            <h1>List of workers you can checkout</h1>
            <div className="workerslist_filter">
              <div
                type="button"
                className="btn btn-primary distclass"
                // onClick={() => {
                //   sortWorkersBydistance();
                //   setcheck(!check);
                // }}
              >
                Sort By Distance
              </div>
              <select
                className="btn btn-secondary dropdown-toggle"
                name="Occupation"
                id="selectOccupation"
                // onChange={(e) => {
                //   if (e.target.value !== "All") {
                //     setWorkers(
                //       locations.filter(
                //         (worker) => worker.occupation === e.target.value
                //       )
                //     );
                //   } else {
                //     setWorkers(locations);
                //   }
                // }}
              >
                <option value="All">All</option>
                <option value="Plumbing workers">Plumbing workers</option>
                <option value="Electric workers">Electric workers</option>
                <option value="Mechanic workers">Mechanic workers</option>
              </select>
            </div>            
          </div> 
                 
          <div className="workerslist_lists">
            <div className="row">
            {allWorkers.map((worker,index) => {
                return(
                <>
              <div className="col-lg-3 mb-3">
               
                <div className="workerslist_card" key={index}>
                  <div className="card workersCard text-white card-has-bg click-col"
                    style={{  backgroundImage:`url(${background1})` }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body">
                        <h3>{worker.name}</h3>
                        <h5>{worker.profession}</h5>
                        <h5>{worker.address}</h5>
                      </div>
                      <div className="card-footer">
                        <div className="media">
                          <img className="mr-3 rounded-circle" src={workerman} style={{ maxWidth: "50px" }} />
                          <div className="media-body">
                            <h6>Phone : {worker.phone}</h6>
                            <h6>{worker.address}</h6>
                            <h5>worker.distance km</h5>
                            <h5>5<RiStarFill /></h5>                           

                            {type == 0?
                                    <>                          
                                    <button className="workerlist_btn"
                                        onClick={() => handleConnect(worker)}
                                      >Message
                                      </button>  
                                                         
                                </>
                                    : 
                                    <>
                                      <button className="workerlist_btn"
                                        // onClick={() => {
                                        //   fetch(
                                        //     `http://localhost:5000/send-text?recipient=${num}&customer=${customer.userName}&lat=${customer.latitude}&lon=${customer.longitude}`
                                        //   ).catch((err) => console.error(err));
                                        //   alert(
                                        //     `location shared to ${worker.occupation} ${worker.name}`
                                        //   );
                                        // }}
                                        onClick={() => handleCustomerConnect(worker)}
                                      >Send location to {worker.name}
                                      </button>
                                    </>
                                }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
                
              </div>
              </>
                );
                })}     


            </div>            
          </div>
        </div>        
      </div>
      :null
}
      
      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default WorkersList

