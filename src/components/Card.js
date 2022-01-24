import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { viewProductAction } from "../store/ReduxStore/ViewDeailsSlice";
import "./Card.css";

const Card = ({items})=>{

   const history = useHistory()
   const dispatch = useDispatch();

    const viewProduct = (items)=>{
        dispatch(viewProductAction.addProduct(items))
        history.push("/viewdetails")
    }

    return(
        <div className="card" onClick={()=>viewProduct(items)}>
            <img src={items.image} alt="" />
            <i class="fas fa-heart heart-i"></i>
            <h3>{items.name}</h3>
            <h4>₹{items.price}</h4>
            <p>{items.custom_rate}★</p>
        </div>
    )
}
export default Card;