import useCandleChart from './useCandleChart';
import useCandleData from './useCandleData';

const useStockDetail = (ticker: Ticker) => {
  const {candleState, data, onChange} = useCandleData();
  const {chartData} = useCandleChart(data, ticker);

  const convertedTicker = Object.entries(ticker).reduce(
    (newTicker, [k, v]) => ({
      ...newTicker,
      [k]: k.includes('price') ? (v as number).toLocaleString() : v,
    }),
    ticker
  );

  return {chartData, convertedTicker, candleState, onChange};
};

export default useStockDetail;
