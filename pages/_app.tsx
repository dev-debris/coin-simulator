import {Theme, ThemeProvider} from '@emotion/react';
import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {AppProps} from 'next/app';
import {useState} from 'react';
import {RecoilRoot} from 'recoil';
import {MARKET_CODE, QUERY_KEYS} from '@/constants/request.const';
import {getMinutesCandles} from '@/http';
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
  queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.candles, 'minute'],
    queryFn: () => getMinutesCandles({paths: [15], queries: {market: MARKET_CODE['krw-btc'], count: 20}}),
  });

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
