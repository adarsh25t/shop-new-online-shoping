import { useState } from "react";
import { useSelector } from "react-redux";

const ViewDetails = ()=>{

    const view  = useSelector((state)=>{
        return state.view
    })

    
   const product = view.map((item)=>{
        return(
            <div>
                <img src={item.image} alt="" />
            </div>
        )
    })
  

    return(
        <div>
            <h1>product</h1>
            {product}
        </div>
    )
}
export default ViewDetails;