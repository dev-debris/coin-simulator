import {useStockDetail} from '@/hooks';
import * as S from './StockDetail.style';
import StockDetailChart from './StockDetailChart';
import StockDetailChartOptions from './StockDetailChartOptions';
import StockDetailInfo from './StockDetailInfo';

function StockDetail({ticker}: StockDetailProp) {
  const {
    chartData,
    convertedTicker,
    candleState: {type, unit},
    onChange,
  } = useStockDetail(ticker);

  return (
    <S.Container>
      <StockDetailInfo {...convertedTicker} />
      <S.ChartWrapper>
        <S.Select onChange={onChange} defaultValue={`${type} ${unit}`}>
          <StockDetailChartOptions />
        </S.Select>
        <StockDetailChart type={'candlestick'} {...chartData} />
      </S.ChartWrapper>
    </S.Container>
  );
}

export default StockDetail;
