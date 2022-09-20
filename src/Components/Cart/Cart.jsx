import React, { useEffect } from 'react';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Main/ListPage/Product/Product';
import { setAddMoreProducts, setInCart, setRemoveItem } from '../reducers/cartReducer';
import { Link } from 'react-router-dom';


const Cart = () => {
  const dispatch = useDispatch();
  const arrOfId = useSelector(state => state.cart.arrOfId);
  const nameBtn = useSelector(state => state.cart.inCart);
  const products = useSelector(state=> state.products.item);
  const totalPrice = useSelector(state=> state.cart.totalPrice);
  // console.log(arrOfId.indexOf(3));
  const currentCard = products.filter((item) => arrOfId.includes(item.id));
  dispatch(setInCart("Delete"))


  return (
    <div className='CartWrapper'>
        {
          !totalPrice
          ?
          <div className='emptyCart'>
           <h2> Your cart is empty</h2>
           <p>But you can to correct it </p>
            <img src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs=" alt="" />
            </div>
          :
            currentCard.map(product =>
               <div>
                    <div className='totalPrice'>
                      Total price: {totalPrice.toFixed(2)}
                    </div>
                    <Link key={product.id} to={`/category/${product.id}`}>
                      <Product prod={product}/>
                    </Link>
                    <button 
                      className='customBtn' 
                      onClick={()=>{
                        dispatch(setRemoveItem(product.id,product.price))
                      }}
                      >
                        {nameBtn}
                    </button>
                    <button 
                      className='customBtn' 
                      onClick={()=>{
                        dispatch(setAddMoreProducts(product.id , product.price))
                      }}
                      >
                        +
                    </button>
                </div>
            )
        }
    </div>
  );
};

export default Cart;

