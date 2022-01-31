import React from 'react';
import "./CartPaymentDetails.css";

function CartPaymentDetails() {
  return <div className='cart-payment-details'>
        <h3 className="price-title">PRICE DETAILS</h3>
        <div className="price-item">
            <span>Price (12 items)</span> 
            <span>49 313</span>
        </div>
        <div className="price-item">
            <span>Discount</span> 
            <span className=' price-green'>-19 357</span>
        </div>
        <div className="price-item">
            <span>Delivery Charges</span> 
            <span className='price-green'>FREE</span>
        </div>
        <div className="price-item price-total-amount">
            <span>Total Amount</span> 
            <span>29 956</span>
        </div>
        <p className='cart-payment-footer'><i class="fas fa-check-square"></i> Safe and Secure Payments.Easy returns.100% Authentic products.</p>
  </div>;
}

export default CartPaymentDetails;
