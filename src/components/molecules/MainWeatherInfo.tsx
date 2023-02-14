import React from 'react';
import {MainWeatherData} from '@models/weather';
import styled from 'styled-components/native';

interface IProps {
  weather: MainWeatherData;
}

const MainWeatherInfo = ({weather}: IProps) => {
  const {humidity, wind_speed, visibility} = weather || {};
  return (
    <Wrapper>
      <InfoWrapper>
        <ValueText>{wind_speed}m/h</ValueText>
        <LabelText>Wind</LabelText>
      </InfoWrapper>
      <InfoWrapper>
        <ValueText>{humidity}%</ValueText>
        <LabelText>Humidity</LabelText>
      </InfoWrapper>
      <InfoWrapper>
        <ValueText>{visibility}m</ValueText>
        <LabelText>Visibility</LabelText>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  padding-vertical: 15px;
  border-radius: 15px;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0.3px solid white;
`;

const InfoWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const ValueText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const LabelText = styled.Text`
  color: white;
  margin-top: 5px;
  font-size: 11px;
`;

export default MainWeatherInfo;
