import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import "./ListPage.css"
import { Link, useParams } from 'react-router-dom';
import { getCategoryProducts } from '../../actions/products';

const ListPage = () => {
    const {category}= useParams()
    const dispatch = useDispatch()
    console.log(category);
     const searchResult = useSelector(state=>state.products.searchValue)
     useEffect(()=>{
        getCategoryProducts(category)
        .then(json=>{
            console.log(json);
            return json
        }).then(json=>{
        })
    },[])
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
               category
               ?
                 temp.map(product=>
                    <Link key={product.id} to={`/product/category/${product.id}`}>
                        <Product  prod={product}/>
                    </Link>
                )
                :
                temp.map(product=>
                    <Link key={product.id} to={`/product/category/${product.id}`}>
                        <Product  prod={product}/>
                    </Link>
                    )
               
                
                }
        </div>
    );
};

export default ListPage;