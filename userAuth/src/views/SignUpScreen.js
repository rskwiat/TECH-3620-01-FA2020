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

import { SignInArea, Container, CustomInput } from '../components';
import { theme } from '../theme';

import { firebase } from '../firebase/config';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  //completely optional, creates custom input components with these props.
  const SignUpFields = [
    {
      'name': 'name',
      'label': 'Please enter your full name',
      'placeholder': 'John Doe',
      'icon': 'person',
      'onChangeText': setName,
    },
    {
      'name': 'username',
      'label': 'Please enter your email address',
      'placeholder': 'example@abc.com',
      'icon': 'email',
      'onChangeText': setUserName,
    },
    {
      'name': 'password',
      'label': 'Please enter your password',
      'placeholder': 'Please enter a password',
      'secureTextEntry': true,
      'icon': 'lock',
      onChangeText: setPassword
    },
    {
      'name': 'confirm password',
      'label': 'Please confirm your password',
      'placeholder': 'Please confirm your password',
      'secureTextEntry': true,
      'icon': 'lock',
      onChangeText: setConfirmPassword
    }
  ];

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

    //https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#createuserwithemailandpassword
    firebase.auth().createUserWithEmailAndPassword(userName, password).then((response) => {
      const uid = response.user.uid;
      const data = {
        id: uid,
        email: userName,
        fullName: name
      };
      //https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference?authuser=0
      const usersRef = firebase.firestore().collection('users');
      usersRef.doc(uid).set(data).then(() => {
        navigation.navigate('LoggedIn', { user: data });
        setLoading(false);
      }).catch((err) => {
        Alert.alert(err);
      });
    }).catch((err) => {
      Alert.alert(err);
    });
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
        {SignUpFields.map((props) => {
          return <CustomInput key={props.name} {...props} />
        })}
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
