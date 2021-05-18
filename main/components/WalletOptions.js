import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
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
    <View>
      <Text>12.3230383 BTC</Text>
      <Text>$230383 10% ^</Text>
      <View>
        <Icon name="east" />
        <Icon name="autorenew" />
        <Icon name="add" />
      </View>
      <View>
        <Text>Wallets </Text>
        <Text>See All </Text>
      </View>
      <View>
        <View>
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
    </View>
  );
};

const style = StyleSheet.create({
  listview: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '3%',
  },
});

export default WalletOptions;
