import React from 'react';
import { 
  Header,
  Text,
} from 'react-native-elements';

import { Container } from '../components';
import { theme } from '../theme';

import { firebase } from '../firebase/config';

const LoggedInScreen = ({ route }) => {
  const { user } = route.params;

  const SignOut = () => {
    firebase.auth().signOut();    
  }

  return (
    <React.Fragment>
      <Header
        centerComponent={{ 
          text: 'Logged In', 
          style: {
            fontSize: 18,
            color: theme.white 
          } 
        }}
        rightComponent={{
          text: 'Log Out',
          style: {
            color: theme.white
          },
          onPress: () => SignOut()
        }}
        containerStyle={{ height: 100 }}
      />
      <Container>
        <Text h4 h4Style={{ marginBottom: 20 }}>Welcome {user.fullName} </Text>
        <Text>{user.email}</Text>
      </Container>
    </React.Fragment>
  );
}

export default LoggedInScreen;