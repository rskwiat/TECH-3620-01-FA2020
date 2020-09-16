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
import { Card, Row } from './src/components';

import { 
  setBackgroundColor,
  setTextColor 
} from './src/utils/setTheme';

/* Importing assets */
import Goose from './assets/goose.jpg';
import StormTrooper from './assets/stormtrooper.jpg';
import Crowd from './assets/crowd.jpg';
import Fireworks from './assets/fireworks.jpg';

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
    this.lazer = new Audio.Sound();
    this.fireworks = new Audio.Sound();
    this.crowd = new Audio.Sound();

    const status = {
      shouldPlay: false,
    }

    this.honk.loadAsync(require('./assets/honk.mp3'), status, false);
    this.lazer.loadAsync(require('./assets/lazer.mp3'), status, false);
    this.fireworks.loadAsync(require('./assets/fireworks.mp3'), status, false);
    this.crowd.loadAsync(require('./assets/crowd.mp3'), status, false);
  }

  Honk = () => {
    this.honk.playAsync();
    this.honk.setPositionAsync(0); //resets sound after playing
  }

  Lazer = () => {
    this.lazer.playAsync();
    this.lazer.setPositionAsync(0);
  }

  Fireworks = () => {
    this.fireworks.playAsync();
    this.fireworks.setPositionAsync(0);
  }

  Crowd = () => {
    this.crowd.playAsync();
    this.crowd.setPositionAsync(0);
  }

  render() {
    /**
     * Application will have 4 cards a user can press on that can play different noises.
     * Each Card Component can be reused across any React Native Project. 
     */

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Sound Board</Text>
        <Row>
          <Card onPress={this.Honk} image={Goose} />
          <Card onPress={this.Lazer} image={StormTrooper} />
        </Row>

        <Row>
          <Card onPress={this.Fireworks} image={Fireworks} />
          <Card onPress={this.Crowd} image={Crowd} />
        </Row>
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
    backgroundColor: setBackgroundColor(),//Detects if a user is in Dark Mode, returns black or white background color
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: setTextColor() //Detects if a user is in Dark Mode, returns black or white text color
  },
});