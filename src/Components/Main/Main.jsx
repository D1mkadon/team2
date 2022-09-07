import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products';
import "./Main.css"
import Product from "./Product/Product"

const Main = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=> state.products.item)
    const isFetching = useSelector(state=> state.products.isFetching)
    const [searchValue, setSearchValue] = useState("")

    useEffect(()=>{
        dispatch(getProducts())
    },[])
    function SearchHandle(){
        dispatch(getProducts(searchValue))
    }
    return (
        <div className='main'>
            <div>
                <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type='text' placeholder='Search...' className='search-input'/>
                <button onClick={()=>SearchHandle()} className='search-buton'>Search</button>
            </div>
            {
                isFetching ===false 
                ?
            products.map(prod=><Product key={prod.id} prod={prod }/>)         
                :
                <div className='fetching'>

                </div>
            }
        </div>
    );
};

export default Main;