import React, { useState } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './CartDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cart-context';
import Meal from '../../Meals/Meal/Meal';
import Confirm from '../../UI/Confirm/Confirm';

const CartDetails = (props) => {
    const ctx = React.useContext(CartContext);
    // 设置state控制确认框的显示
    const [showConfirm, setShowConfirm] = useState(false);

    // 添加函数显示确认窗口
    const showConfirmHandler = () => {
        setShowConfirm(true);
    };

    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    };

    const okHandler = () => {
        // 清空购物车
        ctx.cartDispatch({ type: 'CLEAR' });
    };
    return (
        <Backdrop>
            {/* 购物车详情 */}
            {showConfirm && <Confirm
                onCancel={cancelHandler}
                onOk={okHandler}
                confirmText={'确认清空购物车吗？'} />}

            {/* stopPropagation停止事件冒泡,避免点击购物车区域导致购物车不显示 */}
            <div className={classes.CartDetails}
                onClick={e => e.stopPropagation()}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>
                        餐品详情
                    </h2>
                    <div className={classes.Clear}
                        onClick={showConfirmHandler}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>清空购物车</span>
                    </div>
                </header>

                <div className={classes.MealList}>
                    {
                        ctx.items.map(item =>
                            <Meal noDesc key={item.id} meal={item} />
                        )
                    }
                </div>



            </div>
        </Backdrop>

    )

}

export default CartDetails;