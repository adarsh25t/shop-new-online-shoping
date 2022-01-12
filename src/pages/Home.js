import { Fragment } from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import OffersCard from "../components/OffersCard";
import SlideItem from "../components/SlideItem";
import Footer from "../components/Footer";

const Home = ()=>{
    return(
        <Fragment>
            <Navbar/>
            <Hero/>
            <Category/>
            <SlideItem title={"Deals of the Day"}/>
            <SlideItem title={"Deals of the Day"}/>
            <OffersCard/>
            <SlideItem title={"Deals of the Day"}/>
            <Footer/>
        </Fragment>
    )
}
export default Home;