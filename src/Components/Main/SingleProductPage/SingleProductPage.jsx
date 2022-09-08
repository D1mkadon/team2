import React from 'react';
import { useSelector } from 'react-redux';
import "./SingleProductPage.css"
const SingleProductPage = () => {
    const productId = useSelector(state=>state.products.productId)
    const productsArr = useSelector(state=>state.products.item)
    const currentProduct = productsArr.find(item => item.id == productId);
// sp - single product
    return (
        <div className='singleProductWrapper'>
            <div className='headSP'>{currentProduct.title}</div>
            <div className='rateSP'>{currentProduct.rating.rate}</div>
            <div className='idSP'>{currentProduct.id}</div>
            <div className='foroSP'>
                <img src={`${currentProduct.image}`} />
            </div>
            <div className='descSp'>{currentProduct.description}</div>
            <div className='priceSP'>{currentProduct.price}</div>
            
            
        </div>
    );
};

export default SingleProductPage;