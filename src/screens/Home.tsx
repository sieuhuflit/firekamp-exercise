import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import backgroundImage from '@assets/background.jpg';
import CurrentForecast from '@components/organisms/CurrentForecast';
import WeatherHourly from '@components/organisms/WeatherHourly';

function Home() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImgBackground source={backgroundImage}>
        <SafeAreaView style={{flex: 1}}>
          <Wrapper>
            <CurrentForecast />
            <WeatherHourly />
          </Wrapper>
        </SafeAreaView>
      </ImgBackground>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  margin-top: 15px;
`;

const ImgBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export default Home;
