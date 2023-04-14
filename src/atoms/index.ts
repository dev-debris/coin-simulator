import {atom, selectorFamily} from 'recoil';
import {storageEffect} from '@/effects';

const RECOIL_KEY = {
  favoriteCoinList: 'favoriteCoinListState',
  favoriteMarkets: 'favoriteMarketsState',
  isFavoriteMarket: 'isFavoriteMarketState',
  selectedCoin: 'selectedCoinState',
  selectedMarket: 'selectedMarket',
  isSelectedCoin: 'isSelectedCoinState',
  purchasedCoinList: 'purchasedCoinListState',
};

export const favoriteCoinListState = atom<Market[]>({
  key: RECOIL_KEY.favoriteCoinList,
  default: [],
  effects: [storageEffect(RECOIL_KEY.favoriteCoinList, 'localStorage')],
});

export const isFavoriteMarketState = selectorFamily<boolean, string>({
  key: RECOIL_KEY.isFavoriteMarket,
  get:
    market =>
    ({get}) => {
      return get(favoriteCoinListState)
        .map(({market}) => market)
        .includes(market);
    },
});

export const selectedCoinState = atom<Market | null>({
  key: RECOIL_KEY.selectedCoin,
  default: null,
});

export const isSelectedCoinState = selectorFamily<boolean, string>({
  key: RECOIL_KEY.isSelectedCoin,
  get:
    market =>
    ({get}) => {
      return get(selectedCoinState)?.market === market;
    },
});

export const purchasedCoinListState = atom<string[]>({
  key: RECOIL_KEY.purchasedCoinList,
  default: [],
  effects: [storageEffect(RECOIL_KEY.purchasedCoinList, 'localStorage')],
});
