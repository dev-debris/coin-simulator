import {atom} from 'recoil';
import {storageEffect} from '@/effects';

const RECOIL_KEY = {
  candle: 'candleState',
};

export const candleState = atom<CandleType>({
  key: RECOIL_KEY.candle,
  default: 'minute',
});

export const favoriteCoinListState = atom<Market[]>({
  key: 'favoriteCoinListState',
  default: [],
  effects: [storageEffect('favoriteCoinListState', 'localStorage')],
});

export const selectedCoinState = atom<Market[]>({
  key: 'selectedCoinState',
  default: [],
});
