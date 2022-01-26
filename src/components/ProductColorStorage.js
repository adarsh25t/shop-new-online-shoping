import React, { Fragment } from 'react';
import "./ProductColorStorage.css";


function ProductColorStorage({view}) {
  return <div className="p-colorstorage">
        {view.color && <div className="p-color">
            <span>Color</span>
            <div className="p-color-image">
                <img src={view.image} alt="" />
                <img src={view.image} alt="" />
                <img src={view.image} alt="" />
            </div>
        </div>}

        {view.storage && <div className="p-color ">
            <span>Storage</span>
            <div className="p-color-image storage">
                <p>64</p>
                <p>128</p>
                <p>256</p>
            </div>
        </div>}
  </div>
}

export default ProductColorStorage;
