import AsyncStorage from '@react-native-async-storage/async-storage';
import createContext from './CreateContext';
import { navigate } from '../rootNavigation';

import { api } from '../data/apiKey';

const initialState = {
  viewTutorial: false,
  token: null,
  articles: null,
};

const newsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'fetch_articles':
      return {
        ...state,
        articles: action.payload
      }
    case 'check_token':
    case 'viewed_tutorial':
      return {
        viewTutorial: true,
        token: action.payload
      }
    default:
      return state;
  }
}

const checkToken = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('viewed_tutorial');
  if (token) {
    dispatch({
      'type': 'check_token',
      payload: token,
    });
    navigate('Main');
  }
}

const viewTutorial = (dispatch) => {
  return async (value) => {
      const token = await AsyncStorage.setItem('viewed_tutorial', value);
      dispatch({
        'type': 'viewed_tutorial',
        payload: token,
      });
      navigate('Main');
    }
};

const fetchArticles = (dispatch) => async () => {
  try {
    const response = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${api.key}`);
    const data = await response.json();
    
    dispatch({
      'type': 'fetch_articles',
      payload: data.articles
    });

  } catch (e) {
    throw new Error(e.message);
  }
}


export const { Provider, Context } = createContext(
  newsReducer, 
  { 
    checkToken,
    viewTutorial,
    fetchArticles,
  },
  initialState
);