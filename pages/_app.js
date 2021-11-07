import React, { Fragment } from 'react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
          <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;