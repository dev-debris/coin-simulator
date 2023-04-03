import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {favoriteListState, targetState} from '@/atoms';
import {getTicker} from '@/http';
import * as S from './StockListItem.style';

function StockListItem({ticker}: StockListItemProp) {
  const favoriteState = JSON.parse(localStorage.getItem(`${ticker.market}`) ?? 'false');

  const [isFavorite, setIsFavorite] = useState<boolean>(favoriteState);

  const [favorites, setFavorites] = useRecoilState(favoriteListState);

  const [target, setTarget] = useRecoilState(targetState);

  const isTarget = target[0] === ticker ? true : false;

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
    setIsFavorite(prev => {
      if (prev) {
        const newFavorites = [...favorites];
        setFavorites(arrayRemove(newFavorites, ticker));
        localStorage.setItem(ticker.market, (!prev).toString());
        return !prev;
      } else {
        const newFavorites = [...favorites];
        newFavorites.push(ticker);
        setFavorites(newFavorites);
        localStorage.setItem(ticker.market, (!prev).toString());
        return !prev;
      }
    });
  }

  function onClick() {
    const newTarget = [ticker];
    setTarget(newTarget);
  }

  return (
    <S.StockListBody onClick={onClick} isTarget={isTarget}>
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
