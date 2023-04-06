import {atom} from 'recoil';
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

export const selectedCoinState = atom<Market[]>({
  key: RECOIL_KEY.selectedCoin,
  default: [],
});
