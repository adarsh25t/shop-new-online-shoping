import React, { Fragment } from 'react';
import CartItem from '../components/CartItem';
import Category from '../components/Category';
import Navbar from '../components/NavBar';
import "./Wishlist.css";

function Wishlist() {
  return <Fragment>
            <Navbar/>
            <Category/>
            <div className="wish-list-wrapper">
            <div className="wishlist-items">
                <h4 className="wish-list-title">My Wishlist (<span>10</span>)</h4>
                <CartItem/>
                <CartItem/>
            </div>
            <div className="wishlist-profile">
                <div className="wish-profile-head">
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="" />
                    <div className="wishlist-profile-content">
                        <span>Hello,</span>
                        <span>ADARSH T</span>
                    </div>
                </div>
                <div className="wishlist-profile-body">
                    
                </div>
            </div>
            </div>
        </Fragment>
}

export default Wishlist;
