import {useEffect, useState} from 'react';
import useCandleData from './useCandleData';

const useStockDetail = (ticker: TickerResponse) => {
  const [convertedTicker, setConvertedTicker] = useState(ticker);
  const data = useCandleData();

  useEffect(() => {
    const converToKrw = (no: number) => new Intl.NumberFormat('kr', {style: 'currency', currency: 'KRW'}).format(no);

    const tickerAfter = Object.entries(ticker).reduce(
      (ticker, [k, v]) => ({
        ...ticker,
        [k]: k.includes('price') ? converToKrw(v) : v,
      }),
      {} as TickerResponse
    );
    setConvertedTicker(tickerAfter);
  }, [ticker]);

  return {data, convertedTicker};
};

export default useStockDetail;
