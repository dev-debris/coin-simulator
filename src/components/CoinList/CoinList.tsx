import {useMemo, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {useCoinListQuery} from '@/hooks/queries';
import {favoriteCoinListState} from '@/recoil/atoms';
import * as S from './CoinList.style';
import CoinListItem from './CoinListItem';

function CoinList() {
  const [page, setPage] = useState<number>(0);

  const [isFavoriteList, setIsFavoriteList] = useState<boolean>(false);

  const [keyword, setKeyword] = useState<string>('');

  const favorites = useRecoilValue(favoriteCoinListState);
  const {data: allCoinList} = useCoinListQuery();

  const currentList = useMemo(
    () =>
      (isFavoriteList ? favorites : allCoinList).filter(
        ({korean_name}) => keyword === '' || korean_name.includes(keyword.replace(/[\s]/g, ''))
      ),
    [isFavoriteList, favorites, allCoinList, keyword]
  );

  if (!currentList) {
    return <div>loading</div>;
  }

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.currentTarget.value);
  };

  const firstPage = 0;
  const lastPage = Math.floor(currentList.length / 10);

  const onClickPrevPage = () => setPage(Math.max(0, page - 1));
  const onClickNextPage = () => setPage(Math.min(lastPage, page + 1));
  const onClickFavoriteButton = () => {
    setIsFavoriteList(!isFavoriteList);
    setPage(0);
  };

  return (
    <S.Wrapper>
      <S.TopBar>
        <S.SearchBar>
          <S.Search type="search" placeholder="코인명/심볼검색" value={keyword || ''} onChange={onChangeData} />
        </S.SearchBar>
        <S.FavoriteButton id="toggle" onClick={onClickFavoriteButton} />
        <S.ToggleSwitch isFavoriteList={isFavoriteList} htmlFor="toggle">
          <S.ToggleButton isFavoriteList={isFavoriteList}>★</S.ToggleButton>
        </S.ToggleSwitch>
      </S.TopBar>
      <S.BorderNone>
        {currentList.slice(page * 10, (page + 1) * 10).map(coin => (
          <CoinListItem coin={coin} key={coin.market} />
        ))}
      </S.BorderNone>
      <S.Buttons>
        <S.PrevButton page={page} firstPage={firstPage} onClick={onClickPrevPage}>
          Prev
        </S.PrevButton>
        <S.NextButton page={page} lastPage={lastPage} onClick={onClickNextPage}>
          Next
        </S.NextButton>
      </S.Buttons>
    </S.Wrapper>
  );
}

export default CoinList;
