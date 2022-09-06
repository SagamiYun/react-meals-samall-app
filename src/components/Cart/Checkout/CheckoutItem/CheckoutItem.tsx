import React from 'react';
import Counter from "../../../UI/Counter/Counter";
import classes from "./CheckoutItem.module.css";

function CheckoutItem(props: any) {
    return (
        <div className={classes.CheckoutItem}>
            <div className={classes.MealImg}>
                <img src={props.meal.img} alt=""/>
            </div>
            <div className={classes.Desc}>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                <div className={classes.PriceOuter}>
                    <Counter meal={props.meal}/>
                    <div className={classes.Price}>{props.meal.price * props.meal.amount}</div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutItem;