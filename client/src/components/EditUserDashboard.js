import React, { useState } from "react";

import "../styles/EditUserDashboard.css";

import Axios  from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {storage} from '../Firebase';

const EditUserDashboard = (props) => {

    const user = JSON.parse(localStorage.getItem("user"));
    const [profileImg, setProfileImg] = useState("");
    const [coverImg, setCoverImg] = useState("");


    const [editUser, setEditUser] = useState({
        name : props.user.name,
        email : props.user.email,
        address : props.user.address
    })

    let name, value;
    const inputsHandler = (e) => {
        name = e.target.name;
        value = e.target.value;
    
        setEditUser({ ...editUser, [name]: value });
    }
    
    const handleProfileUpload = () => {
        const storageRef = ref(storage, `profileImages/${profileImg.name}`);
        uploadBytes(storageRef, profileImg).then((snapshot) => {
          if (snapshot) {
            console.log(snapshot);
            alert("Profile Picture Changed Successfully!");
            getDownloadURL(ref(storage, `profileImages/${profileImg.name}`)).then(
              (url) => {
                Axios.patch(`https://anyhelper.herokuapp.com/customers/updateUser/${user._id}`, {
                  profileImg: url,
                })
                  .then((res) => {
                    console.log(res);
                    window.location.reload(true);
                  })
                  .catch((e) => {
                    console.log(`Could not save image Url. ${e}`);
                  });
              }
            );
          }
        });
      };

      const handleCoverUpload = () => {
        const storageRef = ref(storage, `coverImages/${coverImg.name}`);
        uploadBytes(storageRef, coverImg).then((snapshot) => {
          if (snapshot) {
            console.log(snapshot);
            alert("Cover Picture Changed Successfully!");
            getDownloadURL(ref(storage, `coverImages/${coverImg.name}`)).then(
              (url) => {
                Axios.patch(`https://anyhelper.herokuapp.com/customers/updateUser/${user._id}`, {
                  coverImg: url,
                })
                  .then((res) => {
                    console.log(res);
                    window.location.reload(true);
                  })
                  .catch((e) => {
                    console.log(`Could not save image Url. ${e}`);
                  });
              }
            );
          }
        });
      };

    const submitChanges = async (e) => {
        e.preventDefault();
        await Axios.patch(`https://anyhelper.herokuapp.com/customers/updateUser/${user._id}`,editUser)
        .then((res) => {
            console.log(res);
            if(profileImg === "" && coverImg=== ""){
            window.location.reload(true);
            alert("Profile Updated !");
            }
        }).catch((e) => {
            console.log(e);
        })
        if(profileImg){
            handleProfileUpload();
        }
        if(coverImg){
            handleCoverUpload();
        }
    }

    const handleProfileChange = (e) => {
        if (e.target.files[0]) {
          setProfileImg(e.target.files[0]);
        }
      };

      const handleCoverChange = (e) => {
        if (e.target.files[0]) {
          setCoverImg(e.target.files[0]);
        }
      };
    
     

    return (
        <>
            {/* <div className='EditDashboard'onClose={()=>setModal(false)}>
        <div className='editDashboardbody'>
            <form className="infoForm">
                <h3>Your Info</h3>
                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        className="infoInput"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        className="infoInput"
                    />
                </div>                

                <div>
                    <input
                        type="text"
                        placeholder="Lives in"
                        name="livesIn"
                        className="infoInput"
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        name="country"
                        className="infoInput"
                    />
                </div>
                                 
                <div className='editDashboard_image'>
                    <h6>Profile image</h6>                    
                    <input type="file" name="profileImage" />
                    <h6>Cover image</h6>                    
                    <input type="file" name="coverImage" />
                </div>

                <button className="button infoButton" type="submit">
                    Update
                </button>
            </form> 
        </div>
      </div> */}
        <div class="modal-body">
            <div className="EditDashboard_ParentMain">
                <div className="EditDashboard_Formdiv1">
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="infoInput"
                        onChange={inputsHandler}
                        value={editUser.name}
                    />

                </div>

                <div className="EditDashboard_Formdiv1">
                    <input
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        className="infoInput"
                        onChange={inputsHandler}
                        value={editUser.email}
                    />

                </div>
                

                <div className="EditDashboard_Formdiv2">
                    <input
                        type="text"
                        placeholder="Your Address"
                        name="address"
                        className="infoInput"
                        onChange={inputsHandler}
                        value={editUser.address}
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        name="country"
                        className="infoInput"
                    />
                </div>

                <div className='editDashboard_image'>
                    <h6>Profile image</h6>
                    <input type="file" name="profileImage" onChange={handleProfileChange} />
                    <h6>Cover image</h6>
                    <input type="file" name="coverImage" onChange={handleCoverChange} />
                </div>


            </div>
            <div class="modal-footer">
             <button
                 type="button"
                 class="btn btn-secondary"
                 data-bs-dismiss="modal"
             >
                 Close
             </button>
             <button type="button" onClick={submitChanges} class="btn btn-primary">
                 Save changes
             </button>
         </div>
         </div>
        </>
    );
};

export default EditUserDashboard;
