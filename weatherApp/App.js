/**
 * Importing useState Hook into the app
 * https://reactjs.org/docs/hooks-intro.html
 */

import React, { useState } from 'react';

import { 
  StyleSheet, 
  Text, 
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import { theme } from './src/theme';
import key from './src/key'; //api key file, should be ignored / not store in git

const App = () => {
  const [location, setLocation] = useState(null); //default state === null
  const [result, setResult] = useState(null);
  
  const getResult = async (location) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key.appId}`); //Blackboard chat removes the https
    const data = await response.json(); //returning data as a json object

    setResult(data); //setting data in our result state
    setLocation(''); //changes the state to an empty string
    Keyboard.dismiss(); //dismisses keyboard
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        clearTextOnFocus={true} //iOS only
        clearButtonMode="always" //iOS only
        style={styles.input}
        onChangeText={text => setLocation(text)}
        value={location}
      />

      <TouchableOpacity
        style={styles.button}
        //passing in the getResult function to the onPress event
        onPress={() => getResult(location)} 
      >
        <Text style={styles.buttonText}>Get Location</Text>
      </TouchableOpacity>

      <Text>
        {
        /** Renders the temp results only if it's true */
        result && result.main.temp
        }
      </Text>

      <Text>Please Enter a Location</Text>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.ltBlue,
  },
  input: {
    fontSize: 22,
    height: 55,
    flexDirection: 'row',
    marginTop: 80,
    marginBottom: 40,
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.white,
  },
  button: {
    backgroundColor: theme.green,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: theme.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});
