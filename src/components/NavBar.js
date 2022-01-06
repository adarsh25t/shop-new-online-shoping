import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {

  const [login,setLogin] = useState(false);
  const [active,setActive] = useState(false);
  
  const MobileNav = ()=>{
      setActive(!active)
  }

  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container">
        <a class="navbar-brand" href="#">
          Shop now
        </a>
        <button onClick={MobileNav}
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div className={active ?"active" : "collapse navbar-collapse"} id="navbarSupportedContent">
        <div class="input-group mb-3 search">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span class="input-group-text " id="basic-addon2"><i class="fas fa-search"></i></span>
        </div>
          <ul class="navbar-nav  mb-2 mb-lg-0">
             {!login ? <li class="nav-item login">
              <a class="nav-link login-btn" aria-current="page" href="#">
                Login
              </a>
            </li> : <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>}
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
              <i class="fas fa-shopping-cart"></i> Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
