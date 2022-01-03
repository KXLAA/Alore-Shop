import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import { ProductProps } from 'types/types';
import { useAppContext } from 'context/state';
import device from 'components/common/MediaQueries';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50%;

  @media ${device.tablet} {
    width: 80%;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 80%;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const Description = styled.div`
  padding: 40px;
  height: fit-content;
  background-color: #222222;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);

  @media ${device.mobile} {
    padding: 1.5rem;
  }

  @media ${device.mobileXs} {
    display: none;
  }

  p {
    font-size: 1.5rem;
    padding-bottom: 2rem;

    @media ${device.mobile} {
      font-size: 1rem;
    }
  }

  h1 {
    text-align: center;
    color: #ffe500;
    font-weight: 900;
    font-size: 1.8rem;
    padding-bottom: 0.5rem;

    @media ${device.mobile} {
      font-size: 1.5rem;
    }
  }
`;

const MobileDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  display: none;

  @media ${device.mobileXs} {
    display: flex;
  }
`;

const ATCButton = styled.button`
  color: #ffe500;
  font-weight: 900;
  font-size: 3rem;
  width: 100%;
  padding: 16px;
  background: #101010;
  border: none;
  transition: all 0.3s ease;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  cursor: pointer;

  @media ${device.mobile} {
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

const ATCButtonMobile = styled.button`
  color: #ffe500;
  font-weight: 900;
  font-size: 32px;
  width: 100%;
  padding: 16px;
  background-color: #222222;
  border: none;
  transition: all 0.3s ease;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  display: none;

  @media ${device.mobileXs} {
    display: block;
  }
  cursor: pointer;
  &:hover {
    filter: brightness(150%);
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

function Product({ product }: ProductProps) {
  const { addToCart } = useAppContext();

  return (
    <Layout>
      <Head>
        <title>
          {product.title.toUpperCase()} BY {` `}
          {product?.artist.toUpperCase()}
        </title>
        <meta name="description" content="ALORE | BUY VINYL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

          <MobileDesc>
            <h1>
              {product.title.toUpperCase()} : {` `}
              {product?.artist.toUpperCase()}
            </h1>

            <ATCButtonMobile onClick={() => addToCart(product)}>
              ADD TO CART
            </ATCButtonMobile>
          </MobileDesc>
        </Info>
      </Container>
    </Layout>
  );
}

export default Product;
