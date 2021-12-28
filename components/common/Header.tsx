import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { AiFillShopping } from 'react-icons/ai';

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
`;

const Cart = styled(AiFillShopping)`
  font-size: 6rem;
  color: #ffe500;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <Link href={`/`} passHref>
        <Logo>ALORE</Logo>
      </Link>
      <Cart />
    </Container>
  );
};

export default Header;
