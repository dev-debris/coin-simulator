import {AtomEffect} from 'recoil';

export function storageEffect<T = any>(
  key: string,
  type: 'localStorage' | 'sessionStorage' = 'localStorage'
): AtomEffect<T> {
  if (typeof window === 'undefined') {
    return () => {};
  }

  return ({setSelf, onSet}) => {
    const storage = type === 'localStorage' ? localStorage : sessionStorage;
    const savedData = storage.getItem(key);
    if (savedData) setSelf(JSON.parse(savedData));

    onSet((newValue, _, isReset) => {
      isReset ? storage.removeItem(key) : storage.setItem(key, JSON.stringify(newValue));
    });
  };
}
