import React, { useEffect } from 'react';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Main/ListPage/Product/Product';
import { setRemoveItem } from '../reducers/cartReducer';
import { Link } from 'react-router-dom';
// import { getSingleProducts } from '../../actions/products';
// import { setCartPrice } from '../../reducers/cartReducer';
// import { setCurrentProduct } from '../../reducers/productsReducer';


const Cart = () => {
  const dispatch = useDispatch();
  const arrOfId = useSelector(state => state.cart.arrOfId);
  const products = useSelector(state=> state.products.item);
  // console.log(idProduct);
  // const temp = JSON.parse(JSON.stringify(products));
  // const arr = [];

  // arrOfId.forEach(element => {
  //   let s = (temp.find(item=>item.id === element));
  //   arr.push(s)
  // });
//=====================
  const currentCard = products.filter((item) => arrOfId.includes(item.id));

//  console.log(arr);
 function handlerDelete(index){
  dispatch(setRemoveItem(index))
 }
  return (
    <div className='CartWrapper'>
        {
            currentCard.map(product =>
               <>
                    <Link key={product.id} to={`/product/category/${product.id}`}>
                      <Product prod={product}/>
                    </Link>
                    <button onClick={()=>handlerDelete(product.id)}>Delete</button>
                </>
            )
        }
    </div>
  );
};

export default Cart;

