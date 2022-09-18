import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import { getSingleProducts } from '../../actions/products';
// import { setCartPrice } from '../../reducers/cartReducer';
// import { setCurrentProduct } from '../../reducers/productsReducer';


const Cart = () => {
  const id = useSelector(state => state.cart.id)
  console.log(id)
  return (
    <div>
        
    </div>
  );
};

export default Cart;

