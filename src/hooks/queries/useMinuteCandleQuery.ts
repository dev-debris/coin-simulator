import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getMinutesCandles} from '@/http';

const useMinuteCandleQuery = (request: MinuteCandleRequest) => {
  return useQuery([QUERY_KEYS.candles, 'minute'], {
    initialData: [],
    queryFn: () => getMinutesCandles(request),
  });
};

export default useMinuteCandleQuery;
