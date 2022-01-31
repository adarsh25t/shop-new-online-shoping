import React from 'react';
import "./CartItem.css";

function CartItem() {
  return <div className="cart-item-wrapper">
        <div className="cart-item">
            <img src="https://rukminim1.flixcart.com/image/224/224/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=90" alt="" />
            <div className="cart-item-details">
                <h3 className="cart-item-name">APPLE iPhone 12 Mini (White, 64 GB)</h3>
                <h4 className="cart-item-status">In Stock</h4>
                <h4 className="cart-item-price">56000</h4>
                <button className="p-buy"><i class="fas fa-shopping-basket"></i> BUY NOW</button>
                <button className="p-remove"><i class="fas fa-trash-alt"></i> REMOVE ITEM</button>
            </div>
        </div>
  </div>;
}

export default CartItem;
