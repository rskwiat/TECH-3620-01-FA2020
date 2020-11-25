import React from 'react';

import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  Text,
} from 'react-native-elements';

const Articles = ({ articles }) => {
  return (
    <FlatList
      data={articles}
      keyExtractor={item => item.title}
      renderItem={({ item }) => (
        <Card 
          article={item}
        />
      )}
    />
  );
}

const Card = ({ article }) => {
  console.log(article);
  return (
    <View style={styles.card}>
      <Text h4>{article.title}</Text>
      <Text>{article.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 18,
    marginBottom: 20,
  }
});

export default Articles;