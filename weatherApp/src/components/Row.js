import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

const Row = ({ children }) => (
  <View style={styles.row}>
    {children}
  </View>
);

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 40,
    marginHorizontal: 18,
    justifyContent: 'space-between'
  }
});