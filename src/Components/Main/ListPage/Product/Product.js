import React from 'react';
import { useDispatch } from 'react-redux';
import './Product.css';
import { setProductId } from '../../../reducers/productsReducer';
const Product = ({ prod }) => {
    const dispatch = useDispatch()
    return (
        <div key={prod.id} className='item-content' onClick={() => dispatch(setProductId(prod.id))} >
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