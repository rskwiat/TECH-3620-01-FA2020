import React from 'react';

import {
  View,
  StyleSheet,
  PixelRatio,
  Image,
  Dimensions
} from 'react-native';

import {
  Text 
} from 'react-native-elements';

const TutorialPage = ({ headerText, children }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={{ width, height }}>
      <View style={styles.container}>
        <Image 
          style={styles.imageStyle} 
          source={require('../../../assets/intro-first.jpg')}
        />
        <Text h3>{headerText}</Text>
        <Text style={styles.intro}>Get breaking news headlines, and search for articles from news sources and blogs all over the web.</Text>
        {children}
      </View>
    </View>
  );
}

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
});

export default TutorialPage;