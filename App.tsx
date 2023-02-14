import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ErrorBoundary from 'react-native-error-boundary';
import {RecoilRoot} from 'recoil';
import Home from '@screens/Home';
import DailyForecast from '@screens/DailyForecast';
import {Text} from 'react-native';

const HomeStack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={<Text>Loading...</Text>}>
          <NavigationContainer>
            <HomeStack.Navigator screenOptions={{headerShown: false}}>
              <HomeStack.Screen name="Home" component={Home} />
              <HomeStack.Screen
                name="DailyForecast"
                component={DailyForecast}
              />
            </HomeStack.Navigator>
          </NavigationContainer>
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;
