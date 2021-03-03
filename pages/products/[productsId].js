import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const productStyles = css`
  display: flex;
  flex-flow: wrap;
  padding: 10px;

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
`;

export default function SingleProductInfo(props) {
  console.log(props.cartCookieValue);
  const [carts, setCarts] = useState(props.cartCookieValue);
  const [quantity, setQuantity] = useState(0);

  console.log(quantity);

  function addToCart(cookieName) {
    const cart = Cookies.get(cookieName); //get the cookie
    let newCookie = cart ? JSON.parse(cart) : []; //parse the cookie
    const cookieProduct = {
      quantity: quantity,
      id: props.productInfo.id,
    }; //update the parsed cookie
    newCookie.push(cookieProduct); //set teh cookie with the new vaue
    Cookies.set(cookieName, newCookie);
    console.log(newCookie);
  }
  // useEffect(() => {
  //   Cookies.set('cart', JSON.stringify(carts));
  // }, [carts]);
  console.log(props);

  const cartsForProducts = carts.map(
    (teamMemberVisits) => teamMemberVisits.productId === props.productInfo.id,
  );

  return (
    <Layout>
      <Head>
        <title>Single product Page</title>
      </Head>
      <div css={productStyles}>
        {/* <h1>Single product page </h1> */}
        <div>
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
          <div>{props.productInfo.shape}</div>
          <br />
        </div>
      </div>
      <div>Buy now : {quantity}</div>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => addToCart('cart')}>Add to Cart</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = parseInt(context.query.productsId);
  const { getProductInformation } = await import('../../util/database');
  const carts = context.req.cookies.carts;
  const cartCookieValue = carts ? JSON.parse(carts) : [];
  const productsInfo = await getProductInformation();
  const productInfo = productsInfo.find((member) => member.id === id);
  return {
    props: {
      productInfo: productInfo || null,
      cartCookieValue: cartCookieValue,
    }, // will be passed to the page component as props
  };
}
