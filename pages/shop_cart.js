import Head from 'next/head';
import Layout from '../components/Layout';

export default function shopCart() {
  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <h1>Your Shopping Cart</h1>
      <p>This is the Shopping Cart Page</p>
    </Layout>
  );
}
