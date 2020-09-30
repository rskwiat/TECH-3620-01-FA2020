import React from 'react';

import {
  Text,
  StyleSheet
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import Row from './Row';
import Card from './Card';
import Icon from './Icon';

import { theme } from '../theme';

const Weather = ({ weather, wind }) => {
  if (!wind || !weather) return null;

  return (
    <Row>

      <Card>
        <Text style={styles.headline}>{wind.speed} MPH</Text>
        <Feather 
          style={styles.icon}
          name="compass" 
          size={60} 
          color={theme.black}
        />
      </Card>

      <Card>
        {weather.map((w, i) => {
          return (
            <React.Fragment key={i}>
              <Text 
                key={w.name}
                style={styles.headline}
              >
                {w.description}
              </Text>
              <Icon styles={styles.icon} name={w.main} />
            </React.Fragment>
          );
        })}
      </Card>

    </Row>
  );
}

export default Weather;

const styles = StyleSheet.create({
  headline: {
    paddingTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  icon: {
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
  }
});