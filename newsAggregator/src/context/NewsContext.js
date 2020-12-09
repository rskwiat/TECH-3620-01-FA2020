import AsyncStorage from '@react-native-async-storage/async-storage';
import createContext from './CreateContext';
import { navigate } from '../rootNavigation';

import { api } from '../data/apiKey';

const initialState = {
  viewTutorial: false,
  token: null,
  articles: null,
  favorites: [],
};

const newsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'fetch_articles':
      return {
        ...state,
        articles: action.payload
      }
    case 'add_to_favorites':
      if (state.favorites) {
        if (state.favorites.includes(action.payload)) {
          return {
            ...state
          }
        }
        return {
          ...state,
          favorites: [
            ...state.favorites, 
            action.payload
          ]
        }
      } else {
        return {
          ...state,
          favorites: [action.payload]
        }
      }
    case 'delete_favorite':
      return {
        ...state,
        favorites: state.favorites.filter(favorite => favorite !== action.payload)
      }
    case 'check_token':
    case 'viewed_tutorial':
      return {
        viewTutorial: true,
        token: action.payload
      }
    case 'reset_application':
      return initialState
    default:
      return state;
  }
}

const checkToken = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('viewed_tutorial');
  if (token) {
    dispatch({
      type: 'check_token',
      payload: token,
    });
    navigate('Main');
  }
}

const viewTutorial = (dispatch) => {
  return async (value) => {
      const token = await AsyncStorage.setItem('viewed_tutorial', value);
      dispatch({
        type: 'viewed_tutorial',
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
      type: 'fetch_articles',
      payload: data.articles
    });

  } catch (e) {
    throw new Error(e.message);
  }
}

const changeTopic = (dispatch) => async (search) => {
  try {
    const response = await fetch(`http://newsapi.org/v2/everything?q=${search}&apiKey=${api.key}`)
    const data = await response.json();
        
    dispatch({
      type: 'fetch_articles',
      payload: data.articles
    });

  } catch(e) {
    throw new Error(e.message)
  }
}

const addToFavorites = (dispatch) => (value) => {
  dispatch({
    type: 'add_to_favorites',
    payload: value,
  });
}

const deleteArticle = (dispatch) => (value) => {
  dispatch({
    type: 'delete_favorite',
    payload: value
  });
}

const resetApplication = (dispatch) => async () => {
  await AsyncStorage.removeItem('viewed_tutorial');
  dispatch({
    type: 'reset_application'
  });
  navigate('Tutorial')
}


export const { Provider, Context } = createContext(
  newsReducer, 
  { 
    checkToken,
    viewTutorial,
    fetchArticles,
    changeTopic,
    addToFavorites,
    deleteArticle,
    resetApplication,
  },
  initialState
);