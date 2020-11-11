import React, { useState } from 'react';

import { 
  Header,
  Text,
  Button
} from 'react-native-elements';

import {
  Alert
} from 'react-native';

import { SignInArea, Container, CustomInput } from '../components';
import { theme } from '../theme';

import { firebase } from '../firebase/config';

const SignInScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  //completely optional, creates custom input components with these props.
  const SignInFields = [
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
    }
  ];

  const SignIn = () => {
    setLoading(true);

    //https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#signinwithemailandpassword
    firebase.auth().signInWithEmailAndPassword(userName, password).then((response) => {
      const uid = response.user.uid;
      
      //https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference?authuser=0
      const usersRef = firebase.firestore().collection('users');
      usersRef.doc(uid).get().then((firestoreDocument) => {
        if (!firestoreDocument.exists) {
          Alert.alert('User does not exist');
          return;
        }
      }).catch((error) => {
        Alert.alert(error)
      });
    }).catch((error) => {
      Alert.alert(error);
    });
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
        {SignInFields.map((props) => {
          return <CustomInput key={props.name} {...props} />
        })}
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
