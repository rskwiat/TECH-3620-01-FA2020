import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const Row = ({ children }) => (
  <View style={styles.row}>
    {children}
  </View>
);

export default Row;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});