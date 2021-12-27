import Head from 'next/head';
import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import Filter from 'components/home/Filter';
import Products from 'components/home/Products';
import ProductData from '../mockData';

export default function Home() {
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
        <Products products={ProductData} />
        {/* <Filter /> */}
      </Layout>
    </>
  );
}
