import Head from 'next/head';
import Layout from '../../components/Layout';
import { css } from '@emotion/react';
import { getProductInformation } from '../../database';
import Image from 'next/image';
import Link from 'next/link';

const products = getProductInformation();

const productStyles = css`
  display: flex;
  flex-flow: wrap;
  padding: 10px;

  /* title {
    padding-left: 500px;
  } */

  .grid__container {
    flex-grow: 1;
    border: 1px solid #dddddd;
    /* grid-gap: 10px; */
    justify-self: center;
    max-width: 300px;
    height: auto;
    padding: 50px;
    margin: 2px;
  }

  .description {
    white-space: nowrap;
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
            <div className="description">{product.description}</div>

            <div className="span-line">{product.price}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
