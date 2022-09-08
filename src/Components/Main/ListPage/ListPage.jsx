import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product';
import "./ListPage.css"
import { Link } from 'react-router-dom';

const ListPage = () => {
    
    const searchResult = useSelector(state=>state.products.searchValue)
    function sortByRating(arr){
        const temp = JSON.parse(JSON.stringify(arr))
        temp.sort((a,b)=>a.rating.rate < b.rating.rate ? 1 : -1)
        return temp
    }
    const temp = sortByRating(searchResult)
    temp.splice(5,16)
    return (
        <div className='content-products'>
            
             {
               
                 temp.map(product=>
                    <Link to={`/product/${product.id}`}>
                        <Product key={product.id} prod={product}/>
                    </Link>
                )
               
                
            } 
        </div>
    );
};

export default ListPage;