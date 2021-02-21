import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1>About Page</h1>
      <p>This is the about Page</p>
    </Layout>
  );
}
