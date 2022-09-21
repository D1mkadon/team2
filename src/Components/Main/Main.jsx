import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products';
import { setProducts } from "../reducers/productsReducer";
import ListPage from './ListPage/ListPage';
import classes from "./Main.module.css";

const Main = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(state=> !!state.products.isFetching)
console.log(isFetching);

    useEffect(()=>{
        getProducts()
        .then(json=>{
            dispatch(setProducts(json))
        })
    },[])
 
    return (
        <div className={classes.main}>
            {/* <CategoryBar/> */}
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