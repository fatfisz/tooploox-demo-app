import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';

import { defaultTokens } from 'design-system/styled';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <RecoilRoot>
      <Head>
        <title>GitHub profile viewer</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          background-color: ${defaultTokens.colors.bodyBackground};
          margin: 0;
        }
      `}</style>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
