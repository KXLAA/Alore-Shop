import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import CartItem from 'components/cart/CartItem';
import { useAppContext } from 'context/state';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import EmptyCart from 'components/cart/EmptyCart';
import device from 'components/common/MediaQueries';

const Cart = () => {
  const router = useRouter();
  const { cart, setCart } = useAppContext();
  const cartQuantity = cart
    //Extract values of the count property into an array, then get total of the array with reduce
    .map(({ count }) => count)
    .reduce((accumulator, total) => accumulator + total, 0);

  const totalPrice = cart
    //Create an a transformed array of the total price of each individual cart item -> this is done by multiplying the price of the item by the count property
    .map(({ price, count }) => price * count)
    //Then we get the sum of the entire cart with reduce
    .reduce((accumulator, total) => accumulator + total, 0);

  const Price = styled.div`
    display: flex;
    justify-content: space-between;

    p {
      font-size: 4rem;
      font-weight: 800;
      color: yellow;

      @media ${device.mobileS} {
        font-size: 2.5rem;
      }
    }
  `;

  const Total = styled.p`
    font-size: 4rem;
    font-weight: 700;
    color: yellow;
    text-align: center;
    padding-bottom: 8px;

    @media ${device.tablet} {
      font-size: 2.5rem;
    }

    @media ${device.mobile} {
      font-size: 2rem;
    }

    @media ${device.mobileXs} {
      font-size: 1.5rem;
    }
  `;

  const Checkout = styled.button`
    color: yellow;
    font-weight: 900;
    font-size: 3rem;
    width: 100%;
    padding: 16px;
    background-color: #222222;
    border: none;
    transition: all 0.3s ease;
    -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
    box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
    margin-top: 1.5rem;
    cursor: pointer;

    @media ${device.mobile} {
      font-size: 2rem;
    }
    &:hover {
      filter: brightness(150%);
      transform: translateX(0rem) translateY(-0.3125rem);
    }

    &:active {
      transform: translateX(0rem) translateY(0.125rem);
    }
  `;

  const handleCheckout = () => {
    router.push(`/`);
    setCart([]);
  };

  return (
    <Layout>
      <Header text="BACK" />

      {cartQuantity <= 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Total>
            You have {cartQuantity} {cartQuantity === 1 ? `item` : `items`} in
            your cart
          </Total>
          <>
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
            <Price>
              <p>Total</p>
              <p style={{ textDecoration: `underline` }}>${totalPrice}</p>
            </Price>
          </>
          <Checkout onClick={handleCheckout}>CHECKOUT</Checkout>
        </>
      )}
    </Layout>
  );
};

export default Cart;
