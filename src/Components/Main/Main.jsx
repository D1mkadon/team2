import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products';
import { setIsFetching, setProducts } from "../reducers/productsReducer";
import CategoryBar from './CategoryBar/CategoryBar';
import ListPage from './ListPage/ListPage';
import classes from "./Main.module.css";

const Main = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(state=> !!state.products.isFetching)


    useEffect(()=>{
        getProducts()
        .then(json=>{
            dispatch(setProducts(json))
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