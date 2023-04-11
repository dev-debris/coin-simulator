import {useQuery} from '@tanstack/react-query';
import {useEffect, useRef, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {favoriteCoinListState} from '@/atoms';
import {QUERY_KEYS} from '@/constants';
import {getMarkets} from '@/http';
import * as S from './StockList.style';
import StockListItem from './StockListItem';

function StockList() {
  const [page, setPage] = useState<number>(0);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [isSearched, setIsSearched] = useState<boolean>(false);

  const [keyword, setKeyword] = useState<string>('');

  const [keyItems, setKeyItems] = useState<Market[]>([]);

  const [index, setIndex] = useState<number>(-1);

  const autoRef = useRef<HTMLUListElement>(null);

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
    let newKeyItems = allCoinList.filter(list => list.korean_name.includes(keyword) === true);
    setKeyItems(newKeyItems);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === null || keyword === '') {
      setIsSearched(false);
      setPage(0);
    } else {
      setIsSearched(true);
      setPage(0);
    }
  };

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.currentTarget.value);
  };

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
      <S.TopBar>
        <S.SearchBar onSubmit={e => onSearch(e)}>
          <S.Search type="search" placeholder="코인명/심볼검색" value={keyword || ''} onChange={onChangeData} />
          <S.SearchButton type="submit">검색</S.SearchButton>
        </S.SearchBar>
        {keyItems.length > 0 && keyword && (
          <S.AutoSearchContainer>
            <S.AutoSearchWrap ref={autoRef}>
              {keyItems.map((search, idx) => (
                <S.AutoSearchData
                  isFocus={index === idx ? true : false}
                  key={search.korean_name}
                  onClick={() => {
                    setKeyword(search.korean_name);
                  }}
                >
                  <a href="#">{search.korean_name}</a>
                  <div>↖︎</div>
                </S.AutoSearchData>
              ))}
            </S.AutoSearchWrap>
          </S.AutoSearchContainer>
        )}
        <S.FavoriteButton
          id="toggle"
          onClick={() => {
            setIsFavorite(!isFavorite);
            setPage(0);
          }}
        ></S.FavoriteButton>
        <S.ToggleSwitch isFavorite={isFavorite} htmlFor="toggle">
          <S.ToggleButton isFavorite={isFavorite}>★</S.ToggleButton>
        </S.ToggleSwitch>
      </S.TopBar>
      <S.BorderNone>
        {(isFavorite ? favorites : !isFavorite && isSearched ? keyItems : allCoinList)
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
