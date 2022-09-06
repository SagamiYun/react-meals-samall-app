import React from 'react';
import classes from './Bar.module.css';

function Bar(props: any) {
    return (
        <div className={classes.Bar}>
            <span className={classes.Price}> 合计： </span>
            <div className={classes.TotalPrice}>{props.totalPrice}</div>
            <button className={classes.Button}>去支付</button>
        </div>
    );
}

export default Bar;