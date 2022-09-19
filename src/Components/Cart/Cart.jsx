import React, { useEffect } from 'react';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Main/ListPage/Product/Product';
import { setInCart, setRemoveItem } from '../reducers/cartReducer';
import { Link } from 'react-router-dom';


const Cart = () => {
  const dispatch = useDispatch();
  const arrOfId = useSelector(state => state.cart.arrOfId);
  const nameBtn = useSelector(state => state.cart.inCart);
  const products = useSelector(state=> state.products.item);
 
  const currentCard = products.filter((item) => arrOfId.includes(item.id));
  dispatch(setInCart("Delete"))
 console.log(currentCard);
 function handlerDelete(index){
  dispatch(setRemoveItem(index))
 }
  return (
    <div className='CartWrapper'>
        {
            currentCard.map(product =>
               <div>
                    <Link key={product.id} to={`/category/${product.id}`}>
                      <Product prod={product}/>
                    </Link>
                    <button 
                      className='customBtn' 
                      onClick={()=>{
                        handlerDelete(product.id)
                      }}
                      >
                        {nameBtn}
                    </button>
                </div>
            )
        }
    </div>
  );
};

export default Cart;

