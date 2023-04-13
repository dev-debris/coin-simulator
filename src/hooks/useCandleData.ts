import {ChangeEvent, useEffect, useState} from 'react';
import {MARKET_CODE} from '@/constants';
import {useDayCandleQuery, useMinuteCandleQuery, useMonthCandleQuery, useWeekCandleQuery} from './queries';

/**
 * @todo 상태 변경 가능하도록 수정하기
 */
const DEFAULT_QUERIES = {count: 50, market: MARKET_CODE['krw-btc']};

const useCandleData = () => {
  const [candleState, setCandleState] = useState<CandleState>({type: 'minutes', unit: 15});
  const {type, unit} = candleState;
  const [data, setData] = useState<Candle[]>([]);

  const {data: dataMinute} = useMinuteCandleQuery({paths: [unit], queries: DEFAULT_QUERIES});
  const {data: dataDay} = useDayCandleQuery({queries: DEFAULT_QUERIES});
  const {data: dataWeek} = useWeekCandleQuery({queries: DEFAULT_QUERIES});
  const {data: dataMonth} = useMonthCandleQuery({queries: DEFAULT_QUERIES});

  useEffect(() => {
    if (dataMinute && dataDay && dataWeek && dataMonth)
      setData(
        (() => {
          switch (type) {
            case 'minutes':
              return dataMinute;
            case 'days':
              return dataDay;
            case 'weeks':
              return dataWeek;
            case 'months':
              return dataMonth;
          }
        })()
      );
  }, [dataDay, dataMinute, dataMonth, dataWeek, type, unit]);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const [type, value] = e.target.value.trim().split(' ');
    const unit = +value;
    switch (unit) {
      case 1:
      case 3:
      case 5:
      case 10:
      case 15:
      case 30:
      case 60:
      case 240:
        break;
      default:
        return;
    }
    switch (type) {
      case 'minutes':
      case 'days':
      case 'weeks':
      case 'months':
        setCandleState({type, unit});
        break;
    }
  };

  return {candleState, data, onChange};
};

export default useCandleData;
