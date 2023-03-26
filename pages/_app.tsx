import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {AppProps} from 'next/app';
import {useState} from 'react';
import {RecoilRoot} from 'recoil';
import {GlobalStyle} from '@/styles';

function MyApp({Component, pageProps}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
