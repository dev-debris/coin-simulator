import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getMarkets, getTicker} from '@/http';

const useCoinListQuery = () => {
  return useQuery<Coin[]>([QUERY_KEYS.coinList], {
    initialData: [],
    queryFn: async () => {
      const markets = (await getMarkets({queries: {isDetails: false}})).filter(({market}) => market.includes('KRW'));
      const tickers = await getTicker({queries: {markets: markets.map(({market}) => market).join(',')}});

      return markets.map((market, idx) => ({...market, ...tickers[idx]}));
    },
  });
};

export default useCoinListQuery;
