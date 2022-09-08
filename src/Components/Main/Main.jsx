import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products';
import { setSearchValue,setIsFetching, setProducts } from "../reducers/productsReducer";
import ListPage from './ListPage/ListPage';
import "./Main.css"
import SearchBar from './SearchBar/SearchBar';

const Main = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(state=> state.products.isFetching)


    useEffect(()=>{
        getProducts()
        .then(json=>{
            dispatch(setIsFetching(true))
            dispatch(setProducts(json))
            return json
        }).then(json=>{
            dispatch(setSearchValue(json))
        })
    },[])
 
    return (
        <div className='main'>
            <SearchBar/>
            {
                isFetching ===false 
                ?
                <ListPage/>       
                :
                <div className='fetching'>

                </div>
            }
        </div>
    );
};

export default Main;