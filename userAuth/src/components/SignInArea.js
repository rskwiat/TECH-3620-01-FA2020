import React from 'react';

import {
  View,
  Text,
  StyleSheet 
} from 'react-native';

import { theme } from '../theme';

const SignInArea = ({ text, linkText, onPress }) => (
  <View>
    <Text style={styles.text}>{text}
      <Text style={styles.link} onPress={onPress}>&nbsp;{linkText}</Text>
    </Text>
  </View>
);

export default SignInArea;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    fontWeight: 'bold',
    color: theme.blue
  },
});