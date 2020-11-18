import React from 'react';

import {
  SafeAreaView,
  Text,
  Button
} from 'react-native';

const Tutorial = ({ navigation }) => (
  <SafeAreaView>
    <Text>Tutorial</Text>
    <Button title="Settings" onPress={() => navigation.navigate('Settings')} />

    <Button title="Main" onPress={() => navigation.navigate('Main')} />        
  </SafeAreaView>
);

export default Tutorial;