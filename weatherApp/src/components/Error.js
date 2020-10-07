import React from 'react';

import {
  View,
  Text, 
  StyleSheet,
} from 'react-native';

const Error = ({ msg }) => (
  <View>
    <Text style={styles.errorText}>{msg}</Text>
  </View>
);

export default Error;

const styles = StyleSheet.create({
  errorText: {
    color: '#c0392b',
    textAlign: 'center',
    fontSize: 18,
    padding: 20,
  }
})
