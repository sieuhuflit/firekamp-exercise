import {atom} from 'recoil';

export const cityInputState = atom<string>({
  key: 'cityInputState',
  default: 'Ho Chi Minh', // TODO: Hard code Ho Chi Minh city
});

export const latitudeState = atom<number>({
  key: 'latitudeState',
  default: 10.7547606, // TODO: Hard code Ho Chi Minh latitude
});

export const longitudeState = atom<number>({
  key: 'longitudeState',
  default: 106.5551454, // TODO: Hard code Ho Chi Minh longitude
});
