import React from 'react';
import './CustomButton.css'
const CustomButton = ({ clickHandler, title = 'Add to cart' }) => {
   
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