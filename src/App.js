import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from './store/ui-slice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  console.log('cart', cart);

  useEffect(() => {
    console.log('App.js rendered');
    const sendCartdata = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending  ',
          title: 'Sending...',
          message: 'cart data to server.',
        })
      );
      const response = await fetch(
        'https://redux-simple-store-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Sent cart data to successfully.',
        })
      );
    };

    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    sendCartdata().catch(err => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Failed to send cart data to server.',
        })
      );
    });
  }, [cart]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Notification />
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
