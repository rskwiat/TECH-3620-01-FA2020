import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import { theme } from '../theme';

const Card = ({ children }) => (
  <View style={styles.card}>
    {children}
  </View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.white,
    padding: 10,
    margin: 10,
  },
});
