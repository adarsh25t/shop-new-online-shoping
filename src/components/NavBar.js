import React, { useState} from "react";
import "./NavBar.css";
import logo from "../accets/logo.png";
import Button from '@mui/material/Button';




const Navbar = () => {
  const [active, setActive] = useState(false);

  const style = {
    backgroundColor: "white",
    color:"black"
  }

  const handleClick = () => {
    setActive(!active);
  };
 
  return (
    <nav className="navbar">
      <div className="container">
      <img src={logo} className="nav-logo" alt="" />
      
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <input type="text" className="search" placeholder="search"/>
      <div className={active ? "nav-menu actives" : "nav-menu"}>
         <input type="text" className="nav-search" placeholder="search"/>
          <Button variant="contained" color="primary" style={style}>Login</Button>
          <h4 className="cart"><span>0</span><i class="fas fa-shopping-cart"></i> Cart</h4>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
