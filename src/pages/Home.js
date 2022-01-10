import { Fragment } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";


const Home = ()=>{
    return(
        <Fragment>
            <Navbar/>
            <Hero/>
        </Fragment>
    )
}
export default Home;