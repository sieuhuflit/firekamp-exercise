import {atom} from 'recoil';

export const cityInputState = atom<string>({
  key: 'cityInputState',
  default: 'Ho Chi Minh',
});

export const latitudeState = atom<number>({
  key: 'latitudeState',
  default: 10.7547606,
});

export const longitudeState = atom<number>({
  key: 'longitudeState',
  default: 106.5551454,
});
