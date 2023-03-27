import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

const RECOIL_KEY = {
  candle: 'candleState',
};

const {persistAtom} = recoilPersist({
  key: 'favoriteList',
});

export const candleState = atom<CandleType>({
  key: RECOIL_KEY.candle,
  default: 'minute',
});

export const favoriteList = atom({
  key: 'favoriteList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
