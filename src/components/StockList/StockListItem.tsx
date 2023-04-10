import {useQuery} from '@tanstack/react-query';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {favoriteCoinListState, isFavoriteMarketState, isSelectedCoinState, selectedCoinState} from '@/atoms';
import {getTicker} from '@/http';
import * as S from './StockListItem.style';

function StockListItem({ticker}: StockListItemProp) {
  const [favorites, setFavorites] = useRecoilState(favoriteCoinListState);

  const setSelectedCoin = useSetRecoilState(selectedCoinState);

  const isFavorite = useRecoilValue(isFavoriteMarketState(ticker.market));

  const isSelected = useRecoilValue(isSelectedCoinState(ticker.market));

  const {data} = useQuery([ticker.market], {
    queryFn: () => getTicker({queries: {markets: ticker.market}}),
  });

  if (!data) {
    return (
      <tbody>
        <tr>
          <td>
            <span>loading</span>
          </td>
        </tr>
      </tbody>
    );
  }

  const fixedAccTradePrice = Math.floor(data[0].acc_trade_price_24h / 1000000);

  const fixedChangeRate = Math.round(data[0].signed_change_rate * 1000) / 1000;

  const arrayRemove = (arr: any[], value: Market) => {
    return arr.filter(ele => {
      return ele != value;
    });
  };

  function toggleFavorite() {
    if (isFavorite) {
      const newFavorites = [...favorites];
      setFavorites(arrayRemove(newFavorites, ticker));
    } else {
      const newFavorites = [...favorites];
      newFavorites.push(ticker);
      setFavorites(newFavorites);
    }
  }

  function onClick() {
    const newSelectedCoin = [ticker];
    setSelectedCoin(newSelectedCoin);
  }

  return (
    <S.StockListBody onClick={onClick} isSelected={isSelected}>
      <tr>
        <td rowSpan={2}>
          <S.Favorites onClick={toggleFavorite}>{isFavorite ? '★' : '☆'}</S.Favorites>
        </td>
        <S.StockName>{ticker.korean_name}</S.StockName>
        <S.StockPrice fixedChangeRate={fixedChangeRate}>{data[0].trade_price}</S.StockPrice>
      </tr>
      <tr>
        <S.StockChangeRate fixedChangeRate={fixedChangeRate}>{fixedChangeRate}%</S.StockChangeRate>
        <S.StockAccTradePrice>{fixedAccTradePrice}백만</S.StockAccTradePrice>
      </tr>
    </S.StockListBody>
  );
}

export default StockListItem;
