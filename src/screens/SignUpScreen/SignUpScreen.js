import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButtons from '../../components/SocialSigninbuttons/SocialSigninButtons';
import { useNavigation } from '@react-navigation/core';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();
  const onRegisterPressed = () => {
    console.warn('Register');

    navigation.navigate('ConfirmEmail');
  };

  

  

  const onSignInPressed = () => {
    console.warn('SignIn');

    navigation.navigate('SignIn')
  };

  const onTermsOfUsePressed = () => {
    console.warn('Terms of Use');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an acccount</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '} 
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy </Text>
        </Text>
       <SocialSigninButtons />
        <CustomButton
          text="Have an acccount? Sign in"
          onPress={onSignInPressed}
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
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color:  '#FDB075'
  }
});

export default SignUpScreen;
