import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {favoriteCoinListState} from '@/atoms';
import {QUERY_KEYS} from '@/constants';
import {getMarkets} from '@/http';
import * as S from './StockList.style';
import StockListItem from './StockListItem';

function StockList() {
  const [page, setPage] = useState<number>(0);

  const [isFavoriteList, setIsFavoriteList] = useState<boolean>(false);

  const [keyword, setKeyword] = useState<string>('');

  const [currentPosts, setCurrentPosts] = useState<Market[]>([]);

  const favorites = useRecoilValue(favoriteCoinListState);

  const {data: allCoinList} = useQuery([QUERY_KEYS.markets], {
    queryFn: () => getMarkets({queries: {isDetails: false}}),
    select: data => data.filter(market => market.market.includes('KRW')),
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  if (!allCoinList) {
    return <div>loading</div>;
  }

  const updateData = () => {
    let newPosts = allCoinList.filter(list => list.korean_name.includes(keyword.replace(/[\s]/g, '')) === true);
    setCurrentPosts(newPosts);
  };

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.currentTarget.value);
  };

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if (keyword.length === 1 && e.key === 'Backspace') {
      setCurrentPosts([]);
    }
  };

  const firstPage = 0;

  const lastPage =
    currentPosts.length == 0 ? Math.floor(allCoinList.length / 10) : Math.floor(currentPosts.length / 10);

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
      <S.TopBar>
        <S.SearchBar>
          <S.Search
            type="search"
            placeholder="코인명/심볼검색"
            value={keyword || ''}
            onChange={onChangeData}
            onKeyDown={handleKeyArrow}
          />
        </S.SearchBar>
        <S.FavoriteButton
          id="toggle"
          onClick={() => {
            setIsFavoriteList(!isFavoriteList);
            if (!isFavoriteList) {
              setCurrentPosts(favorites);
            } else {
              setCurrentPosts([]);
            }
            setPage(0);
          }}
        ></S.FavoriteButton>
        <S.ToggleSwitch isFavoriteList={isFavoriteList} htmlFor="toggle">
          <S.ToggleButton isFavoriteList={isFavoriteList}>★</S.ToggleButton>
        </S.ToggleSwitch>
      </S.TopBar>
      <S.BorderNone>
        {(currentPosts.length == 0 ? allCoinList : currentPosts)
          .slice(page * 10, (page + 1) * 10)
          .map((market: Market) => (
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
