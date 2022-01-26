import { useState } from "react";
import "./ProductImages.css";

const ProductImages = ({images})=>{

    const [showImage,setShowImage] = useState(images[0].url);
    const [activeImage,setActiveImage] = useState(false)

    const imageHoverHandler = (url)=>{
        setShowImage(url);
        setActiveImage(true)
    } 

  const image = images.map((image)=>{
        return(
            <div className={activeImage ? "p-images-item activeimage" : "p-images-item"}  onMouseEnter={()=>imageHoverHandler(image.url)}>
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