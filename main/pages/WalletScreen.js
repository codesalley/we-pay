import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const WalletScreen = () => (
  <View style={walletStyle.container}>
    <View style={walletStyle.mainIntro}>
      <View>
        <Text> Time</Text>
        <Text> -0- </Text>
      </View>
      <View>
        <Text> Weather </Text>
        <Text> -10- </Text>
      </View>
    </View>
    <View>
      <Text> Body </Text>
    </View>
  </View>
);

const mainHEIGHT = Dimensions.get('window').height;
const mainWidth = Dimensions.get('window').width;

const walletStyle = StyleSheet.create({
  mainIntro: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    paddingHorizontal: '3%',
    flexDirection: 'row',
  },
  container: {
    height: mainHEIGHT,
    width: mainWidth,
  },
});

export default WalletScreen;
