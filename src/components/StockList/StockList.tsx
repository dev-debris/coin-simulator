import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';
import {favoriteList} from '@/atoms';
import {QUERY_KEYS} from '@/constants';
import {getMarkets} from '@/http';
import * as S from './StockList.style';
import StockListItem from './StockListItem';

function StockList() {
  const [page, setPage] = useState<number>(0);

  const [onFavorite, setOnFavorite] = useState<boolean>(false);

  const favorites = useRecoilValue(favoriteList);

  const {data} = useQuery([QUERY_KEYS.markets], {
    queryFn: () => getMarkets({queries: {isDetails: false}}),
    select: data => data.filter(market => market.market.includes('KRW')),
  });

  if (!data) {
    return <div>loading</div>;
  }

  const firstPage = 0;
  const lastPage = Math.floor(data.length / 10);

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

  const switchData = onFavorite ? favorites : data;

  return (
    <S.Wrapper>
      <S.FavoriteButton onClick={() => setOnFavorite(!onFavorite)}>Click Me!</S.FavoriteButton>
      <S.BorderNone>
        {switchData.slice(page * 10, (page + 1) * 10).map(market => (
          <StockListItem ticker={market} key={market.market} />
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
