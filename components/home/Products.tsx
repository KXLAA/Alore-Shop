import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { ProductsProps } from 'types/types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
`;

const Card = styled.div`
  display: flex;
  background-color: #222222;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  width: 100%;
  transition: all 0.3s ease;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  &:hover {
    opacity: 1;
    transform: translateX(0rem) translateY(-0.3125rem);
  }
`;

const Overlay = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  &:hover {
    opacity: 1;
  }
`;

const OverlayTxt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 900;
  font-size: 48px;
  width: 100%;
  color: #222222; ;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background: rgba(255, 229, 0, 0.8);
  padding: 24px;

  &:hover {
    opacity: 1;
  }
`;

const Button = styled.div`
  background-color: #222222;
  color: #ffe500;
  font-weight: 900;
  font-size: 32px;
  padding: 48px 24px;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  background-color: #222222;
  font-weight: 900;
  color: #ffe500;
  font-size: 30px;
  padding: 8px 24px;
`;

const Products = ({ products }: ProductsProps) => {
  return (
    <Grid>
      <>
        {products?.map(({ artist, slug, id, price, images }) => (
          <Card key={id}>
            <Description>{artist?.toUpperCase()}</Description>
            <Link href={`/product/${slug}`} passHref>
              <Overlay>
                <Image
                  src={images[0].url}
                  alt="Picture of the author"
                  width={668}
                  height={668}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={images[0].url}
                />
                <ImageOverlay>
                  <OverlayTxt>VIEW MORE</OverlayTxt>
                </ImageOverlay>
              </Overlay>
            </Link>
            <Button>
              <p style={{ textDecoration: `underline` }}>BUY NOW</p>
              <p>${price}</p>
            </Button>
          </Card>
        ))}
      </>
    </Grid>
  );
};

export default Products;
