/**
 * Completely optionly returns an object with the type material, custom name and the '#888' color string as part of the documentation for the input icons
 * @param {string} iconName 
 */

import { theme } from '../theme';

const setIcon = (iconName) => {
  return { 
    type: 'material', 
    name: iconName, 
    color: theme.icon 
  };
}

export default setIcon