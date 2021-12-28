/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { gql, GraphQLClient } from 'graphql-request';
import Head from 'next/head';
import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import Filter from 'components/home/Filter';
import Products from 'components/home/Products';
import { ProductsProps } from 'types/types';

export default function Home({ products }: ProductsProps) {
  return (
    <>
      <Head>
        <title>ALORE</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
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
