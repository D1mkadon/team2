import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import "./ListPage.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCategoryProducts } from '../../actions/products';
import { setProductCurrentCategory } from '../../reducers/productsReducer';
import SearchBar from '../SearchBar/SearchBar';

const ListPage = () => {
    const {category}= useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
     const searchResult = useSelector(state=>state.products.searchValue)
     const currentProductsCategory = useSelector(state=>state.products.prodCurrentCategory)
     useEffect(()=>{
        getCategoryProducts(category)
        .then(json=>{
            dispatch(setProductCurrentCategory(json))
        })
    },[])
    function sortByRating(arr){
        const temp = JSON.parse(JSON.stringify(arr))
        temp.sort((a,b)=>a.rating.rate < b.rating.rate ? 1 : -1)
        return temp
    }
    const temp = sortByRating(searchResult)
    temp.splice(5,16)
    const goBack = ()=>navigate(-1)
    return (
        <div className='content-products'>
                    <SearchBar/>
             {
                 category
                 ? 
                 <div className='btn-and-products'>
                    <button className='list-btn' onClick={goBack}>Go back</button>
                    {
                        currentProductsCategory.map(product=>
                            <Link key={product.id} to={`/product/category/${product.id}`}>
                                <Product  prod={product}/>
                            </Link>
                        )

                    }
                 </div>
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