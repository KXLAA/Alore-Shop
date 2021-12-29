import React from 'react';
import styled from 'styled-components';
import { useAppContext } from 'context/state';

const Container = styled.div`
  background-color: #222222;
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 48px;
  justify-content: space-between;
`;

const ImageLo = styled.img`
  width: 15%;
  aspect-ratio: 1/1;
`;

const CartDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 1.5rem;
  }
`;

const CartItemControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const Controllers = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  span {
    padding: 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  button {
    cursor: pointer;
    background: none;
    width: 50px;
    aspect-ratio: 1/1;
    border: none;
    background: yellow;
    border-radius: 6px;
    color: #101010;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 3rem;
  font-weight: 700;
  color: yellow;
`;

const CartItem = ({ item }) => {
  const { addToCart, removeItem } = useAppContext();

  return (
    <Container>
      <ImageLo src={item.images[0].url} alt="Picture of the author" />

      <CartDesc>
        <h1>
          {item?.title.toUpperCase()} : {` `}
          {item?.artist.toUpperCase()}
        </h1>
        <p>{item?.description}</p>
      </CartDesc>

      <CartItemControls>
        <Price>${item.price * item.count}</Price>

        <Controllers>
          <button onClick={() => removeItem(item)}>&ndash;</button>
          <span>{item.count}</span>
          <button onClick={() => addToCart(item)}>+</button>
        </Controllers>
      </CartItemControls>
    </Container>
  );
};

export default CartItem;
