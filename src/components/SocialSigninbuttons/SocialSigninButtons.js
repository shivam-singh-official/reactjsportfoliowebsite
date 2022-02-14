import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton';

const onSignInFacebook = () => {
  console.warn('Facebook');
};

const onSignInGoogle = () => {
  console.warn('Google');
};

const SocialSigninButtons = () => {
  return (
    <>
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
    </>
  );
};

export default SocialSigninButtons;
