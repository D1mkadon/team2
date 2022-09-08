import React from 'react';
import classes from './Product.module.css';
const product = (props) => {
    const prod = props.prod
    return (
        <div key={prod.id} className={classes.itemContent}>
            <div>{prod.title}</div>
            <div>{prod.price}</div>
            <img className={classes.productImg} src={prod.image} />
        </div>
    );
};

export default product;