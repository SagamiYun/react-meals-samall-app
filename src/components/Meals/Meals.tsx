import React from 'react';
import classes from './Meals.module.css';
import Meal from "./Meal/Meal";

function Meals(props: any) {
    return (
        <div className={classes.Meals}>
            {props.mealsData.map((item: any) =>
                <Meal
                    key={item.id}
                    meal={item}
                />
            )}
        </div>
    );
}

export default Meals;