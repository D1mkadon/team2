import React from 'react';
import './Product.css';
const Product = ({ prod }) => {
    return (
        <div key={prod.id} className='item-content' >
            <div className='img-wrapper'>
                <img className='product-img' src={prod.image} />
            </div>
            <div className='prodAndPrice'>
                <div className='product-title'>{prod.title}</div>
                <div className='product-price'>{prod.price} $</div>
                <div className='product-price'>{prod.rating.rate} *</div>
            </div>
        </div>
    );
};

export default Product;