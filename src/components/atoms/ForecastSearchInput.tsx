import React from 'react';
import {
  cityInputState,
  latitudeState,
  longitudeState,
} from '@recoil/atoms/location';
import {useRecoilState} from 'recoil';
import styled from 'styled-components/native';
import {fetchGeoCodingData} from '@api/geoCoding';
import {get} from 'lodash';

const ForecastSearchInput = () => {
  const [, setLatitude] = useRecoilState(latitudeState);
  const [, setLongitude] = useRecoilState(longitudeState);
  const [cityInput, setSearchInput] = useRecoilState(cityInputState);

  const onChangeText = (text: string) => {
    setSearchInput(text);
  };

  const onSubmitEditing = async () => {
    const response = await fetchGeoCodingData(cityInput);
    if (response && response.length > 0) {
      const firstResultLatitude = get(response, '[0].lat');
      const firstResultLongitude = get(response, '[0].lon');
      setLatitude(firstResultLatitude);
      setLongitude(firstResultLongitude);
    }
  };

  return (
    <Wrapper>
      <Pin source={require('@assets/pin.png')} />
      <SearchCityInput
        value={cityInput}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        enterKeyHint="search"
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Pin = styled.Image`
  width: 25px;
  height: 25px;
  tint-color: white;
`;

const SearchCityInput = styled.TextInput`
  margin-left: 10px;
  color: white;
  background-color: transparent;
  font-size: 30px;
  color: white;
  font-weight: 500;
`;

export default ForecastSearchInput;
