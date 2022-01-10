import React, { useState} from "react";
import "./NavBar.css";


const Navbar = () => {
  const [active, setActive] = useState(false);
  

  const handleClick = () => {
    setActive(!active);
  };
 
  return (
    <nav className="navbar">
      <div className="container">
      <h3 className="nav-logo">shop <span>now</span></h3>
      
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <input type="text" className="search" placeholder="search"/>
      <div className={active ? "nav-menu active" : "nav-menu"}>
         <input type="text" className="nav-search" placeholder="search"/>
          <button className="login">Login</button>
          <button className="cart"><span>0</span><i class="fas fa-shopping-cart"></i> Cart</button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
