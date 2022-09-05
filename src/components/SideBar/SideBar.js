import React, { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import "./SideBar.css"

const SideBar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [])

    return (
        <div className='sideBar'>
            {
                categories.map(category => (
                    <NavLink className='category' key={category} to={`/categorie/${category}`}>{<li>{category}</li>}</NavLink>
                ))
            }
        </div>
    );
};

export default SideBar;