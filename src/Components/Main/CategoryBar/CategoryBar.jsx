import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategory } from '../../actions/products';
import { setIsActive, setProductCategory } from '../../reducers/productsReducer';
import './CategoryBar.css'


const CategoryBar = () => {
    const dispatch = useDispatch()
    const category  = useSelector(state=> state.products.prodCategory)
    const isActive  = useSelector(state=> state.products.isActive)
    useEffect (()=>{
        getCategory()
        .then(json=>{
            dispatch(setProductCategory(json))
        })
    },[])
  
    
    return (
        <div className='category-wrapper'>
            {
                isActive === true
                ?
                <div>
                    <div className='category-btn' onClick={()=>dispatch(setIsActive(!isActive))}>
                        Category
                    </div>
                    <div className='listCategory'>
                        <Link to={`/product/${category[0]}`}>
                            {category[0]}
                        </Link>
                        <Link to={`/product/${category[1]}`}>
                            {category[1]}
                        </Link>
                        <Link to={`/product/${category[2]}`}>
                            {category[2]}
                        </Link>
                        <Link to={`/product/${category[3]}`}>
                            {category[3]}
                        </Link>
                    </div>
                </div>
                :
            <div className='category-btn' onClick={()=>dispatch(setIsActive(!isActive))}>
                Category
            </div>
            }
           
        </div>
    );
};

export default CategoryBar;