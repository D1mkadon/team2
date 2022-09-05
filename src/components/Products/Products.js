import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Products.css"

const Products = () => {
    const { id1 } = useParams();
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${id1}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [id1])


    return (
        <div className='products-page'>
            {
                products.map(({ title, id, image }) => {
                    return <Link key={id} className="product" to={`/categorie/${id1}/${id}`}>
                        <img src={image} />
                        <div>{title}</div>
                    </Link>
                })
            }

        </div>

    );
};

export default Products;