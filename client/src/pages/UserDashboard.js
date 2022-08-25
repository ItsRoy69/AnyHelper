import React, { useEffect, useState } from 'react';

import "../styles/UserDashboard.css";

import profile from "../assets/workerman.png";
import coverPicture from "../assets/cover.webp";
import background1 from "../assets/workerslist1.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EditUserDashboard from "../components/EditUserDashboard";

import { Link, useNavigate } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";


const UserDashboard = () => {

    const navigate = useNavigate();

    const [modal8, setModal8] = useState(false);

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));


    useEffect(() => {
        if (!user){
         navigate("/")   
        }
    },[])
   
    const type = localStorage.getItem("type");

    console.log(user.items);

  return (
    <>
    {token ? (
      <>
        <Navbar />
            <div className="UserDashboard">
                <div className="UserDasboard_left">
                    <div className="UserDasboard_ProfileCard">
                        <div className="UserDasboard_ProfileImages">
                            <img src={coverPicture } alt="CoverImage" />
                            <img src={profile} alt="ProfileImage"  />
                        </div>
                        <div className="UserDasboard_ProfileName">
                            <span>{user.admin}</span>                       
                            <span>{user.email}</span>
                            {type == 0?
                                <>  
                                    <div className="UserDasboard_itemsStatus">
                                        <div>
                                            <span>{user.stype}</span>
                                            <span>{user.sname}</span>
                                        </div>
                                        
                                    </div>                                    
                                    <span>{user.address}</span>
                                </>
                                :
                                null
                            }

                            {type == 1?
                                <>  
                                    <span>{user.phone}</span>
                                    <span>{user.profession}</span>
                                </>
                                :
                                null
                            }

                            {type == 2?
                                <>  
                                    <span>{user.address}</span>
                                </>
                                :
                                null
                            }
                            <div className="Userboard_edit">
                                <BsPencilSquare onClick={()=>setModal8(true)} className='Userboard_pencil'/>
                                {modal8 && <EditUserDashboard setModal={setModal8} />}
                            </div>
                        </div>
                        
                        <div className="UserDasboard_itemsStatus">
                            <hr />
                            <div>     

                                {type == 0?
                                    <>
                                    <div className="UserDasboard_itemsfollow">
                                        <span>11</span>
                                        <span>Services</span>
                                    </div>                                    
                                </>
                                    : null
                                }
                           
                                {type == 1?
                                    <div className="UserDasboard_itemsfollow">
                                        <span>11</span>
                                        <span>Services</span>
                                    </div>
                                    : null
                                }

                                {type == 2?
                                    <>
                                        <div className="UserDasboard_itemsfollow">
                                            <span>11</span>
                                            <span>Services</span>
                                        </div>
                                        <div className="UserDasboard_itemsvl"></div>
                                        <div className="UserDasboard_itemsfollow">
                                            <span>33</span>
                                            <span>Times ordered</span>
                                        </div> 
                                    </>
                                    : null
                                }
                                                              
                            </div>
                            <hr />                            
                            <Link to="/chatbox" className="UserDasboard_itemschat">
                                <span>Chat</span>
                            </Link>                            
                        </div>
                    </div>
                </div>

                <div className="UserDasboard_mid">
                    <div className="UserDasboard_midCard">

                    {type == 0?
                        <div className='column'>
                            <div className="row">
                                <div className="userdashboardlist_card"  style={{ width : "1000px"}}>
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>WORKERS</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/workerslist" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>
                            <div className="row">
                                <h1 style={{fontFamily: "'Jost', sans-serif", fontStyle: "normal", fontWeight:" 700", padding: "20px"}}>Items in Shop</h1>
                                {user.items.map((item) => {
                                return(
                               
                                <div className="col-lg-3 mb-2">
                                    <div className="items_card" style={{height:"14rem"}}>
                                        <img src={`https://source.unsplash.com/random/500×500/?${item}`} alt="" className="items_image" style={{width: "100%",objectFit:"cover", height:"10rem"}} />
                                        <div className="items_carddetails">
                                            <h5 className="items_para">{item}</h5>  
                                            <button className="items_service_button">Delete</button>
                                        </div>                  
                                    </div>
                                </div>
                                )})}

                            </div>
                        </div>
                        : null
                    }
                        


                        {type == 1?
                        <div className='column'>
                            <div className="row">
                                <div className="userdashboardlist_card"  style={{ width : "1000px"}}>
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>SHOPS</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/shoplist" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>
                            <div className="row">
                                <h1 style={{fontFamily: "'Jost', sans-serif", fontStyle: "normal", fontWeight:" 700", padding: "20px"}}>Services you can provide</h1>

                                <div className="col-lg-3 mb-3">
                                    <div className="userdashboardlist_card">
                                        <div className="card userdashboardCard text-white card-has-bg click-col"
                                            style={{  backgroundImage:`url(${background1})` }}
                                        >
                                            <div className="card-img-overlay d-flex flex-column">
                                                <div className="card-body">
                                                    <h6>NAME</h6>
                                                    <h6>Mail ID</h6>
                                                    <h6>Address</h6>
                                                </div>
                                                <div className="card-footer">
                                                    <div className="media">                                                    
                                                        <div className="media-body">
                                                            <Link to= "/wvicelist" className="userdashboardlist_btn"
                                                            >Message
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                  
                                    </div>
                                </div>


                                
                                                                      
                            </div>
                        </div>

                        : null
                    }
                    {type == 2?
                        <div className="row">
                                
                            <div className="col-lg-3 mb-3">
                                <div className="userdashboardlist_card">
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>WOMEN RELATED SERVICES</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/womenservicelist" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>


                            <div className="col-lg-3 mb-3">
                                <div className="userdashboardlist_card">
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>WOMEN SALON</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/womensalonlist" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>


                            <div className="col-lg-3 mb-3">
                                <div className="userdashboardlist_card">
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>MEN SALON</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/mensalonlist" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>


                            <div className="col-lg-3 mb-3">
                                <div className="userdashboardlist_card">
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>THERAPIES</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/therapieslist" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>

                            <div className="col-lg-3 mb-3">
                                <div className="userdashboardlist_card">
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>CLEANING</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/cleaninglist" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>

                            <div className="col-lg-3 mb-3">
                                <div className="userdashboardlist_card">
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>SHOPS</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/shoplist" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>

                            <div className="col-lg-3 mb-3">
                                <div className="userdashboardlist_card">
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>WORKERS</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/workerslist" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>


                            <div className="col-lg-3 mb-3">
                                <div className="userdashboardlist_card">
                                    <div className="card userdashboardCard text-white card-has-bg click-col"
                                        style={{  backgroundImage:`url(${background1})` }}
                                    >
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="card-body">
                                                <h6>BLOGS</h6>
                                            </div>
                                            <div className="card-footer">
                                                <div className="media">                                                    
                                                    <div className="media-body">
                                                        <Link to= "/blogs" className="userdashboardlist_btn"
                                                        >Checkout
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>

                        </div>

                        : null
                    }

                    </div>
                </div>
                


                
            </div>
            </>
            ) : null}
        <Footer />
    </>
  )
}

export default UserDashboard
