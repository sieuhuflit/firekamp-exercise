export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Temp {
  day: number;
  eve: number;
  morn: number;
  night: number;
  min: number;
  max: number;
}

export interface MainWeatherData {
  dt: number;
  temp: number;
  humidity: number;
  visibility: number;
  wind_speed: number;
  weather: WeatherCondition[];
}

export interface DailyWeatherData {
  dt: number;
  temp: Temp;
  humidity: number;
  visibility: number;
  wind_speed: number;
  weather: WeatherCondition[];
}

export interface CurrentWeatherDataResponse {
  timezone: string;
  current: MainWeatherData;
  hourly: MainWeatherData[];
  daily: DailyWeatherData[];
}
