import { useState } from "react";
import { useSelector } from "react-redux";
import ProductImages from "../components/ProductImages";

const ViewDetails = ()=>{

    const view  = useSelector((state)=>{
        return state.view.product
    })

    

    return(
        <div>
            <h1>product</h1>
            <ProductImages images={view.images}/>
        </div>
    )
}
export default ViewDetails;