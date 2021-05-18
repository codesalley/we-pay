import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import PriceCard from './PriceCard';

import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const testData = [
  {
    id: 1,
    name: 'BTC',
    icon_name: 'trending-up',
    price: {
      first: '0.3232',
      last: '230-GHS',
    },
  },
  {
    id: 2,
    name: 'ETH',
    icon_name: 'trending-up',
    price: {
      first: '0.9232',
      last: '290-GHS',
    },
  },
  {
    id: 3,
    name: 'DGC',
    icon_name: 'trending-up',
    price: {
      first: '2.9232',
      last: '130-GHS',
    },
  },
  {
    id: 4,
    name: 'DIME',
    icon_name: 'trending-up',
    price: {
      first: '2.9232',
      last: '130-GHS',
    },
  },
];

const WalletOptions = () => {
  return (
    <View style={style.container}>
      <View style={style.currentPrice}>
        <Text>12.3230383 BTC</Text>
        <Text>$230383 10% ^</Text>
      </View>
      <View style={style.optionContainer}>
        <View>
          <Icon name="east" />
          <Text>Send </Text>
        </View>
        <View>
          <Icon name="autorenew" />
          <Text>Exchange </Text>
        </View>
        <View>
          <Icon name="add" />
          <Text>Receive</Text>
        </View>
      </View>
      <View style={style.listContainer}>
        <FlatList
          data={testData}
          renderItem={ele => <PriceCard props={ele} />}
          keyExtractor={item => item.id}
          style={style.listview}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const mainHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  listview: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '3%',
  },
  container: {
    backgroundColor: '#5056FD',
    height: mainHeight * 0.4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '10%',
  },
  listContainer: {},
  optionContainer: {
    paddingHorizontal: '3%',
  },
  currentPrice: {
    paddingHorizontal: '3%',
  },
});

export default WalletOptions;
