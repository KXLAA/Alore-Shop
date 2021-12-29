import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import CartItem from 'components/cart/CartItem';
import { useAppContext } from 'context/state';

const Cart = () => {
  const { cart } = useAppContext();

  return (
    <Layout>
      <Header text="CART" />
      <>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </>
    </Layout>
  );
};

export default Cart;
