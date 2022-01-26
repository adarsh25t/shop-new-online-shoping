import React from 'react';
import ProductColorStorage from './ProductColorStorage';
import "./ProductContent.css"
import ProductHighlight from './ProductHighlight';

function ProductContent({view}) {
  return <div className='p-content-container'>
        <div className="p-title-content">
          <h4>{view.name}</h4>
          <span>{view.custom_rate}★</span>
          <h5>₹{view.price}</h5>
        </div>
        <ProductColorStorage view={view}/>
        <ProductHighlight highligit={view.highligit}/>
  </div>;
}

export default ProductContent;
