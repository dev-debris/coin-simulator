import {atom, AtomEffect} from 'recoil';

const RECOIL_KEY = {
  candle: 'candleState',
};

export const candleState = atom<CandleType>({
  key: RECOIL_KEY.candle,
  default: 'minute',
});

function storageEffect<T = any>(
  key: string,
  storage: 'localStorage' | 'sessionStorage' = 'localStorage'
): AtomEffect<T> {
  if (typeof window === 'undefined') {
    return () => {};
  }

  return ({setSelf, onSet}) => {
    const savedData = localStorage.getItem('favoriteList');
    if (savedData) setSelf(JSON.parse(savedData));

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem('favoriteList')
        : localStorage.setItem('favoriteList', JSON.stringify(newValue));
    });
  };
}

export const favoriteList = atom<Market[]>({
  key: 'favoriteList',
  default: [],
  effects: [storageEffect('favoriteList')],
});
