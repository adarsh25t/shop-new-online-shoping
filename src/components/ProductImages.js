import { useState } from "react";
import "./ProductImages.css";

const ProductImages = ({images})=>{

    const [showImage,setShowImage] = useState(images[0].url);

    const imageHoverHandler = (url)=>{
        setShowImage(url);
    } 

  const image = images.map((image)=>{
        return(
            <div className="p-images-item" onMouseEnter={()=>imageHoverHandler(image.url)}>
               
                <img src={image.url} alt="" />
            </div>
        )
    })

    return(
        <div>
            <div className="p-images">
               <div className="p-images-list">
                    {image}
               </div>
               <div className="p-show-image">
                    <i class="fas fa-heart heart-i"></i>
                    <img src={showImage} alt="" />
                    <div className="p-btns">
                        <button className="p-cart"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
                        <button className="p-buy"><i class="fas fa-shopping-basket"></i> BUY NOW</button>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default ProductImages;