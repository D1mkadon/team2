import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import SearchBar from '../SearchBar/SearchBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { setAddTotalPrice, setCartPrice } from '../../reducers/cartReducer';
import { setAllCurrentProduct, setCaregorySearchValue, setCurrentProduct, setSearchValue } from '../../reducers/productsReducer';
import { getProducts } from '../../actions/products';
import "./ListPage.css"

const ListPage = () => {
    const {category}= useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const searchResult = useSelector(state=>state.products.searchValue)

    function sortByRating(arr){
        const temp = JSON.parse(JSON.stringify(arr))
        temp.sort((a,b)=>a.rating.rate < b.rating.rate ? 1 : -1)
        return temp
    }
    useEffect(() => {
        getProducts()
        .then(json=>{
            dispatch(setSearchValue(json))
            dispatch(setCaregorySearchValue(category))
            if (category) {
                dispatch(setCurrentProduct(category))
            }else{

                dispatch(setAllCurrentProduct(json))
            }

        })
    }, []);
   

    // const handleSearchChange = (e) =>{
    //     if (!e.target.value) {
    //         return dispatch(setSearchValue(products))
    //     }
    //     const resultArr = products.filter(product=>product.title.includes(e.target.value))
    //     dispatch(setSearchValue(resultArr))
    // }

    const temp = sortByRating(searchResult)
    temp.splice(5,temp.length)

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
                        
                        searchResult.map(product=>
                            <div >
                                <Link key={product.id} to={`/category/${product.id}`}>
                                    <Product prod={product}/>
                                </Link>
                                <input 
                                    type="button" 
                                    value={"add to cart"} 
                                    className='customBtn' 
                                    onClick={()=>{
                                         dispatch(setCartPrice(+product.id))
                                         dispatch(setAddTotalPrice(product.price))
                                    }}
                                /> 
                           </div>  
                        )

                    }
                 </div>
                :
                temp.map(product=>
                    <div>
                                <Link key={product.id} to={`/category/${product.id}`}>
                                    <Product prod={product}/>
                                </Link>
                                <input 
                                    type="button" 
                                    value={"add to cart"} 
                                    className='customBtn' 
                                    onClick={()=>{
                                         dispatch(setCartPrice(+product.id))
                                         dispatch(setAddTotalPrice(product.price))
                                    }}
                                /> 
                           </div>  
                    )
               
                
                }
        </div>
    );
};

export default ListPage;