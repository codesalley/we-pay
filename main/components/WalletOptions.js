import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

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
    </View>
  );
};

export default WalletOptions;
