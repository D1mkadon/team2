import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css'
const Product = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [id])
    console.log(product);
    return (
        <div className='product-content'>
            <div>{product.title}</div>
            <img src={product.image} />
            <div>{product.description}</div>
            <div>{product.price} $</div>
        </div>
    );
};

export default Product;