import React,{Fragment} from "react";
import "./Footer.css";

const Footer = ()=>{
    return(
       <Fragment>
            <div className="footer">
            <ul>
                <li className="footer-title">CONTACT INFORMATION</li>
                <li><a href="">shop now Private Limited</a></li>
                <li><a href="">+91 9087 9809 90</a></li>
                <li><a href="">0448 890 38393 </a></li>
            </ul>

            <ul>
                <li className="footer-title">CUSTOMER SUPPORT</li>
                <li><a href="">Frequent Questions</a></li>
                <li><a href="">Shipping & Return</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>

            <ul>
                <li className="footer-title">LECAL WARNING</li>
                <li><a href="">Terms of use</a></li>
                <li><a href="">Condition of contrat</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>

            <ul>
                <li className="footer-title">FOLLOW US</li>
                <li>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-google-plus-square"></i>
                </li>
                <li>
                    <h5 className="footer-title">PAYMENT METHODS</h5>
                </li>
                <li>
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-paypal"></i>
                    <i class="fab fa-cc-amex"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fab fa-cc-amazon-pay"></i>
                </li>
            </ul>
        </div>
        <div className="footer-sponsers">
        <div className="container">
            <i class="fab fa-apple"></i>
            <i class="fab fa-dhl"></i>
            <i class="fab fa-spotify"></i>
            <i class="fab fa-angrycreative"></i>
            <i class="fab fa-atlassian"></i>
        </div>
        <div className="onwer">
            <h5>copyright © 2022. created by <a href="">ADARSH .T</a></h5>
        </div>
        </div>
       </Fragment>
    )
}
export default Footer;