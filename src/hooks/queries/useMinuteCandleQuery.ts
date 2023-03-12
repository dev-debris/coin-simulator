import {useQuery} from '@tanstack/react-query';
import {MARKET_CODE, QUERY_KEYS} from '@/constants/request.const';
import {getMinutesCandles} from '@/http';

const useMinuteCandleQuery = ({
  paths = [15],
  queries = {count: 20, market: MARKET_CODE['krw-btc']},
}: MinuteCandleRequest) => {
  return useQuery<MinuteCandleResponse[]>([QUERY_KEYS.candles, 'minute'], {
    queryFn: () => getMinutesCandles({paths, queries}),
    initialData: [],
  });
};

export default useMinuteCandleQuery;
