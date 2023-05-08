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
  remainingCash: 'remainingCashState',
};

export const favoriteCoinListState = atom<Coin[]>({
  key: RECOIL_KEY.favoriteCoinList,
  default: [],
  effects: [storageEffect(RECOIL_KEY.favoriteCoinList, 'localStorage')],
});

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

export const selectedCoinState = atom<Coin | null>({
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

export const purchasedCoinListState = atom<PurchasedCoinSummary[]>({
  key: RECOIL_KEY.purchasedCoinList,
  default: [],
  effects: [storageEffect(RECOIL_KEY.purchasedCoinList, 'localStorage')],
});

export const remainingCashState = atom<number>({
  key: RECOIL_KEY.remainingCash,
  default: 100000000,
  effects: [storageEffect(RECOIL_KEY.remainingCash, 'localStorage')],
});
