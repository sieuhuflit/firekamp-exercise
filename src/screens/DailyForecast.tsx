import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styled from 'styled-components/native';
import backgroundImage from '@assets/background_2.jpg';
import {useRecoilValueLoadable} from 'recoil';
import {weatherQuery} from '@recoil/selectors/weather';
import DailyForecastItem from '@components/molecules/DailyForecastItem';
import {DailyWeatherData} from '@models/weather';
import {useNavigation} from '@react-navigation/core';
import Separator from '@components/atoms/Separator';

function DailyForecast() {
  const navigation = useNavigation();
  const weatherDataLoadable = useRecoilValueLoadable(weatherQuery);

  const renderItem = ({item}: {item: DailyWeatherData}) => {
    return <DailyForecastItem day={item} />;
  };

  const renderSeparator = () => <Separator />;

  const renderContent = () => {
    if (weatherDataLoadable.state === 'loading') {
      return <ActivityIndicator size="large" color={'white'} />;
    }
    const {daily} = weatherDataLoadable.contents;
    return (
      <FlatList
        renderItem={renderItem}
        data={daily}
        ItemSeparatorComponent={renderSeparator}
      />
    );
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImgBackground source={backgroundImage} />
      <BlurView />
      <SafeAreaView style={{flex: 1}}>
        <Wrapper>
          <BackButton onPress={onPressBack}>
            <BackButtonText>{'<  Back'}</BackButtonText>
          </BackButton>
          {renderContent()}
        </Wrapper>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  margin-horizontal: 15px;
`;

const BlurView = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ImgBackground = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BackButton = styled.TouchableOpacity`
  margin-vertical: 10px;
`;

const BackButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

export default DailyForecast;
