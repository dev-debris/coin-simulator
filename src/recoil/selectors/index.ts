import {selectorFamily} from 'recoil';
import {RECOIL_KEY} from '@/recoil';
import {favoriteCoinListState, selectedCoinState} from '@/recoil/atoms';

export const isFavoriteCoinState = selectorFamily<boolean, string>({
  key: RECOIL_KEY.isFavoriteMarket,
  get:
    market =>
    ({get}) => {
      return get(favoriteCoinListState)
        .map(({market}) => market)
        .includes(market);
    },
});

export const isSelectedCoinState = selectorFamily<boolean, string>({
  key: RECOIL_KEY.isSelectedCoin,
  get:
    market =>
    ({get}) => {
      return get(selectedCoinState)?.market === market;
    },
});
