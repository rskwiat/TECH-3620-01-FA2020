import React from 'react';
import {
  Header,
  Text,
  Button,
} from 'react-native-elements';

import {
  View,
  StyleSheet,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <React.Fragment>
      <Header
        centerComponent={{ 
          text: 'Home', style: { color: '#fff' } 
        }}
      />
      <View style={styles.container}>
        <Text h3>Home Screen</Text>

        <Button
          title="Details"
          type="outline"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Details')}
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
  button: {
    marginTop: 40,
  }
})

export default HomeScreen;