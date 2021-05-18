import React from 'react';
import {Link} from 'react-router-native';
import {View, Text, Button, SafeAreaView} from 'react-native';

const MoreScreen = () => (
  <View>
    <SafeAreaView style={{backgroundColor: '#5056FD'}}></SafeAreaView>
    <Text>Hello form MoreScreen</Text>
    <Link to="/logout">
      <Text>Logout</Text>
    </Link>
  </View>
);

export default MoreScreen;
