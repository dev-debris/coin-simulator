import {atom} from 'recoil';
import {storageEffect} from '@/effects';

const RECOIL_KEY = {
  candle: 'candleState',
};

export const candleState = atom<CandleType>({
  key: RECOIL_KEY.candle,
  default: 'minute',
});

export const favoriteListState = atom<Market[]>({
  key: 'favoriteListState',
  default: [],
  effects: [storageEffect('favoriteListState', 'localStorage')],
});
