import useCandleChart from './useCandleChart';
import useCandleData from './useCandleData';

const useCoinDetail = (coin: Coin) => {
  const {candleState, data, onChange} = useCandleData(coin);
  const {chartData} = useCandleChart(data, coin);

  const convertedCoin = Object.entries(coin).reduce(
    (newCoin, [k, v]) => ({
      ...newCoin,
      [k]: k.includes('price') ? (v as number).toLocaleString() : v,
    }),
    coin
  );

  return {chartData, convertedCoin, candleState, onChange};
};

export default useCoinDetail;
