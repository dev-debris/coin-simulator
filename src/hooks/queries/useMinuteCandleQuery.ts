import {useQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/constants';
import {getMinutesCandles} from '@/http';

const useMinuteCandleQuery = (request: MinuteCandleRequest) => {
  return useQuery([QUERY_KEYS.candles, 'minute' + request.paths[0]], {
    queryFn: async () => await getMinutesCandles(request),
    staleTime: 1000 * 60 * request.paths[0],
  });
};

export default useMinuteCandleQuery;
