import {Theme, ThemeProvider} from '@emotion/react';
import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {AppProps} from 'next/app';
import {useState} from 'react';
import {RecoilRoot} from 'recoil';
import {GlobalStyle} from '@/styles';

const theme: Theme = {
  colors: {
    BACKGROUND_MAIN: '#fff',
    BACKGROUND_SUB: '#f1f1f4',
    FONT_MAIN: '#333',
    FONT_MAIN_BOLD: '#000',
    FONT_SUB: '#999',
    FONT_SUB_BOLD: '#666',
    BORDER: '#ddd',
    RISE: '#ff0000',
    FALL: '#0000ff',
  },
};

function MyApp({Component, pageProps}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
