import Chart from '@/components/CoinDetail/Chart';
import * as S from './CoinDetail.style';
import StockDetailChartOptions from './CoinDetailChartOptions';

const CoinDetailChart = ({chartData, type, unit, onChange}: CoinDetailChartProp) => {
  return (
    <S.ChartWrapper>
      <S.Select onChange={onChange} defaultValue={`${type} ${unit}`}>
        <StockDetailChartOptions />
      </S.Select>
      <Chart type={'candlestick'} {...chartData} />
    </S.ChartWrapper>
  );
};

export default CoinDetailChart;
