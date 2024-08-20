/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './navigationer/AppNavigation';


function App() {
  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>
  )
}


export default App;
