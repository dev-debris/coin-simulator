import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {QUERY_KEYS} from '@/constants/request.const';
import {getMarkets} from '@/http';
import * as S from './StockList.style';
import StockListItem from './StockListItem';

function StockList() {
  const [page, setPage] = useState<number>(0);

  const {data} = useQuery([QUERY_KEYS.markets], {
    queryFn: () => getMarkets({queries: {isDetails: false}}),
  });

  if (!data) {
    return;
  }

  const filteredData = data.filter((ticker: {market: string | string[]}) => ticker.market.includes('KRW'));

  const firstPage = 0;

  const lastPage = Math.floor(filteredData.length / 10);

  const prevPage = () => {
    if (page === firstPage) {
      return;
    } else {
      return setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page === lastPage) {
      return;
    } else {
      return setPage(page + 1);
    }
  };

  return (
    <S.Wrapper>
      <S.BorderNone>
        {filteredData.slice(page * 10, (page + 1) * 10).map((ticker: MarketResponse) => (
          <StockListItem ticker={ticker} key={ticker.market} />
        ))}
      </S.BorderNone>
      <S.Buttons>
        <S.PrevButton page={page} firstPage={firstPage} onClick={prevPage}>
          Prev
        </S.PrevButton>
        <S.NextButton page={page} lastPage={lastPage} onClick={nextPage}>
          Next
        </S.NextButton>
      </S.Buttons>
    </S.Wrapper>
  );
}

export default StockList;
