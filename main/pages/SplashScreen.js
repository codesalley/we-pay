import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Redirect} from 'react-router-native';

const SplashScreen = () => {
  const moveMe = () => {};

  useEffect(() => {
    setTimeout(() => {
      moveMe();
    }, 3400);
  });

  return (
    <View>
      <Text>Welcome </Text>
    </View>
  );
};

export default SplashScreen;
