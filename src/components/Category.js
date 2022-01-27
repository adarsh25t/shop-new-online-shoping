import { NavLink } from "react-router-dom";
import "./Category.css";
                     

const Category = ()=>{

    return(
        <div className="category-wrapper">
            <div className="category container">
            <NavLink to={"/offers"}>
            <div className="category-item">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" />
                <h3>Top Offers</h3>
            </div>
            </NavLink>
            <NavLink to={"/mobile"}>
            <div className="category-item"> 
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                <h3>Mobiles</h3>
            </div>
            </NavLink>
            <NavLink to={"/electronics"}>
            <div className="category-item">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
                <h3>Electronics</h3>
            </div>
            </NavLink>
            <NavLink to={"/fashion"}>
            <div className="category-item">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="" />
                <h3>Fashion</h3>
            </div>
            </NavLink>
            <NavLink to={"/homes"}>
            <div className="category-item">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                <h3>Home</h3>
            </div>
            </NavLink>
            <NavLink to={"/appliances"}>
            <div className="category-item">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
                <h3>Appliances</h3>
            </div>
            </NavLink>
        </div>
        </div>
    )
}
export default Category;