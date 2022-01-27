import { Fragment } from "react";
import { useSelector } from "react-redux";
import Category from "../components/Category";
import Navbar from "../components/NavBar";
import ProductContent from "../components/ProductContent";
import ProductImages from "../components/ProductImages";
import SlideItem from "../components/SlideItem";
import "./viewDetails.css";

const ViewDetails = ()=>{

    const view  = useSelector((state)=>{
        return state.view.product
    })

    

    return(
        <Fragment>
            <Navbar/>
            <Category/>
            <div className="view-product">
                <ProductImages images={view.images}/>
                <ProductContent view={view}/>
            </div>
            <SlideItem title={"Similar products"}/>
        </Fragment>
    )
}
export default ViewDetails;