import {ChangeEvent, useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {selectedCoinState} from '@/recoil/atoms';
import {useDayCandleQuery, useMinuteCandleQuery, useMonthCandleQuery, useWeekCandleQuery} from './queries';

const useCandleData = () => {
  const coin = useRecoilValue(selectedCoinState);

  const initialCandleState = {type: 'minutes', unit: 15};
  const [candleState, setCandleState] = useState<CandleState>(() => {
    if (typeof window === 'undefined') {
      return initialCandleState;
    }
    const savedData = localStorage.getItem('candleState');
    return savedData ? JSON.parse(savedData) : initialCandleState;
  });

  const {type, unit} = candleState;
  const market = coin?.market ?? '';
  /**
   * TODO: count를 50으로 고정하지 않고, 사용자가 설정할 수 있도록 변경
   */
  const count = 50;

  const [data, setData] = useState<Candle[]>([]);
  const {data: dataMinute} = useMinuteCandleQuery({paths: [unit], queries: {count, market}});
  const {data: dataDay} = useDayCandleQuery({queries: {count, market}});
  const {data: dataWeek} = useWeekCandleQuery({queries: {count, market}});
  const {data: dataMonth} = useMonthCandleQuery({queries: {count, market}});

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
        localStorage.setItem('candleState', JSON.stringify({type, unit}));
        break;
    }
  };

  return {candleState, data, onChange};
};

export default useCandleData;
