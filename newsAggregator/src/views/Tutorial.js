import React, { useState, useContext } from 'react';

import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  Button,
  Text
} from 'react-native-elements';

import { Context } from '../context/NewsContext';
import TutorialPage from './subScreens/TutorialPage';

const Tutorial = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { viewTutorial } = useContext(Context);
  const { width } = Dimensions.get('window');

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);

    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setSliderPage(event);
        }}
      >
        <TutorialPage headerText="News Aggregation Service" />
        <TutorialPage headerText="News Service Page 2">
          <Button 
            title="Get Started"
            onPress={() => viewTutorial('visited')}
          />
        </TutorialPage>
      </ScrollView>
      
      <View style={styles.pagination}>
        {Array.from(Array(2).keys()).map((key, index) => (
          <View style={[
            styles.paginationDots,
            { opacity: pageIndex === index ? 1 : 0.2 }
          ]}
            key={index}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'red',
    marginLeft: 10,
  }
});

export default Tutorial;