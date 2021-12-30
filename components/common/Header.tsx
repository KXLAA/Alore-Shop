import React from 'react';
import { useAppContext } from 'context/state';
import styled from 'styled-components';
import Link from 'next/link';
import { AiFillShopping } from 'react-icons/ai';
import { Product } from 'types/types';
import device from './MediaQueries';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: 6rem;
  color: #ffe500;
  text-decoration: underline;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 3rem;
  }
`;

const Cart = styled(AiFillShopping)`
  font-size: 6rem;
  color: #ffe500;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 3rem;
  }
`;

const CartCounter = styled.div`
  transition: 0.5s ease;
  background: #ff0000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  z-index: 1;
  cursor: pointer;

  @media ${device.mobile} {
    width: 30px;
    height: 30px;
    top: 50px;
  }

  p {
    font-weight: 900;
    font-size: 2rem;

    @media ${device.mobile} {
      font-size: 1rem;
    }
  }
`;

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  const { cart } = useAppContext();

  const cartQuantity = cart
    .map(({ count }: Product): number => count)
    .reduce((accumulator: number, current: number) => accumulator + current, 0);

  return (
    <Container>
      <Link href={`/`} passHref>
        <Logo>{text}</Logo>
      </Link>

      <>
        <Link href={`/cart`} passHref>
          <div>
            {cart.length > 0 && (
              <CartCounter>
                <p>{cartQuantity}</p>
              </CartCounter>
            )}
            <Cart />
          </div>
        </Link>
      </>
    </Container>
  );
};

export default Header;
