import useCandleData from './useCandleData';

const useStockDetail = (ticker: Ticker) => {
  const data = useCandleData();

  const converToKrw = (no: number) => new Intl.NumberFormat('kr', {style: 'currency', currency: 'KRW'}).format(no);

  const convertedTicker = Object.entries(ticker).reduce(
    (ticker, [k, v]) => ({
      ...ticker,
      [k]: k.includes('price') ? converToKrw(v) : v,
    }),
    {} as Ticker
  );

  return {data, convertedTicker};
};

export default useStockDetail;
