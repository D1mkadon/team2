import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import SearchBar from '../SearchBar/SearchBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { setAddMoreProducts, setAddTotalPrice, setCartPrice, setInCart } from '../../reducers/cartReducer';
import "./ListPage.css"
import CustomButton from '../CustomButton/CustomButton';

const ListPage = () => {
    const {category}= useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchedValue , setSearchedValue] = useState('');
    
    const product = useSelector(state=> state.products.items)

    const filterItemsAndSort = useMemo(() => {
        let filteredItems;
        filteredItems = product.filter(item => item.title.toLowerCase().includes(searchedValue));
        if(category) filteredItems = filteredItems.filter(item => item.category === category);
        return sortByRating(filteredItems);
     }, [product, searchedValue]);
    

    function sortByRating(arr){
        const temp = JSON.parse(JSON.stringify(arr))
        temp.sort((a,b)=>a.rating.rate < b.rating.rate ? 1 : -1)
        return temp
    }


    const goBack = ()=>navigate(-1)
    return (
        <div className='content-products'>
                    <SearchBar setSearchedValue={setSearchedValue} />
             {
                 category
                 ? 
                 <div className='btn-and-products'>
                    <button className='list-btn' onClick={goBack}>Go back</button>
                    {
                        
                        filterItemsAndSort.map(product=>
                            <div >
                                <Product prod={product}/>
                                <CustomButton clickHandler={() =>dispatch(setAddMoreProducts(product.id , product.price)) } />
                           </div>  
                        )

                    }
                 </div>
                :
                filterItemsAndSort.map(product=>
                    <div>
                        <Product prod={product}/>
                        <CustomButton clickHandler={() =>dispatch(setAddMoreProducts(product.id , product.price)) } />
                   </div>  
                    )
               
                
                }
        </div>
    );
};

export default ListPage;