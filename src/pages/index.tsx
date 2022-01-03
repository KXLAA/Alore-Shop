/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { gql, GraphQLClient } from 'graphql-request';
import Head from 'next/head';
import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import Products from 'components/home/Products';
import { ProductsProps } from 'types/types';

export default function Home({ products }: ProductsProps) {
  return (
    <>
      <Head>
        <title>ALORE | BUY VINYL</title>
        <meta name="description" content="ALORE | BUY VINYL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header text="ALORE" />
        <Products products={products} />
        {/* <Filter /> */}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
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
        title
        description
        slug
        id
        price
        images {
          id
          url
        }
      }
    }
  `;

  const { products } = await graphQLClient.request(query);

  return {
    props: {
      products,
    },
  };
};
