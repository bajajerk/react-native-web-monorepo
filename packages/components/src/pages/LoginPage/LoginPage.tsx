import React, { useEffect } from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';

export const LoginPage: React.FC = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '192425991810-j47339l4hsufta7mlvlpb1352belt2tq.apps.googleusercontent.com',
      iosClientId: '192425991810-ni34hpukc40fk4tg83b3a80ncguf9ghr.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Amit', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
    />
  );
};
