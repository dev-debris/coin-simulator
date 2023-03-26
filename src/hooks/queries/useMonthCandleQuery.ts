import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getMonthsCandles} from '@/http';

const useMonthCandleQuery = (request: MonthCandleRequest) => {
  return useQuery([QUERY_KEYS.candles, 'month'], {
    initialData: [],
    queryFn: () => getMonthsCandles(request),
  });
};

export default useMonthCandleQuery;
