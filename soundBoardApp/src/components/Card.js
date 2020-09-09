import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from 'react-native';

/* 
* Destructuring the onPress and Image passed in to the component for resusability
** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

const Card = ({ onPress, image }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <ImageBackground source={image} style={styles.image} />
  </TouchableOpacity>
);

export default Card;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
})