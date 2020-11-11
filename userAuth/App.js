import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Need the base-64 encode, decode for sending info to firebase
import { decode, encode } from 'base-64'

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

import {
  LoggedInScreen,
  SignInScreen, 
  SignUpScreen
} from './src/views';

import { firebase } from './src/firebase/config';
import screenOptions from './src/config/screenOptions';

const Stack = createStackNavigator();

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

  useEffect(() => {
    //checks if the user is logged in.
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef.doc(user.uid).get().then((data) => {
          const userData = data.data();
          setUser(userData);
        });
      } else {
        setUser(null);
      }
    });

    //clean up function -- returns empty object
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">        
        { user ? 
          <Stack.Screen 
            name="LoggedIn"
            options={screenOptions}
            component={LoggedInScreen}
            initialParams={{ user }} //pass in user object
          /> : nonAuthenticatedScreens }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;