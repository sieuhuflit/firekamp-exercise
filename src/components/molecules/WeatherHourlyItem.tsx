import React from 'react';
import {MainWeatherData} from '@models/weather';
import {get} from 'lodash';
import styled from 'styled-components/native';
import dayjs from 'dayjs';

interface IProps {
  weather: MainWeatherData;
}

const WeatherHourlyItem = ({weather}: IProps) => {
  const {dt, temp} = weather || {};
  const icon = get(weather, 'weather[0].icon');

  return (
    <Wrapper>
      <Hour>{dayjs.unix(dt).format('HH:00')}</Hour>
      <WeatherIcon
        source={{
          uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        }}
        resizeMode={'contain'}
      />
      <Temperature>{Math.round(temp)}°C</Temperature>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 5px;
  justify-content: center;
  align-items: center;
`;
const WeatherIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;
const Hour = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: rgb(189, 195, 199);
`;

const Temperature = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: white;
  margin-top: 5px;
`;

export default WeatherHourlyItem;
