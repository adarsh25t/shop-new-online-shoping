import { Fragment } from "react";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import "./Cart.css";

const Cart = ()=>{
    return(
        <Fragment>
            <Navbar/>
            <div className="cart-wrapper">
                <div className="total-cart">
                    <span className="total-cart-title">My Cart (<span>10</span>)</span>
                </div>
                <CartItems/>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Cart;