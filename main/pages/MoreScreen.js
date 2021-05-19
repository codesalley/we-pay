import React from 'react';
import {Link} from 'react-router-native';
import {View, Text, Button, SafeAreaView, StatusBar} from 'react-native';
import NavBar from '../components/NavBar';

const MoreScreen = () => (
  <View>
    <StatusBar barStyle={'light-content'} />
    <SafeAreaView style={{backgroundColor: '#5056FD'}}></SafeAreaView>
    <Text>Hello form MoreScreen</Text>
    <Link to="/signup">
      <Text>signup</Text>
    </Link>
  </View>
);

export default MoreScreen;
