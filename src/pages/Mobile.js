import { useSelector } from "react-redux";
import Card from "../components/Card";
import "./mobile.css";

const Mobile = ()=>{

   const product = useSelector((state)=>{
        return state.product.products;
    })

    

  const items = product.map((item)=>{
        return(
            <Card items={item}/>
        )
    })

    return(
        <div className="v-product">
            {items}
        </div>
    )
}
export default Mobile;