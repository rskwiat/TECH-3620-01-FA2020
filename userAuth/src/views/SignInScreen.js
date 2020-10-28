import React, { useState } from 'react';

import { 
  Header,
  Text,
  Input,
  Button
} from 'react-native-elements';

import setIcon from '../utils/setIcon';

import { SignInArea, Container } from '../components';
import { theme } from '../theme';

const SignInScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const SignIn = () => {
    setLoading(true);
    console.log(userName, password);
  }

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
        <Text h2 h2Style={{ marginBottom: 20 }}>User Auth</Text>
        <Input
          label="Please enter your email address"
          placeholder="example@abc.com"
          leftIcon={{
            type: 'material',
            name: 'email',
            color: '#888'
          }}
          onChangeText={value => setUserName(value)}
          containerStyle={{ paddingHorizontal: 0 }}
        />
        <Input
          label="Please enter your password"
          placeholder="password"
          secureTextEntry
          leftIcon={{
            type: 'material',
            name: 'lock',
            color: '#888'
          }}
          containerStyle={{ paddingHorizontal: 0 }}
          onChangeText={value => setPassword(value)}
        />
        <Button 
          title="Sign In"
          type="outline"
          containerStyle={{ marginBottom: 40 }}
          onPress={SignIn}
          loading={loading}
        />
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
