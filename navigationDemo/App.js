import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, DetailsScreen } from './src/views';

const Stack = createStackNavigator();

const screenOptions = () => ({
  gestureEnabled: false,
});

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen 
        options={screenOptions}
        name="Home" 
        component={HomeScreen} />
      <Stack.Screen
        options={screenOptions}
        name="Details" 
        component={DetailsScreen} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
