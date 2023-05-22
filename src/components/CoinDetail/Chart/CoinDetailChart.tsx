import dynamic from 'next/dynamic';
import useCandleChart from '@/hooks/useCandleChart';
import useCandleData from '@/hooks/useCandleData';
import * as S from './CoinDetailChart.style';
import CoinDetailChartOptions from './CoinDetailChartOptions';

const Chart = dynamic(() => import('react-apexcharts').then(ReactApexChart => ReactApexChart), {ssr: false});

const CoinDetailChart = () => {
  const {
    candleState: {type, unit},
    data,
    onChange,
  } = useCandleData();
  const {chartData} = useCandleChart(data);

  if (!data.length) {
    return null;
  }

  return (
    <S.ChartWrapper>
      <S.Select onChange={onChange} defaultValue={`${type} ${unit}`}>
        <CoinDetailChartOptions />
      </S.Select>
      <Chart type={'candlestick'} {...chartData} />
    </S.ChartWrapper>
  );
};

export default CoinDetailChart;
