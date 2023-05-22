import {useTheme} from '@emotion/react';
import {useRecoilValue} from 'recoil';
import {selectedCoinState} from '@/recoil/atoms';

const useCandleChart = (data: Candle[]) => {
  const coin = useRecoilValue(selectedCoinState);
  const {colors} = useTheme();
  const candleSeries = data.map(({opening_price, high_price, low_price, trade_price, timestamp}) => ({
    x: timestamp + 9 * 1000 * 60 * 60,
    y: [opening_price, high_price, low_price, trade_price],
  }));

  const chartData: ApexChartProp = {
    series: [
      {
        data: candleSeries,
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
      },
      title: {
        text: coin?.market,
        align: 'left',
        style: {
          fontWeight: 'normal',
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          formatter(val: number) {
            return val.toLocaleString();
          },
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: colors.RISE,
            downward: colors.FALL,
          },
        },
      },
    },
  };

  return {chartData};
};

export default useCandleChart;
