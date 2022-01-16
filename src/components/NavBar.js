import React, { useState} from "react";
import "./NavBar.css";
import logo from "../utilities/logo.png";
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginPageActions } from "../store/ReduxStore/LoginPageSlice";
import { NavLink } from "react-router-dom";

const Navbar = ({setlogin}) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const style = {
    backgroundColor: "white",
    color:"black"
  }

  const handleClick = () => {
    setActive(!active);
  };

  const loginShowHandler = ()=>{
    dispatch(loginPageActions.loginPageShow())
  }

 
  return (
    <nav className="navbar">
      <div className="container">
      <NavLink to={"/"}><img src={logo} className="nav-logo" alt="" /></NavLink>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <input type="text" className="search" placeholder="search"/>
      <div className={active ? "nav-menu actives" : "nav-menu"}>
         <input type="text" className="nav-search" placeholder="search"/>
          <Button variant="contained" color="primary" style={style} onClick={loginShowHandler}>Login</Button>
          <NavLink to={"/cart"}><h4 className="cart"><span>0</span><i class="fas fa-shopping-cart"></i> Cart</h4></NavLink>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
