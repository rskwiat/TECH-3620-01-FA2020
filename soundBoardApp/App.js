import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

import { 
  AppearanceProvider, 
  Appearance,
} from 'react-native-appearance';

import { Audio } from 'expo-av';

/* Importing reusable components */
import Card from './src/components/Card';

/* Importing assets */
import Goose from './assets/goose.jpg';
import StormTrooper from './assets/stormtrooper.jpg';

class App extends Component {
  async componentDidMount() {
    /**
     * Setting up Audio.Sound Objects from Expo
     * https://docs.expo.io/versions/latest/sdk/av/
     */
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
    });

    this.honk = new Audio.Sound();

    const status = {
      shouldPlay: false,
    }

    this.honk.loadAsync(require('./assets/honk.mp3'), status, false);
  }

  Honk = () => {
    this.honk.playAsync();
    this.honk.setPositionAsync(0); //resets sound after playing
  }

  render() {
    /**
     * Application will have 4 cards a user can press on that can play different noises.
     * Each Card Component can be reused across any React Native Project. 
     */

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Sound Board</Text>
        <Card onPress={this.Honk} image={Goose} />
        <Card onPress={this.Honk} image={StormTrooper} />
      </SafeAreaView>
    );
  }
}

export default () => (
  <AppearanceProvider>
    <App />
  </AppearanceProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Appearance.getColorScheme() === 'dark' ? '#000' : '#fff' //Detects if a user is in Dark Mode, returns black or white background color
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: Appearance.getColorScheme() === 'dark' ? '#fff' : '#000' //Detects if a user is in Dark Mode, returns black or white text color
  },
});