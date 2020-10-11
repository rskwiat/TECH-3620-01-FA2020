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

const DetailsScreen = ({ navigation }) => {
  return (
    <React.Fragment>
      <Header
        centerComponent={{ 
          text: 'Details', style: { color: '#fff' } 
        }}
      />
      <View style={styles.container}>
        <Text h3>Details Screen</Text>

        <Button
          title="Home"
          type="outline"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Home')}
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

export default DetailsScreen;