import React from 'react';
import Counter from '../../../UI/Counter/Counter';
import classes from './CheckoutItem.module.css';

const CheckoutItem = (props) => {
    return (
        <div className={classes.CheckoutItem}>
            <div className={classes.MealImg}>
                <img src={props.meal.img} alt={props.meal.id} />
            </div>
            <div className={classes.Desc}>
                <div className={classes.Title}>{props.meal.title}</div>
                <div className={classes.PriceOuter}>
                <Counter meal={props.meal} />
                <div className={classes.Price}>{props.meal.price}</div>
                </div>
            </div>
        </div>
    )

}

export default CheckoutItem;