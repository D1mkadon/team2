import React from 'react';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import CartWithProducts from './CartWithProducts/CartWithProducts';


const ListOfCardComponent = () => {
  const dispatch = useDispatch();
  const arrOfId = useSelector(state => state.cart.arrOfId);
  const products = useSelector(state=> state.products.items);
  const totalPrice = useSelector(state=> state.cart.totalPrice);
  const currentCard = products.filter((item) => arrOfId.includes(item.id));
  
 
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
              <CartWithProducts product={product}/>
            )
        }
    </div>
  );
};

export default ListOfCardComponent;

