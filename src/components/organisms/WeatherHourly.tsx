import React from 'react';
import {MainWeatherData} from '@models/weather';
import styled from 'styled-components/native';
import WeatherHourlyItem from '../molecules/WeatherHourlyItem';
import {ActivityIndicator, FlatList} from 'react-native';
import Separator from '../atoms/Separator';
import {weatherQuery} from '@recoil/selectors/weather';
import {useRecoilValueLoadable} from 'recoil';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const WeatherHourly = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const weatherDataLoadable = useRecoilValueLoadable(weatherQuery);
  const {hourly} = weatherDataLoadable.contents;
  if (weatherDataLoadable.state === 'loading') {
    return <ActivityIndicator size="large" color={'white'} />;
  }
  if (weatherDataLoadable.state === 'hasError') {
    throw weatherDataLoadable.contents;
  }
  const renderItem = ({item}: {item: MainWeatherData}) => {
    return <WeatherHourlyItem weather={item} />;
  };

  const renderSeparator = () => <Separator />;

  const onPressNextSevenDays = () => {
    navigation.navigate('DailyForecast');
  };

  return (
    <Wrapper>
      <CardHeader>
        <TodayLabel>Today</TodayLabel>
        <ButtonMoreDays onPress={onPressNextSevenDays}>
          <ButtonMoreDaysLabel>Next 7 days</ButtonMoreDaysLabel>
        </ButtonMoreDays>
      </CardHeader>
      <HourlyWrapper>
        <FlatList
          data={hourly}
          renderItem={renderItem}
          horizontal
          keyExtractor={item => item.dt.toString()}
          ItemSeparatorComponent={renderSeparator}
          showsHorizontalScrollIndicator={false}
        />
      </HourlyWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: column;
  background-color: rgba(44, 62, 80, 0.7);
  margin-horizontal: 10px;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 25px;
`;

const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonMoreDays = styled.TouchableOpacity`
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-left: 5px;
`;

const TodayLabel = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-left: 5px;
`;

const ButtonMoreDaysLabel = styled.Text`
  font-size: 13px;
  color: #c7ecee;
  font-weight: 500;
  margin-left: 5px;
`;

const HourlyWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export default WeatherHourly;
