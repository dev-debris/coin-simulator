import {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {candleState} from '@/atoms';
import {MARKET_CODE} from '@/constants';
import {useDayCandleQuery, useMinuteCandleQuery, useMonthCandleQuery, useWeekCandleQuery} from './queries';

/**
 * @todo 상태 변경 가능하도록 수정하기
 */
const DEFAULT_QUERIES = {count: 20, market: MARKET_CODE['krw-btc']};

const useCandleData = () => {
  const [candleType] = useRecoilState(candleState);
  const [data, setData] = useState<Candle[]>([]);

  const {refetch: refetchMinute} = useMinuteCandleQuery({paths: [15], queries: DEFAULT_QUERIES});
  const {refetch: refetchDay} = useDayCandleQuery({queries: DEFAULT_QUERIES});
  const {refetch: refetchWeek} = useWeekCandleQuery({queries: DEFAULT_QUERIES});
  const {refetch: refetchMonth} = useMonthCandleQuery({queries: DEFAULT_QUERIES});

  useEffect(() => {
    const refetchData = () => {
      switch (candleType) {
        case 'minute':
          return refetchMinute();
        case 'day':
          return refetchDay();
        case 'week':
          return refetchWeek();
        case 'month':
          return refetchMonth();
      }
    };

    refetchData().then(({data}) => data && setData(data));
  }, [candleType, refetchDay, refetchMinute, refetchMonth, refetchWeek]);

  return data;
};

export default useCandleData;
