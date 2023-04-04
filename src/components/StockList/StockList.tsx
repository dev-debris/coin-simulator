import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';
import {favoriteCoinListState} from '@/atoms';
import {QUERY_KEYS} from '@/constants';
import {getMarkets} from '@/http';
import * as S from './StockList.style';
import StockListItem from './StockListItem';

function StockList() {
  const [page, setPage] = useState<number>(0);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const favorites = useRecoilValue(favoriteCoinListState);

  const {data: allCoinList} = useQuery([QUERY_KEYS.markets], {
    queryFn: () => getMarkets({queries: {isDetails: false}}),
    select: data => data.filter(market => market.market.includes('KRW')),
  });

  if (!allCoinList) {
    return <div>loading</div>;
  }

  const firstPage = 0;
  const lastPage = Math.floor(allCoinList.length / 10);

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
      <S.FavoriteButton id="toggle" onClick={() => setIsFavorite(!isFavorite)}></S.FavoriteButton>
      <S.ToggleSwitch isFavorite={isFavorite} htmlFor="toggle">
        <S.ToggleButton isFavorite={isFavorite} />
      </S.ToggleSwitch>
      <S.BorderNone>
        {(isFavorite ? favorites : allCoinList).slice(page * 10, (page + 1) * 10).map((market: Market) => (
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
