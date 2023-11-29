import React from 'react'
import './CheckOut.css'

const CheckOut = () => {
  return (
    <div className='checkoutheader'>
        <div className="billing-field">
            <h1>BILLING DETAILS</h1>
        <div className='billing-input'>
            First Name
            <input type="text" placeholder=''/>
            Last Name *
            <input type="text" placeholder=''/>
            Street address *
            <input type="text" placeholder=''/>
            Town / City  *
            <input type="text" placeholder=''/>
            State/ County  *
            <input type="text" placeholder=''/>
            Zip Code  *
            <input type="text" placeholder=''/>
            Phone
            <input type="text" placeholder='+63'/>
            Notes
            <input type="text" className='notes' placeholder='Order Notes (Optional)'/>
         </div>
         </div>
        <div className="payment-method">
            <h1>PAYMENT METHOD</h1>
            <span>Credit Card (Stripe)</span>
            <div className="payment-input">
            Card Number *
           <input type="text" className="pay" placeholder='0000 0000 0000 0000' />
            Expiry Date * 
            <input type="text" className="pay" placeholder='MM / YY' />
            Card Code (CVC) *
            <input type="text" className="pay" placeholder='CVC' />
            <button>Place Order</button>
            </div>
          </div>
    </div>
  )
}

export default CheckOut