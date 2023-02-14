import constants from '@constants/index';

export const fetchGeoCodingData = async (q: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=${constants.OPEN_WEATHER_MAP_API_KEY}`,
  );
  const result = await response.json();
  return result;
};
