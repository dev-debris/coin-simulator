import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getWeeksCandles} from '@/http';

const useWeekCandleQuery = (request: WeekCandleRequest) => {
  return useQuery([QUERY_KEYS.candles, 'week'], {
    initialData: [],
    queryFn: () => getWeeksCandles(request),
  });
};

export default useWeekCandleQuery;
