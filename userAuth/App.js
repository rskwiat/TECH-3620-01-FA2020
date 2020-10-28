import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  LoggedInScreen,
  SignInScreen, 
  SignUpScreen
} from './src/views';

import { firebase } from './src/firebase/config';
import screenOptions from './src/config/screenOptions';

const Stack = createStackNavigator();

const AuthenticatedScreens = (
  <Stack.Screen 
    name="LoggedIn"
    options={screenOptions}
    component={LoggedInScreen}
  />
);

const nonAuthenticatedScreens = (
  //React requires either a view or a Fragment wrapped around files like this.
  <React.Fragment>
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
  </React.Fragment>
);


const App = () => {
  const [user, setUser] = useState(null); //checks if the user is logged in or not
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">        
        { user ? AuthenticatedScreens : nonAuthenticatedScreens }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;