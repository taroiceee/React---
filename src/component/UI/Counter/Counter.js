import React,{useContext} from 'react';
import classes from './Counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cart-context';

// 计数器组件
const Counter = (props) => {

    // 获取cartContext
    const ctx = useContext(CartContext);
    // 添加购物车的函数
    const addButtonHandler = () => {
        ctx.cartDispatch({type:'ADD', meal:props.meal});
    };

    // 删除食物的函数
    const subButtonHandler = () => {
        
        ctx.cartDispatch({type:'REMOVE', meal:props.meal});
    };


    return (
        <div className={classes.Counter}>
            {(props.meal.amount && props.meal.amount !== 0) ?
                <>
                    <button onClick={subButtonHandler} className={classes.Sub}><FontAwesomeIcon icon={faCircleMinus} style={{ color: "#bababa", }} /></button>
                    <span className={classes.count}> {props.meal.amount}</span>
                </>
                : null}


            <button onClick={addButtonHandler} className={classes.Add}><FontAwesomeIcon icon={faCirclePlus} style={{ color: "#FFD43B", }} /></button>

        </div>

    )
}

export default Counter;