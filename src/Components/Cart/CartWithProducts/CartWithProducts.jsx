import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../Main/CustomButton/CustomButton';
import Product from '../../Main/ListPage/Product/Product';
import { setAddMoreProducts, setRemoveItem } from '../../reducers/cartReducer';
import "./CartWithProducts.css"

const CartWithProducts = ({product}) => {
    const dispatch = useDispatch();
  const totalPrice = useSelector(state=> state.cart.totalPrice);
  const arrOfId = useSelector(state => state.cart.arrOfId);
 
    for (let i = 0; i < arrOfId.length; i++) {
        for (let j = 1; j < arrOfId.length; j++) {
            if (arrOfId[i] == arrOfId[j] && arrOfId.length!=1 ) {
                console.log(arrOfId[i]);
                
            } else{
                console.log("fdf");
            }
        }        
    }
    return (
        <div>
            <div className='totalPrice'>
                Total price: {totalPrice.toFixed(2)}
            </div>
            <Product prod={product}>
                <CustomButton title = "Delete" clickHandler={() =>dispatch(setRemoveItem(product.id , product.price)) } />
                <CustomButton  clickHandler={() =>dispatch(setAddMoreProducts(product.id , product.price)) } />
            </Product>
        </div>
    );
};

export default CartWithProducts;