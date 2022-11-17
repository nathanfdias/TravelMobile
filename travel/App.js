import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import GeneralStatusBarColor from './src/components/GeneralStatusBarColor';

export default function App() {
  return (
      <NavigationContainer>
        {/* <GeneralStatusBarColor backgroundColor="#003580" barStyle="light-content"/> */}
        <Routes />
      </NavigationContainer>
  );
}