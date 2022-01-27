import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { viewProductAction } from "../store/ReduxStore/ViewDeailsSlice";
import "./Card.css";

const Card = ({items,btns})=>{

   const history = useHistory()
   const dispatch = useDispatch();

    const viewProduct = (itemId,itemCate)=>{
        dispatch(viewProductAction.addProduct({id:itemId,category:itemCate}))
        history.push("/viewdetails")
    }
    
    const cartHandler = ()=>{
        history.push("/cart")
    }
  
    return(
            <div className="card activecard" >
            <img src={items.image} alt="" onClick={()=>viewProduct(items.id,items.category)}/>
            <i class="fas fa-heart heart-i"></i>
            <h3>{items.name}</h3>
            <h4>₹{items.price}</h4>
            <p>{items.custom_rate}★</p>
            {btns && <button className="c-cart" onClick={cartHandler}><i class="fas fa-shopping-cart"></i> ADD TO CART</button>}
        </div>
    )
}
export default Card;