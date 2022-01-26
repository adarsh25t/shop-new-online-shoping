import React from 'react';
import "./ProductHighlight.css";

function ProductHighlight({highligit}) {

  const highlights = highligit.map((highlight)=>{
        return(
            <li>{highlight.title}</li>
        )
    })


  return <div className='hightlights'>
            <span>Highlights</span>
            <ul>
                {highlights}
            </ul>
        </div>;
}

export default ProductHighlight;
