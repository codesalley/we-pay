import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Redirect, useHistory} from 'react-router-native';
import {getProfile, useUserContext} from '../context/context';
import {getToken} from '../utils/constants';

const SplashScreen = () => {
  const {userProfile} = useUserContext();
  const histroy = useHistory();

  const moveMe = async () => {
    const token = await getToken();
    console.log(token);
    const res = await userProfile(await token);
    if (res) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    moveMe();
    setTimeout(() => {
      histroy.replace('/wallet');
    }, 3000);
  });

  return (
    <View>
      <Text>Welcome </Text>
    </View>
  );
};

export default SplashScreen;
