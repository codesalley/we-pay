import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import NavBar from '../components/NavBar';

const CardsSCreen = () => (
  <View>
    <StatusBar barStyle={'light-content'} />
    <SafeAreaView style={{backgroundColor: '#5056FD'}}></SafeAreaView>
    <Text>Hello form Cards screen</Text>
  </View>
);

export default CardsSCreen;
