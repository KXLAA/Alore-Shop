import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useAppContext } from 'context/state';

const Container = styled.div`
  background-color: #222222;
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 24px;
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

const CartItem = ({ item }) => {
  const { removeItem } = useAppContext();

  return (
    <Container>
      <Image
        src={item.images[0].url}
        alt="Picture of the author"
        width={400}
        height={400}
        layout="responsive"
        placeholder="blur"
        blurDataURL={item.images[0].url}
      />

      <div>
        <h1>
          {item?.title.toUpperCase()} : {` `}
          {item?.artist.toUpperCase()}
        </h1>
        <p>{item?.description}</p>
        <button onClick={() => removeItem(item)}>Remove</button>
      </div>
    </Container>
  );
};

export default CartItem;
