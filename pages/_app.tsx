import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import { ThemeHead } from 'design-system';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <ThemeHead />
      <Component {...pageProps} />
    </>
  );
}
