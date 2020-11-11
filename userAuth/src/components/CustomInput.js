import React from 'react';
import {
  Input,
} from 'react-native-elements';

//completely optional, a custom react-native-elements input
const CustomInput = (props) => (
  <Input
    {...props}
    leftIcon={{
      type: 'material',
      name: props.icon,
      color: '#888'
    }}
    onChangeText={value => props.onChangeText(value)}
    containerStyle={{ paddingHorizontal: 0 }}
  />
);

export default CustomInput;

