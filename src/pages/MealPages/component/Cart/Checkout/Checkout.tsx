import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../../../store/cart-context';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar';

interface CheckoutProps {
    onHide?: () => void; // 使 onHide 成为可选
}

const checkoutRoot = document.getElementById('checkout-root');

const Checkout: React.FC<CheckoutProps> = (props) => {
    const { items, totalPrice } = useContext(CartContext);

    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon icon={faClose} onClick={props.onHide} />
            </div>
            <div className={classes.MealsDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                </header>

                <div className={classes.MealsList}>
                    {items.map(item => <CheckoutItem key={item.id} meal={item} />)}
                </div>

                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>{totalPrice}</p>
                </footer>
            </div>

            <Bar totalPrice={totalPrice} />
        </div>,
        checkoutRoot!
    );
};

export default Checkout;
