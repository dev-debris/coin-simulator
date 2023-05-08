import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {favoriteCoinListState, isFavoriteCoinState, isSelectedCoinState, selectedCoinState} from '@/atoms';
import * as S from './CoinListItem.style';

function CoinListItem({coin}: CoinListItemProp) {
  const [favorites, setFavorites] = useRecoilState(favoriteCoinListState);
  const setSelectedCoin = useSetRecoilState(selectedCoinState);
  const isFavorite = useRecoilValue(isFavoriteCoinState(coin.market));
  const isSelected = useRecoilValue(isSelectedCoinState(coin.market));

  const fixedAccTradePrice = Math.floor(coin.acc_trade_price_24h / 1000000);
  const fixedChangeRate = Math.round(coin.signed_change_rate * 1000) / 1000;

  const onToggleFavorite = () => {
    setFavorites(isFavorite ? favorites.filter(c => c.market !== coin.market) : [...favorites, coin]);
  };

  const onClickItem = () => {
    setSelectedCoin(coin);
  };

  return (
    <S.CoinListBody onClick={onClickItem} isSelected={isSelected}>
      <tr>
        <td rowSpan={2}>
          <S.Favorites onClick={onToggleFavorite}>{isFavorite ? '★' : '☆'}</S.Favorites>
        </td>
        <S.CoinName>{coin.korean_name}</S.CoinName>
        <S.CoinPrice fixedChangeRate={fixedChangeRate}>{coin.trade_price}</S.CoinPrice>
      </tr>
      <tr>
        <S.CoinChangeRate fixedChangeRate={fixedChangeRate}>{fixedChangeRate}%</S.CoinChangeRate>
        <S.CoinAccTradePrice>{fixedAccTradePrice}백만</S.CoinAccTradePrice>
      </tr>
    </S.CoinListBody>
  );
}

export default CoinListItem;
