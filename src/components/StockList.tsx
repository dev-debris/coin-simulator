import styled from '@emotion/styled';
import {useQuery} from '@tanstack/react-query';
import {useState, useEffect} from 'react';
import {QUERY_KEYS} from '@/constants/request.const';
import {getMarkets} from '@/http';
import StockListItem from './StockListItem';

function StockList() {
  const {data} = useQuery([QUERY_KEYS.markets], {
    queryFn: () => getMarkets({queries: {isDetails: false}}),
  });

  if (!data) {
    return;
  }

  const filteredData = data.filter((ticker: {market: string | string[]}) => ticker.market.includes('KRW'));

  return (
    <Wrapper>
      <BorderNone>
        {filteredData.slice(0, 10).map((ticker: MarketResponse) => (
          <StockListItem ticker={ticker} key={ticker.market} />
        ))}
      </BorderNone>
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

export default StockList;
