import styled from '@emotion/styled';
import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {QUERY_KEYS} from '@/constants/request.const';
import {getMarkets} from '@/http';
import StockListItem from './StockListItem';

function StockList() {
  const [page, setPage] = useState(0);

  const {data} = useQuery([QUERY_KEYS.markets], {
    queryFn: () => getMarkets({queries: {isDetails: false}}),
  });

  if (!data) {
    return;
  }

  const prevPage = () => {
    if (page === 0) {
      return;
    } else {
      return setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page === 11) {
      return;
    } else {
      return setPage(page + 1);
    }
  };

  const filteredData = data.filter((ticker: {market: string | string[]}) => ticker.market.includes('KRW'));

  return (
    <Wrapper>
      <BorderNone>
        {filteredData.slice(page * 10, (page + 1) * 10).map((ticker: MarketResponse) => (
          <StockListItem ticker={ticker} key={ticker.market} />
        ))}
      </BorderNone>
      <Buttons>
        <PrevButton page={page} onClick={prevPage}>
          Prev
        </PrevButton>
        <NextButton page={page} onClick={nextPage}>
          Next
        </NextButton>
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 1 auto;
`;

const BorderNone = styled.table`
  padding: 0;
  margin: 0;
  border: 0;
  border-spacing: 0;
  width: 100%;
  table-layout: fixed;
  background: #f8f9fa;
  border: 1px solid rgba(0, 0, 0, 0);
  border-collapse: collapse;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PrevButton = styled.button<{page: number}>`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => (props.page === 0 ? 'gray' : 'black')};
  cursor: pointer;
`;

const NextButton = styled.button<{page: number}>`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => (props.page === 11 ? 'gray' : 'black')};
  cursor: pointer;
`;

export default StockList;
