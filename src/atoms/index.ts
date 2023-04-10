import {atom, selector, selectorFamily} from 'recoil';
import {storageEffect} from '@/effects';

const RECOIL_KEY = {
  candle: 'candleState',
  favoriteCoinList: 'favoriteCoinListState',
  favoriteMarkets: 'favoriteMarketsState',
  isFavoriteMarket: 'isFavoriteMarketState',
  selectedCoin: 'selectedCoinState',
  selectedMarket: 'selectedMarket',
  isSelectedCoin: 'isSelectedCoinState',
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
  key: RECOIL_KEY.favoriteMarkets,
  get: ({get}) => {
    return get(favoriteCoinListState).map(x => x.market);
  },
});

export const isFavoriteMarketState = selectorFamily<boolean, string>({
  key: RECOIL_KEY.isFavoriteMarket,
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

export const selectedMarketState = selector({
  key: RECOIL_KEY.selectedMarket,
  get: ({get}) => {
    return get(selectedCoinState).map(x => x.market);
  },
});

export const isSelectedCoinState = selectorFamily<boolean, string>({
  key: RECOIL_KEY.isSelectedCoin,
  get:
    market =>
    ({get}) => {
      return get(selectedMarketState)[0] === market;
    },
});
