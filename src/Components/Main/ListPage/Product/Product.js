import React from 'react';
import './Product.css';
import {FaStar} from "react-icons/fa";
const Product = ({ prod }) => {
    return (
        <div key={prod.id} className='item-content' >
            <div className='img-wrapper'>
                <img className='product-img' src={prod.image} alt={"product img"}/>
            </div>
            <div className='prodAndPrice'>
                <div className='product-title'><span>{prod.title}</span></div>
                <hr/>
                <div className='product-price'>{prod.price} $</div>
                <div className='product-rate'>{prod.rating.rate} <FaStar/></div>
            </div>
        </div>
    );
};

export default Product;