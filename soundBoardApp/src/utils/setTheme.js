import {
  Appearance
} from 'react-native-appearance';

export const theme = {
  white: '#fff',
  black: '#000'
};

export const setBackgroundColor = () => {
  return Appearance.getColorScheme() === 'dark' ? theme.black : theme.white;
}

export const setTextColor = () => {
  return Appearance.getColorScheme() === 'dark' ? theme.white : theme.black;
}