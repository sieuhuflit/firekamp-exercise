import constants from '@constants/index';

export const fetchWeatherData = async (latitude: number, longitude: number) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${constants.OPEN_WEATHER_MAP_API_KEY}`,
  );
  const result = await response.json();
  if (response.ok === false) {
    throw new Error(result.message);
  }
  return result;
};
