import createContext from './CreateContext';
import { navigate } from '../rootNavigation';

const initialState = {
  viewTutorial: false,
  token: null
};

const viewTutorial = () => {
  return () => {
    navigate('Main');
  }
};


export const { Provider, Context } = createContext(
  null, 
  { 
    viewTutorial,
  },
  initialState
);