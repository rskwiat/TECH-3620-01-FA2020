import React, { useState } from 'react';

import { 
  Header,
  Text,
  Input,
  Button,
} from 'react-native-elements';

import {
  Alert
} from 'react-native';

import { SignInArea, Container } from '../components';
import { theme } from '../theme';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const RegisterUser = () => {
    setLoading(true);
    if (password !== confirmPassword) { 
      //checking if password and set passwords match if they do not match fire an Alert with custom heard text and return and kill the function
      Alert.alert(
        'Please check your password', 
        'Passwords do not match'
      );
      setLoading(false);
      return;
    }

    console.log('Registering user');
  }

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
        <Text h2 h2Style={{ marginBottom: 20 }}> 
          User Registration
        </Text>

        <Input
          label="Please enter your full name"
          placeholder="John Doe"
          leftIcon={{ 
            type: 'material',
            name: 'person',
            color: '#888'
          }}
          onChangeText={value => setName(value)}
          containerStyle={{ paddingHorizontal: 0 }}
        />

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
          onChangeText={value => setPassword(value)}
          containerStyle={{ paddingHorizontal: 0 }}
        />

        <Input
          label="Please confirm your password"
          placeholder="password"
          secureTextEntry
          leftIcon={{
            type: 'material',
            name: 'lock',
            color: '#888'
          }}
          onChangeText={value => setConfirmPassword(value)}
          containerStyle={{ paddingHorizontal: 0 }}
        />

        <Button 
          title="Register User"
          type="outline"
          containerStyle={{ marginBottom: 40 }}
          onPress={RegisterUser}
          loading={loading}
        />

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
