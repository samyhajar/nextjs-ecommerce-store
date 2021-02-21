import Head from 'next/head';
import Layout from '../../components/Layout';
import { css } from '@emotion/react';
import { getProductInformation } from '../../database';
import Image from 'next/image';
import Link from 'next/link';

const products = getProductInformation();

const productStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;

  title {
    padding-left: 500px;
  }

  .grid__container {
    display: grid;
    border: 1px solid #dddddd;
    /* grid-gap: 10px; */
    justify-self: center;
    max-width: 300px;
    height: auto;
    margin: 0 auto;
    padding: 50px;
  }
`;

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <h1 className="title">Products Page</h1>
      <div css={productStyles}>
        {products.map((product) => (
          <div className="grid__container" key={`product-page-${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.model}</Link>
            <br />

            {product.description}
            <br />
            <br />
            <div className="fix-width">
              <Image src={product.url} alt="lala" width="200%" height="100%" />
            </div>

            <br />
            {product.price}
          </div>
        ))}
      </div>
    </Layout>
  );
}
