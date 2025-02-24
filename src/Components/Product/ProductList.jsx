import React from 'react'
import products from '../../products.js';
import star from '../../assets/star.png';
import './ProductList.css';

const ProductList = ( ) => {
 
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="product-list-card">
          
          <img src={product.image} alt={product.title} className="product-list-image" />
          <h3 className="product-list-title">{product.title}</h3>
          <p className="product-list-price">{product.price}</p>
            
            <div className="star">
                {[...Array(5)].map((_, i) => (
                <img key={i} src={star} alt="star rating" className="star" />
                ))}
            </div>
        
        </div>
      ))}
    </div>
  );
};
export default ProductList