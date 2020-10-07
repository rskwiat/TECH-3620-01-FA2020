import React from 'react';
import { Feather } from '@expo/vector-icons'; 

import { theme } from '../theme';

const Icon = ({ name, styles }) => {
  switch (name) {
    case 'Rain':
      return <Feather style={styles} name="cloud-drizzle" size={60} color={theme.black} />
    case 'Clouds':
      return <Feather style={styles} name="cloud" size={60} color={theme.black} />
    default:
      return <Feather style={styles} name="sun" size={60} color={theme.black} />
  }
};

//refactored (completly optional)
//url -- https://medium.com/javascript-in-plain-english/a-little-unknown-way-to-get-rid-of-switch-statements-15c2584f51b9

/**

** Create a new Map object of icons to compare the passed in name 

const Icons = {
  Rain: 'cloud-drizzle',
  Clouds: 'cloud'
}
** Return the names as expected -- if no matches return default (sun)
const Icon = ({ name, styles }) => (
  <Feather style={styles} name={Icons[name] || 'sun'} size={60} color={theme.black} />
);
* 
*/




export default Icon;