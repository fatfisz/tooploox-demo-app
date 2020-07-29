import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

import { ThemeHead } from 'design-system';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>GitHub profile viewer</title>
      </Head>
      <ThemeHead />
      <Component {...pageProps} />
    </>
  );
}
