import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getDaysCandles} from '@/http';

const useDayCandleQuery = (request: DayCandleRequest) => {
  return useQuery([QUERY_KEYS.candles, 'day'], {
    queryFn: async () => await getDaysCandles(request),
    staleTime: 1000 * 60 * 60 * 24,
  });
};

export default useDayCandleQuery;
