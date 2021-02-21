import { css, Global } from '@emotion/react';

import '../styles/globals.css';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        background-color: #fff;
        min-height: 100%;
        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
          'Helvetica', 'Arial', sans-serif;

        font-size: 24px;
      }
    `}
  />
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
