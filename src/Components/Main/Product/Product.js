import React from 'react';
import './Product.css';
const product = (props) => {
    const prod = props.prod
    return (
        <div key={prod.id} className='item-content'>
            <div>{prod.title}</div>
            <div>{prod.price}</div>
            <img className='product-img' src={prod.image} />
        </div>
    );
};

export default product;