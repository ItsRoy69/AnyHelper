import React, { useEffect, useState } from "react";

import "../styles/ShopList.css";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import shoplist from "../assets/blogs.jpg";

import { Link ,useNavigate} from "react-router-dom";
import Axios from "axios";
import axios from "axios";


// import { getDistance } from "geolib";
// import { useSelector } from "react-redux";


const ShopList = ({ customer }) => {
  

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const [allStores, setAllStores] = useState("");
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

  const handleConnect = async(store) => {
    await axios.post(
      `https://anyhelper.herokuapp.com/chat/create-space`, {
        admin : user.email,
        members : [user.admin|| user.name, store.admin],
        spaceName : store.email,
        chatPic : "https://www.lifehacker.com.au/2020/05/everything-you-can-and-cant-do-with-facebooks-new-avatars/",
        chatHead: store.admin
      }).then((res) => {
        console.log("Space Created");
        navigate('/chatbox');
      }).catch((err) => {
        console.error(err)
        alert("You are already connected to this user.");
        navigate('/chatbox');
      });
  }

  const type = localStorage.getItem("type");

  const getAllStores = async () => {
    await Axios.get(`https://anyhelper.herokuapp.com/stores/get-all-stores`).then((res) => {
      setAllStores(res.data);
    }).catch((e) => {
      console.log(e);
    });
  };

  console.log(allStores);


  useEffect(() => {
    getAllStores();
  },[])


  return (
    <>
      <Navbar />
      {/* ------------------------------ShopList----------------------------------- */}
    {allStores?
    <>
      <div className="shoplist_section">
        <div className="shoplist_container">
          <div className="shoplist_head">
            <h1>List of shops you can checkout</h1>
            <div className="shoplist_filter">
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
                <option value="Plumbing Shop">Plumbing Shop</option>
                <option value="Electric Shop">Electric Shop</option>
                <option value="Mechanic Shop">Mechanic Shop</option>
              </select>
            </div>            
          </div> 
                 
          <div className="shoplist_lists">
            <div className="row">
            {allStores.map((store,index) => {
            return(
              <div className="col-lg-3 mb-3">
                <div className="shoplist_card" key={index}>
                  <img src={shoplist} alt="" className="shoplist_image" />
                  <div className="shoplist_carddetails">
                    <h1 className="shoplist_para">
                      {store.sname}
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h5>City : Lorem Ipsum city</h5>
                    <h5>Address : {store.address}</h5>
                    <h5>Owner : {store.admin}</h5>
                    <h5>Phone : 9876543210</h5>
                    <h5>Mail : {store.email}</h5>
                    {type == 1?
                      <>
                        <button className="signup_service_button"
                          // onClick={() => {
                          //   fetch(
                          //     `http://localhost:5000/send-text?recipient=${num}&customer=${customer.userName}&lat=${customer.latitude}&lon=${customer.longitude}`
                          //   ).catch((err) => console.error(err));
                          //   alert(
                          //     `location shared to ${worker.occupation} ${worker.name}`
                          //   );
                          // }}
                          onClick={() => handleConnect(store)}
                        >Message
                        </button>                                  
                      </>
                      : 
                      <Link to={{
                        pathname: `/items`,
                        search: `?id=${store._id}`
                        }} >
                        <button className="signup_service_button">Buy</button>
                      </Link>
                    }

                    
                  </div>                  
                </div>            
              </div>
               )
              })}

                          
              
            </div>
            
          </div>
        </div>        
      </div>
      </>
      : 
      null}
      
      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default ShopList

