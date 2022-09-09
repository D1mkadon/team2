import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../reducers/productsReducer';
import "./SearchBar.css"
import {FaSearch} from "react-icons/fa";

const SearchBar = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=> state.products.item)
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    const handleSearchChange = (e) =>{
        if (!e.target.value) {
            return dispatch(setSearchValue(products))
        }
        const resultArr = products.filter(product=>product.title.includes(e.target.value))
        dispatch(setSearchValue(resultArr))
    }
    return (
        <form className='searchBar-form' onSubmit={handleSubmit} > 
            <input 
                className='searchBar-input'
                type="text" 
                id='search'
                onChange={handleSearchChange}                
            />
            <button className='search-button'>
        <FaSearch/>
            </button>
        </form>
    );
};

export default SearchBar;