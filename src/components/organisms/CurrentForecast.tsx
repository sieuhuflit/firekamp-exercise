import React from 'react';
import styled from 'styled-components/native';
import MainWeatherInfo from '../molecules/MainWeatherInfo';
import {ActivityIndicator} from 'react-native';
import {useRecoilValueLoadable} from 'recoil';
import {weatherQuery} from '@recoil/selectors/weather';
import dayjs from 'dayjs';
import Separator from '../atoms/Separator';
import ForecastSearchInput from '../atoms/ForecastSearchInput';

const CurrentForecast = () => {
  const weatherDataLoadable = useRecoilValueLoadable(weatherQuery);
  if (weatherDataLoadable.state === 'loading') {
    return (
      <CurrentView>
        <ActivityIndicator size="large" color={'white'} />
      </CurrentView>
    );
  }
  if (weatherDataLoadable.state === 'hasError') {
    throw weatherDataLoadable.contents;
  }
  const {current} = weatherDataLoadable.contents || {};
  const {temp = ''} = current || {};
  return (
    <CurrentView>
      <ForecastSearchInput />
      <DayText>{'Today,' + dayjs().format('MMM D HH:MM')}</DayText>
      <TemperatureText>{Math.round(temp)}°C</TemperatureText>
      <Separator />
      <MainWeatherInfo weather={current} />
    </CurrentView>
  );
};

const CurrentView = styled.View`
  flex: 1;
  flex-direction: column;
  padding-horizontal: 15px;
`;

const DayText = styled.Text`
  font-size: 13px;
  color: white;
  font-weight: 200;
  opacity: 0.8;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);
  font-weight: 400;
  margin-top: 5px;
`;

const TemperatureText = styled.Text`
  font-weight: 600;
  margin-top: 5px;
  font-size: 60px;
  color: white;
  letter-spacing: -1px;
  opacity: 0.8;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);
`;

export default CurrentForecast;
