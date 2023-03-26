const useCandleChart = (data: Candle[]) => {
  const candleSeries = data.map(({opening_price, high_price, low_price, trade_price, timestamp}) => ({
    x: timestamp + 9 * 1000 * 60 * 60,
    y: [opening_price, high_price, low_price, trade_price],
  }));

  const chartData = {
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
        text: 'CandleStick Chart',
        align: 'left',
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
    },
  } as unknown as ApexChartProp;

  return {chartData};
};

export default useCandleChart;
