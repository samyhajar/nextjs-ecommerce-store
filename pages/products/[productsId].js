import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

const productStyles = css`
  display: flex;
  grid-template-columns: 1fr 1fr;
  padding-top: 80px;
  padding-left: 20px;
`;

export default function SingleProductInfo(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Single product Page</title>
      </Head>
      <div>
        {/* <h1>Single product page </h1> */}
        <div css={productStyles}>
          {props.productInfo.model}
          <br />
          {props.productInfo.description}
          <br />
          <br />
          <Image
            src={props.productInfo.url}
            alt="lala"
            width="550"
            height="300"
          />
          <div>{props.productInfo.body}</div>
          <br />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getProductInformation } = await import('../../util/database');

  const id = parseInt(context.query.productsId);

  const productsInfo = await getProductInformation();
  const productInfo = productsInfo.find((member) => member.id === id);
  return {
    props: { productInfo }, // will be passed to the page component as props
  };
}
