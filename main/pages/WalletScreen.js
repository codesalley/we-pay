import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import TopHeader from '../components/TopHeader';
import WalletOptions from '../components/WalletOptions';
import HistoryCard from '../components/HistoryCard';

const WalletScreen = () => (
  <View style={walletStyle.container}>
    <View style={walletStyle.mainIntro}>
      <TopHeader />
    </View>
    <WalletOptions />
    <View style={walletStyle.body}>
      <HistoryCard />
    </View>
  </View>
);

const mainHEIGHT = Dimensions.get('window').height;
const mainWidth = Dimensions.get('window').width;

const walletStyle = StyleSheet.create({
  mainIntro: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#5056FD',
    paddingHorizontal: '3%',
    flexDirection: 'row',
  },
  container: {
    height: mainHEIGHT,
    width: mainWidth,
    backgroundColor: '#5056FD',
  },
  body: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'white',
    height: mainHEIGHT,
  },
});

export default WalletScreen;
