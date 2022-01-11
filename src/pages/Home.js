import { Fragment } from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";


const Home = ()=>{
    return(
        <Fragment>
            <Navbar/>
            <Hero/>
            <Category/>
        </Fragment>
    )
}
export default Home;