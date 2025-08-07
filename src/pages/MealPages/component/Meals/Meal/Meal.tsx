import React from 'react';
import classes from './Meal.module.css';
import Counter from '../../UI/Counter/Counter';

// 食物组件
const Meal = (props) => {
    // 食物
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} alt={props.meal.title} />
            </div>
            <div className={classes.DescBox}>
                <h2 className={classes.Title}>{props.meal.title}</h2>

                {props.noDesc ? null : <p className={classes.Desc}>{props.meal.desc}</p>}
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>{props.meal.price}</span>
                    <Counter
                        onAdd={props.onAdd}
                        onSub={props.onSub}
                        meal={props.meal} />
                </div>
            </div>
        </div>
    )
}

export default Meal;

