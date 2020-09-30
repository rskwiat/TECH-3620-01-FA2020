import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { theme } from '../theme'; 

const Temperature = ({ main, cityName, sys }) => {
  if (!main) return null;
  const { temp, feels_like } = main;
  const { country } = sys;
  const temperature = temp.toFixed(0);
  const realFeel = feels_like.toFixed(0);

  return (
    <View>
      <Text style={styles.location}>
        {cityName}, {country}
      </Text>

      <Text style={styles.weatherTemp}>
        {`${temperature} °F`}
      </Text>

      <Text style={styles.realFeel}>
        {`Feels like ${realFeel} °F`}
      </Text>
    </View>
  );
}

export default Temperature;

const styles = StyleSheet.create({
  location: {
    marginTop: 80,
    textAlign: 'center',
    fontSize: 24,
    color: theme.white,
    fontWeight: 'bold'
  },
  weatherTemp: {
    fontSize: 72,
    textAlign: 'center',
    color: theme.white,
    marginTop: 5,
    fontWeight: 'bold'
  },
  realFeel: {
    fontSize: 30,
    marginTop: 10,
    color: theme.white,
    textAlign: 'center'
  }
});