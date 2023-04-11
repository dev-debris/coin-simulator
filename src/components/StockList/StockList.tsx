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

  const [keyword, setKeyword] = useState<string>('');

  const [keyItems, setKeyItems] = useState<Market[]>([]);

  const [index, setIndex] = useState<number>(-1);

  const [currentPosts, setCurrentPosts] = useState<Market[]>([]);

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
    let newKeyItems = allCoinList.filter(list => list.korean_name.includes(keyword.replace(/[\s]/g, '')) === true);
    setKeyItems(newKeyItems);
  };

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.currentTarget.value);
  };

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if (keyItems.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          setIndex(index + 1);
          if (autoRef.current?.childElementCount === index + 1) setIndex(0);
          break;
        case 'ArrowUp':
          setIndex(index - 1);
          if (index < 0) {
            setKeyItems([]);
            setIndex(-1);
          }
          break;
        case 'Escape':
          setKeyItems([]);
          setIndex(-1);
          break;
        case 'Enter':
          if (keyItems[index]) {
            setCurrentPosts(allCoinList.filter(list => list.korean_name === keyItems[index].korean_name));
          } else {
            setCurrentPosts(keyItems);
          }
          setKeyword('');
          setIndex(-1);
          break;
      }
    } else {
      if (e.key === 'Enter') {
        setCurrentPosts([{market: 'none', korean_name: 'none', english_name: 'none'}]);
        setKeyword('');
        setIndex(-1);
      }
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
          <S.SearchButton>검색</S.SearchButton>
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
            if (!isFavorite) {
              setCurrentPosts(favorites);
            } else {
              setCurrentPosts([]);
            }
            setPage(0);
          }}
        ></S.FavoriteButton>
        <S.ToggleSwitch isFavorite={isFavorite} htmlFor="toggle">
          <S.ToggleButton isFavorite={isFavorite}>★</S.ToggleButton>
        </S.ToggleSwitch>
      </S.TopBar>
      {currentPosts[0]?.market === 'none' ? (
        <div>검색 결과가 존재하지 않습니다.</div>
      ) : (
        <S.BorderNone>
          {(currentPosts.length == 0 ? allCoinList : currentPosts)
            .slice(page * 10, (page + 1) * 10)
            .map((market: Market) => (
              <StockListItem ticker={market} key={market.market} />
            ))}
        </S.BorderNone>
      )}
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
