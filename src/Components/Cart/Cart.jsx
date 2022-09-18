import React, { useEffect } from 'react';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Main/ListPage/Product/Product';
import { setRemoveItem } from '../reducers/cartReducer';
// import { getSingleProducts } from '../../actions/products';
// import { setCartPrice } from '../../reducers/cartReducer';
// import { setCurrentProduct } from '../../reducers/productsReducer';


const Cart = () => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.cart.id)
  const idProduct = useSelector(state=> state.products.item)
  // console.log(idProduct);
  const temp = JSON.parse(JSON.stringify(idProduct));
  const arr = [];

  id.forEach(element => {
    let s = (temp.find(item=>item.id === element));
    arr.push(s)
  });
 console.log(arr);
 function handlerDelete(index){
  dispatch(setRemoveItem(index))
 }
  return (
    <div className='CartWrapper'>
        {
            arr.map(product=>
                <div key={product.id} to={`/product/category/${product.id}`}>
                    <Product prod={product}/>
                    <button onClick={handlerDelete(product.id)}>Delete</button>
                </div>
            )
        }
    </div>
  );
};

export default Cart;

