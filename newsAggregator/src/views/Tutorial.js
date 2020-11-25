import React, { useContext } from 'react';

import {
  View,
  SafeAreaView,
  PixelRatio,
  Image,
  StyleSheet,
} from 'react-native';

import {
  Button,
  Text
} from 'react-native-elements';

import { Context } from '../context/NewsContext';

const Tutorial = () => {
  const { viewTutorial } = useContext(Context);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image 
          style={styles.imageStyle} 
          source={require('../../assets/intro-first.jpg')}
        />
        <Text h3>News Aggregation Service</Text>
        <Text style={styles.intro}>Get breaking news headlines, and search for articles from news sources and blogs all over the web.</Text>
        <Button 
          title="Get Started"
          onPress={() => viewTutorial('visited')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(200),
    width: '100%',
    marginBottom: 40,
    backgroundColor: '#000',
  },
  container: {
    marginHorizontal: 18,
  },
  intro: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 20,
  }
})

export default Tutorial;