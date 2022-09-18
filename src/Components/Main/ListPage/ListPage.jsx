import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product';
import classes from "./ListPage.module.css";
import { Link } from 'react-router-dom';

const ListPage = () => {

    const searchResult = useSelector(state=>state.products.searchValue)
    function sortByRating(arr){
        const temp = JSON.parse(JSON.stringify(arr))
        temp.sort((a,b)=>a.rating.rate < b.rating.rate ? 1 : -1)
        return temp
    }
    const temp = sortByRating(searchResult)
    // temp.splice(5,16)
    return (
        <div className={classes.contentProducts}>
            
             {
               
                 temp.map(product=>
                 <div className={classes.linkBoxStyle} >
                     <Link className={classes.linkStyle} key={product.id} to={`/product/${product.id}`}>
                        <Product prod={product}/>
                    </Link>
                 </div>
                )
               
                
            } 
        </div>
    );
};

export default ListPage;