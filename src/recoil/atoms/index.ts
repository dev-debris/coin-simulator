import {atom} from 'recoil';
import {RECOIL_KEY} from '@/recoil';
import {storageEffect} from '@/recoil/effects';

export const favoriteCoinListState = atom<Coin[]>({
  key: RECOIL_KEY.favoriteCoinList,
  default: [],
  effects: [storageEffect(RECOIL_KEY.favoriteCoinList, 'localStorage')],
});

export const selectedCoinState = atom<Coin | null>({
  key: RECOIL_KEY.selectedCoin,
  default: null,
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
