import React from 'react';

import { 
  Header
} from 'react-native-elements';

import { SignInArea, Container } from '../components';
import { theme } from '../theme';

const SignUpScreen = ({ navigation }) => {
  
  const SignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <React.Fragment>
      <Header
        centerComponent={{ 
          text: 'Sign Up', 
          style: {
            fontSize: 18,
            color: theme.white 
          } 
        }}
        containerStyle={{ height: 100 }}
      />
      <Container>
        <SignInArea
          text="Already have an account?"
          linkText="Please Sign In"
          onPress={SignIn}
        />
      </Container>
    </React.Fragment>
  );
}

export default SignUpScreen;
