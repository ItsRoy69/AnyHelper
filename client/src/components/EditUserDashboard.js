import React from 'react';

import "../styles/EditUserDashboard.css";

const EditUserDashboard = ({  setModal }) => {


  return (
    <>
      <div className='EditDashboard'onClose={()=>setModal(false)}>
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
      </div>

    </>
  )
}

export default EditUserDashboard
