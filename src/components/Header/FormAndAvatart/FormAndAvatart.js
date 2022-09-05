import React from 'react';
import { Link } from 'react-router-dom';
import "./FormAndAvatart.css"


const FormAndAvatart = () => {
    return (
        <div className='formAndAvater-wrapper'>
            <Link to="/">Logo</Link>
            <form>
                <input type="text" placeholder='Що шукаєш ?' />
                <button>Search</button>
            </form>
        </div>
    );
};

export default FormAndAvatart;