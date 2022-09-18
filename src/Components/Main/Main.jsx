import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products';
import { setSearchValue,setIsFetching, setProducts } from "../reducers/productsReducer";
import CategoryBar from './CategoryBar/CategoryBar';
import ListPage from './ListPage/ListPage';
import classes from "./Main.module.css";
import SearchBar from './SearchBar/SearchBar';

const Main = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(state=> !!state.products.length)


    useEffect(()=>{
        getProducts()
        .then(json=>{
            dispatch(setSearchValue(json))
        })
    },[])
 
    return (
        <div className={classes.main}>
            <CategoryBar/>
            {
                !isFetching 
                ?
                <div>
                    <ListPage/>       
                </div>
                :
                <div className={classes.fetching}>

                </div>
            }
        </div>
    );
};

export default Main;