import React from 'react';
import styled from 'styled-components';
import { ProductProps } from 'types/types';
import ProductData from '@/mockData';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`;

const Similar = ({ product }: ProductProps) => {
  const similar = ProductData.filter(
    (prod) => prod.genre === product.genre && prod.id !== product.id,
  );

  console.log(similar);

  return (
    <div>
      <h1>You May Also Like </h1>
      <Container>
        {similar.map((simi) => (
          <img src={simi.image} alt={simi.name} />
        ))}
      </Container>
    </div>
  );
};

export default Similar;
