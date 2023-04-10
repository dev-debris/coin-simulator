import {atom, selector, selectorFamily} from 'recoil';
import {storageEffect} from '@/effects';

const RECOIL_KEY = {
  candle: 'candleState',
  favoriteCoinList: 'favoriteCoinListState',
  selectedCoin: 'selectedCoinState',
};

export const candleState = atom<CandleType>({
  key: RECOIL_KEY.candle,
  default: 'minute',
});

export const favoriteCoinListState = atom<Market[]>({
  key: RECOIL_KEY.favoriteCoinList,
  default: [],
  effects: [storageEffect(RECOIL_KEY.favoriteCoinList, 'localStorage')],
});

export const favoriteMarketsState = selector({
  key: 'favoriteMarketsState',
  get: ({get}) => {
    return get(favoriteCoinListState).map(x => x.market);
  },
});

export const isFavoriteMarketState = selectorFamily<boolean, string>({
  key: 'isFavoriteMarketState',
  get:
    market =>
    ({get}) => {
      return get(favoriteMarketsState).includes(market);
    },
});

export const selectedCoinState = atom<Market[]>({
  key: RECOIL_KEY.selectedCoin,
  default: [],
});
