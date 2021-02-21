import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

export default function SingleProductInfo(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Single product Page</title>
      </Head>

      <h1>Single product page </h1>
      <div>
        <Image
          src={props.productInfo.url}
          alt="lala"
          width="550"
          height="300"
        />
        <br />
        {props.productInfo.model}
        <br />
        <br />
        {props.productInfo.description}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getProductInformation } = await import('../../database');

  const id = context.query.productsId;

  const productsInfo = getProductInformation();
  const productInfo = productsInfo.find((member) => member.id === id);
  return {
    props: { productInfo }, // will be passed to the page component as props
  };
}
