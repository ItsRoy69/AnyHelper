import React from 'react';

import "../styles/Payment.css"

const Payment = ({ setModal }) => {
  return (
    <>
      <div className='backdrop-con' onClick={() => setModal(false)}>
        <div className='cardbody'>
          <div className='cardbanner'>
            <div className='leftcardbanner'>
                <h1>Payment</h1>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Payment
