import Head from 'next/head';
import Layout from '../../components/Layout';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const productStyles = css`
  display: flex;
  flex-flow: wrap;
  padding: 10px;

  /* title {
    padding-left: 500px;
  } */

  .grid__container {
    background: #f5f7fa;
    border-radius: 12px;
    border-color: transparent;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
    flex-grow: 1;
    border: 1px solid #dddddd;
    justify-self: center;
    max-width: 300px;
    height: auto;
    padding: 50px;
    margin: 20px;
    margin-left: 50px;
  }

  .description {
    white-space: nowrap;
    color: #9883e5;
    padding-bottom: 6px;
  }

  .description-2 {
    color: grey;
    font-size: 16px;
  }

  .image {
    object-fit: contain;
  }

  .span-line {
    border-top: 1px solid grey;
    margin-top: 30px;
    padding-top: 20px;
  }
`;

export default function Products(props) {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <h1 className="title">Products Page</h1>
      <div css={productStyles}>
        {props.productsInfo.map((product) => (
          <div className="grid__container" key={`product-page-${product.id}`}>
            <div className="fix-width">
              <Image
                src={product.url}
                alt="lala"
                width="200%"
                height="100%"
                className="image"
              />
            </div>
            <br />
            <div className="description">
              <Link href={`/products/${product.id}`}>{product.model}</Link>
            </div>
            <div className="description-2">{product.description}</div>

            <div className="span-line">{product.price}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getProductInformation } = await import('../../util/database');
  const productsInfo = await getProductInformation();
  return {
    props: { productsInfo }, // will be passed to the page component as props
  };
}

//
