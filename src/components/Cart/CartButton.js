import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = props => {
  const dispatch = useDispatch();

  const { totalAmount, totalQuantity } = useSelector(state => state.cart);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
      <span className={classes.badge}>${totalAmount}</span>
    </button>
  );
};

export default CartButton;
