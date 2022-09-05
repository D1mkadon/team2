import React from 'react';
import { Link } from 'react-router-dom';
import FormAndAvatart from './FormAndAvatart/FormAndAvatart';
import "./Header.css"

const Header = () => {
    return (
        <header>
            <FormAndAvatart />
            <Link to="/">Мій кабінет</Link>
            <Link to="/cart">Кошик</Link>

        </header>
    );
};

export default Header;