import React, { useContext } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Text,
  Button,
  Header
} from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons'; 
import { Context } from '../context/NewsContext';
import { theme } from '../theme';

const Settings = ({ navigation }) => {
  const { resetApplication } = useContext(Context);

  return (
    <React.Fragment>
      <Header 
        backgroundColor={theme.blue}
        centerComponent={{
          text: 'Settings',
          style: { color: theme.white }
        }}
        leftComponent={
          <MaterialIcons 
            name="home" 
            size={24} 
            color={theme.white}
            onPress={() => navigation.navigate('Articles')}
          />
        }
      />
      <View style={styles.container}>
        <Text h4 h4Style={styles.headerStyle}>Danger Zone</Text>
        <Button 
          onPress={() => resetApplication()} 
          title="Reset Application"
          buttonStyle={styles.resetButton}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 40,
  },
  headerStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: theme.red,
  }
})

export default Settings;