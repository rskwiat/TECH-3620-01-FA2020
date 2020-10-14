import React from 'react';

import { 
  Header
} from 'react-native-elements';

import { SignInArea, Container } from '../components';
import { theme } from '../theme';

const SignInScreen = ({ navigation }) => {

  const SignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <React.Fragment>
      <Header
        centerComponent={{ 
          text: 'Sign In', 
          style: {
            fontSize: 18,
            color: theme.white 
          } 
        }}
        containerStyle={{ height: 100 }}
      />
      <Container>
        <SignInArea
          text="Don't have an account?"
          linkText="Please Sign up"
          onPress={SignUp}
        />
      </Container>
    </React.Fragment>
  );
}

export default SignInScreen;
