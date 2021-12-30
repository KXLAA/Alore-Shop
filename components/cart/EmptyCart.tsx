import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import device from 'components/common/MediaQueries';

const Container = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: yellow;
  text-align: center;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;

  @media ${device.mobileS} {
    font-size: 1.5rem;
  }
`;

const Shop = styled.button`
  color: yellow;
  font-weight: 900;
  font-size: 48px;
  padding: 16px 48px;
  background-color: #222222;
  border: none;
  transition: all 0.3s ease;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  margin-top: 1.5rem;
  cursor: pointer;

  @media ${device.mobileS} {
    font-size: 2rem;
  }

  @media ${device.mobileXs} {
    font-size: 1.5rem;
  }
  &:hover {
    filter: brightness(150%);
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

const EmptyCart = () => {
  const router = useRouter();
  const handleShop = () => {
    router.push(`/`);
  };

  return (
    <Container>
      <h1>Your Cart is Empty</h1>
      <Shop onClick={handleShop}>SHOP NOW</Shop>
    </Container>
  );
};

export default EmptyCart;
