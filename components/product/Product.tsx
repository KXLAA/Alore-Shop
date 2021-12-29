import React from 'react';
import styled from 'styled-components';
import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import { ProductProps } from 'types/types';
import Similar from 'components/product/Similar';
import { useAppContext } from 'context/state';

const Container = styled.div`
  display: flex;
  gap: 48px;
`;

const Image = styled.img`
  width: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
`;

const Description = styled.div`
  padding: 40px;
  height: fit-content;
  background-color: #222222;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);

  p {
    font-size: 24px;
    padding-bottom: 32px;
  }

  h1 {
    text-align: center;
    color: #ffe500;
    font-weight: 900;
    font-size: 30px;
    padding-bottom: 8px;
  }
`;

const ATCButton = styled.button`
  color: #ffe500;
  font-weight: 900;
  font-size: 48px;
  width: 100%;
  padding: 16px;
  background: #101010;
  border: none;
  transition: all 0.3s ease;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  cursor: pointer;
  &:hover {
    filter: brightness(150%);
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

// const PayBtn = ({ id }) => {
//   const handleClick = async (event) => {
//     event.preventDefault();
//   };
// };

function Product({ product }: ProductProps) {
  const { addToCart } = useAppContext();

  return (
    <Layout>
      <Header text="BACK" />
      <Container>
        <Image src={product.images[0].url} alt={product?.artist} />
        <Info>
          <Description>
            <div>
              <h1>
                {product.title.toUpperCase()} : {` `}
                {product?.artist.toUpperCase()}
              </h1>
              <p>{product?.description}</p>
            </div>

            <ATCButton onClick={() => addToCart(product)}>
              ADD TO CART
            </ATCButton>
          </Description>
          <Similar />
        </Info>
      </Container>
    </Layout>
  );
}

export default Product;
