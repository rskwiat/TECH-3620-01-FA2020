/**
 * Importing useState Hook into the app
 * https://reactjs.org/docs/hooks-intro.html
 */

import React, { useState, useEffect } from 'react';

import { 
  StyleSheet,
  SafeAreaView,
  Keyboard,
} from 'react-native';

import * as Location from 'expo-location';

import { 
  Instructions,
  Temperature,
  Weather,
  InputBar,
  Error
} from './src/components';

import { theme } from './src/theme';
import key from './src/key'; //api key file, should be ignored / not store in git

const App = () => {
  const [location, setLocation] = useState(null); //default state === null
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getResult = async (location) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key.appId}`); //Blackboard chat removes the https
      const data = await response.json(); //returning data as a json object
  
      setResult(data); //setting data in our result state
      setLocation(''); //changes the state to an empty string
      Keyboard.dismiss(); //dismisses keyboard
    } catch(e) {
      setErrorMsg(e);  
    }
  }

  const getLocation = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission Denied');
        throw 'Permissions Denied';
      }

      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key.appId}`); //Blackboard chat removes the https
      const data = await response.json();

      setResult(data);
      setLocation('');

    } catch(e) {
      setErrorMsg(e);
    }
  }

  //Use effect to get a response to check if the api is working
  useEffect(() => {
    getResult();
  }, []);

  //Checking if the result is valid or not
  if (!result) return null;

  //Destructuring variables from the result object
  const { cod, main, name, sys, weather, wind } = result;

  return (
    <SafeAreaView style={styles.container}>
      <InputBar
        onChangeText={text => setLocation(text)}
        value={location}
        getResult={() => getResult(location)}
        getLocation={() => getLocation()}
      />

      <Instructions status={cod} />
      <Temperature main={main} cityName={name} sys={sys} /> 
      <Weather weather={weather} wind={wind} />
      <Error msg={errorMsg} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.ltBlue,
  },
});
