import React, { useEffect, useState } from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { Text } from 'react-native';

export const LoginPage: React.FC = () => {
  const [name, setName] = useState('No Name');
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '694785323635-p5kot1gclqg89kljalkdcc3735fvkev4.apps.googleusercontent.com',
      iosClientId: '694785323635-slpb80t6k39mumlmhaj9n58v36gldkiv.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setName(userInfo.user.email);
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
    <>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      <Text>{name}</Text>
    </>
  );
};
