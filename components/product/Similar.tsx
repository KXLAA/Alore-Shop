import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`;

const Similar = () => {
  return (
    <div>
      <h1>You May Also Like </h1>
    </div>
  );
};

export default Similar;
