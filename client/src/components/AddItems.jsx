import React, { useState } from 'react'
import "../styles/UserDashboardAddItems.css"
const AddItems = () => {
    const [file, setFile] = useState();

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    };


    return (
        <>
            <div className='inputParentDiv' >
                <input
                    type="text"
                    placeholder="Enter item name"
                    name='item'
                    className="infoInput"

                />
                <input
                    type="text"
                    placeholder="Enter item quantity available"
                    name='item'
                    className="infoInput"

                />

                <textarea class="form-control" placeholder="Description of the item" id="floatingTextarea"></textarea>

                <input class="form-control" type="file" id="formFile" onChange={handleChange} />
                <img src={file} className="modal-body-parent_imagePreview" />

            </div>

        </>
    )
}

export default AddItems