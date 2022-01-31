import React from 'react';
import CartItem from './CartItem';
import "./CartItems.css"
import CartPaymentDetails from './CartPaymentDetails';

function CartItems() {
  return <div className='cart-items'>
            <div className="cart-item-list">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <CartPaymentDetails/>
        </div>;
}

export default CartItems;
