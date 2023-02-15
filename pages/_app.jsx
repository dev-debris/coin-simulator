import {Fragment} from 'react';
import GlobalStyle from '../src/styles/global';

function MyApp({Component, pageProps}) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
