import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

export default Container;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 40,
  }
});