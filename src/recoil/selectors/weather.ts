import {selector} from 'recoil';
import {fetchWeatherData} from '@api/weather';
import {latitudeState, longitudeState} from '@recoil/atoms/location';

export const weatherQuery = selector({
  key: 'weatherQuery',
  get: async ({get}) => {
    const response = await fetchWeatherData(
      get(latitudeState),
      get(longitudeState),
    );
    return response;
  },
});
