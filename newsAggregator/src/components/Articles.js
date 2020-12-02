import React, { useContext } from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  Image,
  PixelRatio,
} from 'react-native';

import {
  Text,
  Button,
} from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import { Context } from '../context/NewsContext';
import { theme } from '../theme';

const Articles = ({ articles, favorites }) => {
  return (
    <FlatList
      data={articles}
      keyExtractor={item => item.title}
      renderItem={({ item }) => (
        <Card 
          article={item}
          favorites={favorites}
        />
      )}
    />  
  );
}

const Card = ({ article, favorites }) => {
  const { addToFavorites, deleteArticle } = useContext(Context);

  return (
    <View style={styles.card}>
      <Image 
        style={styles.image}
        source={{
          uri: `${article.urlToImage}`
        }}
      />
      <Text 
        h4 
        h4Style={styles.headerStyle}
        >
          {article.title}
        </Text>
      <Text style={styles.description}>{article.description}</Text>

      <View style={styles.buttonRow}>
        <Button
          title="Read More"
          buttonStyle={styles.readMoreButton}
          onPress={() => WebBrowser.openBrowserAsync(article.url)}
        />
        {favorites ?
          <Button 
            icon={
              <MaterialIcons 
                name="delete" 
                size={24} 
                color={theme.white}
              />
            }
            onPress={() => deleteArticle(article)}
            buttonStyle={styles.favoriteButton}
          /> :
        <Button 
          icon={
            <MaterialIcons 
              name="favorite-border" 
              size={24} 
              color={theme.white}
            />
          }
          onPress={() => addToFavorites(article)}
          buttonStyle={styles.favoriteButton}
        />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: PixelRatio.getPixelSizeForLayoutSize(100),
    marginBottom: 20,
    marginTop: 10,
  },
  card: {
    marginHorizontal: 18,
    marginBottom: 20,
  },
  headerStyle: {
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  readMoreButton: {
    width: '100%',
    height: 50,
    backgroundColor: theme.green
  },
  favoriteButton: {
    height: 50,
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    backgroundColor: theme.red
  }
});

export default Articles;