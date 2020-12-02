import React, { useContext } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Header,
  Text,
} from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons'; 
import { Articles } from '../components';
import { Context } from '../context/NewsContext';
import { theme } from '../theme';

const Favorites = ({ navigation }) => {
  const { state } = useContext(Context);
  return (
    <React.Fragment>
      <Header 
        backgroundColor={theme.blue}
        centerComponent={{
          text: 'Favorites',
          style: { color: theme.white }
        }}
        rightComponent={
          <MaterialIcons 
            name="settings" 
            size={24} 
            color={theme.white}
            onPress={() => navigation.navigate('Settings')}
          />
        }
      />
      {state.favorites === undefined || state.favorites.length === 0 ? <AddFavoriteDialog /> : <Articles articles={state.favorites} favorites />}
    </React.Fragment>
  );
}

const AddFavoriteDialog = () => (
  <View style={styles.container}>
    <Text h4 h4Style={styles.headerStyle}>No Articles Saved</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 18
  },
  headerStyle: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})




export default Favorites;