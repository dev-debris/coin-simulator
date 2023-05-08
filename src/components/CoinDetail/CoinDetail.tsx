import {useCoinDetail} from '@/hooks';
import * as S from './CoinDetail.style';
import CoinDetailChart from './CoinDetailChart';
import CoinDetailChartOptions from './CoinDetailChartOptions';
import CoinDetailInfo from './CoinDetailInfo';

function CoinDetail({coin}: CoinDetailProp) {
  const {
    chartData,
    convertedCoin,
    candleState: {type, unit},
    onChange,
  } = useCoinDetail(coin);

  return (
    <S.Container>
      <CoinDetailInfo coin={convertedCoin} />
      <S.ChartWrapper>
        <S.Select onChange={onChange} defaultValue={`${type} ${unit}`}>
          <CoinDetailChartOptions />
        </S.Select>
        <CoinDetailChart type={'candlestick'} {...chartData} />
      </S.ChartWrapper>
    </S.Container>
  );
}

export default CoinDetail;
