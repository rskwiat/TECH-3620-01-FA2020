import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { 
  SignInScreen, 
  SignUpScreen
} from './src/views';

import screenOptions from './src/config/screenOptions';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen 
          options={screenOptions} 
          name="SignIn" 
          component={SignInScreen} 
        />
        <Stack.Screen 
          options={screenOptions} 
          name="SignUp" 
          component={SignUpScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;