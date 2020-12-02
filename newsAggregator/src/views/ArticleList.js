import React, { useEffect, useContext } from 'react';

import {
  Header,
} from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons'; 
import { Articles, Loading } from '../components';
import { Context } from '../context/NewsContext';
import { theme } from '../theme';

const ArticleList = ({ navigation }) => {
  const { fetchArticles, state } = useContext(Context);

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <React.Fragment>
      <Header 
        backgroundColor={theme.blue}
        centerComponent={{
          text: 'Top Trending Stories',
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
      {state.articles === null ? <Loading /> : <Articles articles={state.articles} />}
    </React.Fragment>
  );
}


export default ArticleList;