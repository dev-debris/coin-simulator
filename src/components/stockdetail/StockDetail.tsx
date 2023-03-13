import styled from '@emotion/styled';
import {useStockDetail} from '@/hooks';
import StockChart from './StockDetailChart';
import StockDetailInfo from './StockDetailInfo';

function StockDetail({ticker}: StockDetailProp) {
  const {data, convertedTicker} = useStockDetail(ticker);

  return (
    <Wrapper>
      <StockDetailInfo {...convertedTicker} />
      <StockChart datas={data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

export default StockDetail;
