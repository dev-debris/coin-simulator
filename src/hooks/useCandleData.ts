import {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {candleState} from '@/atoms';
import {MARKET_CODE} from '@/constants';
import {useDayCandleQuery, useMinuteCandleQuery, useMonthCandleQuery, useWeekCandleQuery} from './queries';

const useCandleData = () => {
  const [candleType] = useRecoilState(candleState);
  const [data, setData] = useState<Candle[]>([]);

  const {refetch: refetchMinute} = useMinuteCandleQuery({
    paths: [15],
    queries: {
      count: 20,
      market: MARKET_CODE['krw-btc'],
    },
  });

  const {refetch: refetchDay} = useDayCandleQuery({
    queries: {
      count: 20,
      market: MARKET_CODE['krw-btc'],
    },
  });

  const {refetch: refetchWeek} = useWeekCandleQuery({
    queries: {
      count: 20,
      market: MARKET_CODE['krw-btc'],
    },
  });

  const {refetch: refetchMonth} = useMonthCandleQuery({
    queries: {
      count: 20,
      market: MARKET_CODE['krw-btc'],
    },
  });

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
