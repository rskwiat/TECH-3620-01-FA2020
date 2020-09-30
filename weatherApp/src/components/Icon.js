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

export default Icon;