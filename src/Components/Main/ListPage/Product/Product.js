import React from 'react';
import './Product.css';
import { FaStar } from 'react-icons/fa';
const Product = ({ prod }) => {
    return (
        <div key={prod.id} className='item-content' >
            <div className='product-rate'>{prod.rating.rate} <FaStar /> </div>
            <div className='img-wrapper'>
                <img className='product-img' src={prod.image} />
            </div>
            <div className='prodAndPrice'>
                <div className='product-title'>{prod.title}</div>
                <div className='product-price'>{prod.price} $</div>
            </div>
        </div>
    );
};

export default Product;