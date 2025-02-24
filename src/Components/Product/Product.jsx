import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../../Components/Header/Header.jsx'
import ProductList from './ProductList.jsx';
import './Product.css'
import cartoon from '../../assets/products/cartoon.png'

const Product = () => {

  const { category } = useParams();
  console.log("Category from URL:", category);
  return (
        <div className="product-container">
            <Header  display = {true} />
            <div className={`title-container`}>
              <div className="text-container">
                <h1 className={`product-title`}>{category}</h1>
                <p className={`product-description`}>Taste the Excellence!</p>
              </div>
              <div className={`product-cartoon-container`}>
                <img src={cartoon} alt='cartoon' className='product-cartoon'/>
              </div>
            </div>

            <ProductList />
        </div>
  );
};

export default Product;