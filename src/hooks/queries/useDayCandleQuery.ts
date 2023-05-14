import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getDaysCandles} from '@/http';

const useDayCandleQuery = (request: DayCandleRequest) => {
  return useQuery([QUERY_KEYS.candles, 'day', request.queries.market], {
    queryFn: async () => await getDaysCandles(request),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!request.queries.market,
  });
};

export default useDayCandleQuery;
