import "./Card.css";

const Card = ({items})=>{
    return(
        <div className="card">
            <img src={items.image} alt="" />
            <i class="fas fa-heart heart-i"></i>
            <h3>{items.name}</h3>
            <h4>₹{items.price}</h4>
            <p>{items.custom_rate}★</p>
        </div>
    )
}
export default Card;