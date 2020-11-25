import React, { useEffect, useContext } from 'react';

import {
  Header,
} from 'react-native-elements';

import { Articles, Loading } from '../components';
import { Context } from '../context/NewsContext';
import { theme } from '../theme';

const ArticleList = () => {
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
      />
      {state.articles === null ? <Loading /> : <Articles articles={state.articles} />}
    </React.Fragment>
  );
}


export default ArticleList;