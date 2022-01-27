import { Fragment } from "react";
import Card from "../components/Card";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OffersCard from "../components/OffersCard";
import OfferSection from "../components/OfferSection";
import { DUMMY_DATAS } from "../store/DummyData";
import "./mobile.css";


const Mobile = ()=>{

    const items = DUMMY_DATAS.filter((item)=>{
        return item.category === "mobile"
    }).map(item=>{
        return(
            <Card items={item} btns={true}/>
        )
    })

    return(
        <Fragment>
            <Navbar/>
            <Category/>
            <OffersCard/>
            <div className="v-product">
                {items}
            </div>
            <OfferSection/>
            <div className="v-product">
                {items}
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Mobile;