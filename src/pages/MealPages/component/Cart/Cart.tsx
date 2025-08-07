import React, { useState, useEffect } from "react";
import classes from './Cart.module.css';
import iconImg from '../../../../asset/bag.png';
import CartContext from "../../../../store/cart-context";
import { useNavigate } from "react-router-dom"
import CartDetails from "./CartDetails/CartDetails";
// import Checkout from "./Checkout/Checkout";


const Cart = () => {
    const navigate = useNavigate();

    const ctx = React.useContext(CartContext);

    // 添加一个state来设置详情是否显示
    const [showDetails, setShowDetails] = useState(false);
    // 是否显示结算页面
    // const [showCheckout, setShowCheckout] = useState(false);

    // 当购物车中没有餐品时，隐藏详情页和结算页面
    // useEffect可以在组件全部渲染完后再执行里面的逻辑，避免了重复渲染
    // 如果将showDetails直接写在函数体里，当组件渲染时，set同时也在执行，导致重复渲染内存溢出
    useEffect(() => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            // setShowCheckout(false);
        }
    },[ctx.totalAmount,setShowDetails]);


    // 添加一个显示详情页的函数
    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            return;
        }
        setShowDetails(prevState => !prevState);
    };

    //显示结算页面
    const showCheckoutHandler = () => {
        if (ctx.totalAmount === 0) return;
        // setShowCheckout(true);
        navigate('/checkout');
    };

    // 隐藏结算页面
    // const hideCheckoutHandler = () => {
    //     // setShowCheckout(false);
    // };

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>

            {/* {showCheckout && < Checkout onHide={hideCheckoutHandler} />} */}

            {/*引入购物车的详情*/}
            {showDetails && <CartDetails />}
            <div className={classes.Icon}>
                <img src={iconImg} alt="iconImg" />
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>

            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> :
                <p className={classes.Price}>{ctx.totalPrice}</p>}

            <button onClick={showCheckoutHandler}
                className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
        </div>
    );

}

export default Cart;