import {ChangeEvent, useEffect, useState} from 'react';
import {useDayCandleQuery, useMinuteCandleQuery, useMonthCandleQuery, useWeekCandleQuery} from './queries';

const useCandleData = (coin: Coin) => {
  const [candleState, setCandleState] = useState<CandleState>({type: 'minutes', unit: 15});
  const {type, unit} = candleState;
  const [data, setData] = useState<Candle[]>([]);

  const {data: dataMinute} = useMinuteCandleQuery({paths: [unit], queries: {count: 50, market: coin.market}});
  const {data: dataDay} = useDayCandleQuery({queries: {count: 50, market: coin.market}});
  const {data: dataWeek} = useWeekCandleQuery({queries: {count: 50, market: coin.market}});
  const {data: dataMonth} = useMonthCandleQuery({queries: {count: 50, market: coin.market}});

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
