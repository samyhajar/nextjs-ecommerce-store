import Head from 'next/head';
import Link from 'next/link';
import { css } from '@emotion/react';

const headerStyles = css`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: 1px solid #ddd;
  padding: 20px;

  nav {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 100px;
    max-width: 500;
  }
`;

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header css={headerStyles}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/shop_cart">
            <a>Cart</a>
          </Link>
        </nav>
      </header>

      {props.children}

      <footer
        style={{
          borderTop: '1px solid #ddd',
          padding: 8,
          display: 'flex',
          justifyContent: 'space-evenly',
          color: 'grey',
        }}
      >
        {' '}
        <Link href="/about">
          <a>Products</a>
        </Link>
        <Link href="/products">
          <a>Sitemap</a>
        </Link>
        <Link href="/about">
          <a>Contact and services</a>
        </Link>
        <Link href="/shop_cart">
          <a>Impressum</a>
        </Link>
      </footer>
    </>
  );
}
