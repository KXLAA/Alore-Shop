/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import { ProductProps, IProduct } from 'types/types';
import Product from 'components/product/Product';

interface Slug {
  slug: string;
}

interface ParamsProps {
  params: Slug;
}

const ProductPage = ({ product }: ProductProps) => {
  return (
    <>
      <Product product={product} />
    </>
  );
};

export default ProductPage;

//getStaticPaths
export const getStaticPaths = async () => {
  const token = process.env.TOKEN;
  const endpoint = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const query = gql`
    query products {
      products {
        id
        artist
        slug
        description
        id
        price
        images {
          url
        }
        genre {
          name
        }
      }
    }
  `;
  const { products } = await graphQLClient.request(query);
  return {
    paths: products.map(({ slug }: IProduct) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

//getStaticProps
export const getStaticProps = async ({ params }: ParamsProps) => {
  const token = process.env.TOKEN;
  const endpoint = process.env.ENDPOINT;

  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    query productPageQuery($slug: String!) {
      product(where: { slug: $slug }) {
        id
        artist
        title
        slug
        description
        id
        price
        images {
          url
          id
        }
        genre {
          name
        }
      }
    }
  `;

  const { product } = await graphQLClient.request(query, {
    slug: params.slug,
  });

  return {
    props: {
      product,
    },
  };
};
