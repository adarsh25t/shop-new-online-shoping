import { Fragment, useState } from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import OffersCard from "../components/OffersCard";
import SlideItem from "../components/SlideItem";
import Footer from "../components/Footer";
import Login from "../components/Login";

const Home = ()=>{

    const [login,setlogin] = useState(false);

    return(
        <Fragment>
            <Navbar setlogin={setlogin}/>
            <Hero/>
            <Category/>
            <SlideItem title={"Deals of the Day"}/>
            { login ? <Login setLogin={setlogin} login={login}/> :
            <main>
            <SlideItem title={"Deals of the Day"}/>
            <SlideItem title={"Deals of the Day"}/>
            <OffersCard/>
            <SlideItem title={"Deals of the Day"}/>
            <OffersCard/>
            <SlideItem title={"Deals of the Day"}/>
            <SlideItem title={"Deals of the Day"}/>
            <Footer/>
            </main>}
        </Fragment>
    )
}
export default Home;