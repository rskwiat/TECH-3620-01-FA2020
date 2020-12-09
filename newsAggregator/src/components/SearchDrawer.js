import React, { useState, useContext } from 'react';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import {
  Text,
  SearchBar
} from 'react-native-elements';

import {
  StyleSheet
} from 'react-native';

import topics from '../data/topics';
import { Context } from '../context/NewsContext';
import { theme } from '../theme';

const SearchDrawer = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const { changeTopic } = useContext(Context);

  const changeTopics = (term) => {
    changeTopic(term);
    navigation.toggleDrawer();
  }

  return (
    <DrawerContentScrollView>
      <SearchBar
        placeholder="Enter a topic"
        onChangeText={(value) => setSearch(value)}
        value={search}
        lightTheme={true}
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.input}
        onSubmitEditing={() => changeTopics(search)}
      />
      <Text h4 h4Style={styles.trendingHeader}>Current Trends:</Text>
      {
        topics.map((topic) => (
          <DrawerItem
            key={topic.term}
            label={topic.term}
            onPress={() => changeTopics(topic.term)}
          />
        ))
      }
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  trendingHeader: {
    paddingHorizontal: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  searchBar: {
    backgroundColor: theme.white,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  input: {
    backgroundColor: theme.white,
  }
});

export default SearchDrawer;