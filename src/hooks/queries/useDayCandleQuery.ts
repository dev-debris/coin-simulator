import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getDaysCandles} from '@/http';

const useDayCandleQuery = (request: DayCandleRequest) => {
  return useQuery([QUERY_KEYS.candles, 'day'], {
    initialData: [],
    queryFn: () => getDaysCandles(request),
  });
};

export default useDayCandleQuery;
