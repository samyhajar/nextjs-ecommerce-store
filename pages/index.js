import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

const title = css`
  display: grid;
  color: grey;
  text-align: center;
  font-size: 20px;
  padding-top: 100px;
`;

const brandImages = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 50px;
  margin-right: 50px;
  grid-column-gap: 30px;
  padding-top: 100px;

  .fender-image {
    border: 1px solid #fffafa;
    border-radius: 5px;
    padding-left: 90px;
    box-shadow: 0 0 10px;
  }

  .yamaha-image {
    border: 1px solid #fffafa;
    border-radius: 5px;
    padding-left: 100px;
    padding-right: 0px;
    box-shadow: 0 0 10px;
  }

  .gibson-image {
    border: 1px solid #fffafa;
    border-radius: 5px;
    padding-left: 130px;
    box-shadow: 0 0 10px;
  }
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <div css={title}>
        <h1>Welcome Home!</h1>
        <p>
          In Europe's biggest music store you'll find a huge range of
          instruments as well as studio-, light- and sound technology. <br />
          We have the most popular brands, low-priced alternatives, and many
          free extras for musicians.
        </p>
      </div>
      <div css={brandImages}>
        <div className="fender-image">
          <Image
            src="/../public/fender-3.svg"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
        <div className="yamaha-image">
          <Image
            src="/../public/yamaha-12.svg"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
        <div className="gibson-image">
          <Image
            src="/../public/gibson-1.svg"
            alt="Picture of the author"
            width={250}
            height={300}
          />
        </div>
      </div>
    </Layout>
  );
}
