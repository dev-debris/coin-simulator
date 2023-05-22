import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getMonthsCandles} from '@/http';

const useMonthCandleQuery = (request: MonthCandleRequest) => {
  return useQuery([QUERY_KEYS.candles, 'month', request.queries.market], {
    queryFn: async () => await getMonthsCandles(request),
    staleTime: 1000 * 60 * 60 * 24 * 28,
    enabled: !!request.queries.market,
  });
};

export default useMonthCandleQuery;
