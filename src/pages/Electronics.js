import { Fragment } from "react";
import Card from "../components/Card";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OffersCard from "../components/OffersCard";
import OfferSection from "../components/OfferSection";
import { DUMMY_DATAS } from "../store/DummyData";


const Electronics = ()=>{

    const items = DUMMY_DATAS.filter((item)=>{
        return item.category === "Electronics"
    }).map(item=>{
        return(
            <Card items={item} btns={true}/>
        )
    })

    return(
        <Fragment>
            <Navbar/>
            <Category/>
            <OfferSection/>
            <div className="v-product">
                {items}
            </div>
            <OffersCard/>
            <div className="v-product">
                {items}
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Electronics;