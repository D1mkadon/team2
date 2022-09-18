import React, { useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProducts } from '../../actions/products';
import { setCartPrice } from '../../reducers/cartReducer';
import { setCurrentProduct } from '../../reducers/productsReducer';
import "./SingleProductPage.css"

const SingleProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    // sp - single product
    console.log(id);
    useEffect(()=>{
        getSingleProducts(id)
        .then(json=>{
            dispatch(setCurrentProduct(json))
        })
    },[])
    const currentProduct = useSelector(state=> state.products.currentProduct)
    console.log(currentProduct);
    return (
        <div className='singleProductWrapper'>
            <div className='headSP'>{currentProduct.title}</div>
            <div className='foroSP'>
                <img className='fotoSP-img' src={`${currentProduct.image}`} />
            </div>
            <div className='descSP'>{currentProduct.title} - {currentProduct.description}</div>
            <div className='priceSP'>
                <div>{currentProduct.price}<span>$</span></div>
                <button onClick={()=> dispatch(setCartPrice(+currentProduct.id))}><FaCartPlus/>Add to cart </button>    
            </div> 
            
            
        </div>
    );
};

export default SingleProductPage;