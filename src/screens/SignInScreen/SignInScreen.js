import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo3.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {NavigationContainer, useNavigation} from '@react-navigation/native'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation =useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign in');

    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');

    navigation.navigate('ForgotPassword');
  };

  const onSignInFacebook = () => {
    console.warn('Facebook');
   
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };

  const onSignUpPressed = () => {
    console.warn('SignUp');
    navigation.navigate('SignUp')
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
        <CustomButton
        text="Don't have an acccount? Create one"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#95E9CB'
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
  },
});

export default SignInScreen;
