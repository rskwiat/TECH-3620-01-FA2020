import React from 'react';

import {
  Text,
  StyleSheet,
} from 'react-native';

import { theme } from '../theme';

const Instructions = ({ status }) => {
  if (status === 200) return null;
  return (
    <Text style={styles.instructions}>
      {status === '404' || '400' ? 'Please Enter a Location' : null}
    </Text>
  );
}

export default Instructions;

const styles = StyleSheet.create({
  instructions: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center',
    color: theme.white
  }
});

