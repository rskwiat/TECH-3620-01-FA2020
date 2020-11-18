import React, { useContext } from 'react';

import {
  SafeAreaView,
  Text,
  Button
} from 'react-native';

import { Provider, Context } from '../context/NewsContext';


const Tutorial = () => {
  const { viewTutorial, state } = useContext(Context);

  return (
    <SafeAreaView>
    <Text>Tutorial</Text>
    <Button title="Viewed Tutorial" onPress={() => viewTutorial()} />


    {/* <Button title="Settings" onPress={() => navigation.navigate('Settings')} />

    <Button title="Main" onPress={() => navigation.navigate('Main')} />         */}
    </SafeAreaView>
  );
}

export default Tutorial;