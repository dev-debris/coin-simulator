import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getWeeksCandles} from '@/http';

const useWeekCandleQuery = (request: WeekCandleRequest) => {
  return useQuery([QUERY_KEYS.candles, 'week', request.queries.market], {
    queryFn: async () => await getWeeksCandles(request),
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });
};

export default useWeekCandleQuery;
