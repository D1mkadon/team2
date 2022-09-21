import React from 'react';
import { useDispatch } from 'react-redux';
import './CustomButton.css'
const CustomButton = ({ clickHandler, title = 'Add to cart' }) => {
    const dispatch = useDispatch();
   
    const btnBgClassName = title === "Add to cart" ? "customBtnAdd" : "customBtnRemove";
    const btnClasses = [ "customBtn ", btnBgClassName ]

    return (
        <input 
        type="button" 
        value={title} 
        className={btnClasses.join(" ")} 
        onClick={
            clickHandler
        }
        /> 
    );
};

export default CustomButton;