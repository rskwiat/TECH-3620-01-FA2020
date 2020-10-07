/**
 * For next week October 6th
 */

import React from 'react';

import { 
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import Row from './Row';

import { theme } from '../theme';

const InputBar = ({ 
  onChangeText, 
  value, 
  getResult, 
  getLocation 
}) => {
  return (
    <React.Fragment>
    <View style={styles.container}>
      <TextInput
        placeholder="Please enter a location"
        clearTextOnFocus={true} //iOS only
        clearButtonMode="always" //iOS only
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
      <Row>
        <TouchableOpacity
          style={styles.button}
          //passing in the getResult function to the onPress event
          onPress={getResult} 
        >
          <Text style={styles.buttonText}>Get Location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.locationButton}
          onPress={getLocation}
        >
          <Text style={styles.buttonText}>
            <MaterialIcons name="my-location" size={24} color={theme.white} />
          </Text>
        </TouchableOpacity>
      </Row>
    </React.Fragment>
  );
};

export default InputBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
  },
  input: {
    fontSize: 22,
    height: 55,
    flexDirection: 'row',
    marginTop: 80,
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.white,
  },
  button: {
    backgroundColor: theme.green,
    padding: 15,
    borderRadius: 10,
    minWidth: '65%',
  },
  locationButton: {
    backgroundColor: theme.ltGray,
    padding: 15,
    borderRadius: 10,
    minWidth: '20%',
  },
  buttonText: {
    color: theme.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

