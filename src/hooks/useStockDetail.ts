import useCandleData from './useCandleData';

const useStockDetail = (ticker: TickerResponse) => {
  const data = useCandleData();

  const converToKrw = (no: number) => new Intl.NumberFormat('kr', {style: 'currency', currency: 'KRW'}).format(no);

  const convertedTicker = Object.entries(ticker).reduce(
    (ticker, [k, v]) => ({
      ...ticker,
      [k]: k.includes('price') ? converToKrw(v) : v,
    }),
    {} as TickerResponse
  );

  return {data, convertedTicker};
};

export default useStockDetail;
