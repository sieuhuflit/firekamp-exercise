import React from 'react';
import {DailyWeatherData} from '@models/weather';
import {get} from 'lodash';
import styled from 'styled-components/native';
import dayjs from 'dayjs';

interface IProps {
  day: DailyWeatherData;
}

const DailyForecastItem = ({day}: IProps) => {
  const {
    dt,
    temp: {min, max},
  } = day || {};
  const icon = get(day, 'weather[0].icon');
  const description = get(day, 'weather[0].description');
  return (
    <Wrapper>
      <Weekday>{dayjs.unix(dt).format('ddd')}</Weekday>
      <WeatherIcon
        source={{
          uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        }}
        resizeMode={'contain'}
      />
      <Description>{description}</Description>
      <Temperature>{`${Math.round(max)}°  ${Math.round(min)}°`}</Temperature>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Weekday = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: white;
  flex: 1;
`;

const WeatherIcon = styled.Image`
  width: 60px;
  height: 60px;
  flex: 1;
`;

const Description = styled.Text`
  font-weight: 300;
  font-size: 16px;
  color: white;
  margin-top: 5px;
  flex: 1;
`;

const Temperature = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: white;
  flex: 1;
`;

export default DailyForecastItem;
