import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddMoreProducts, setAddTotalPrice, setCartPrice } from '../../reducers/cartReducer';
import './CustomButton.css'
const CustomButton = ({ prod, clickHandler, title = 'Add' }) => {
    const dispatch = useDispatch();
    // const buttonName = useSelector(state => state.cart.inCart)

    return (
        <input 
        type="button" 
        value={title} 
        className='customBtn' 
        onClick={clickHandler}
        /> 
    );
};

export default CustomButton;