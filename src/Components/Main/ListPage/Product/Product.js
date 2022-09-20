import React from 'react';
import './Product.css';
import { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { setAddTotalPrice, setCartPrice } from '../../../reducers/cartReducer';
import { useDispatch } from 'react-redux';
const Product = ({ prod }) => {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const redirectHandler = () => navigate(`/category/${prod.id}`);

    return (
        <div key={prod.id} className='item-content' onClick={redirectHandler} >
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