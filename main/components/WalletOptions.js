import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
      <View>
        <Text>Wallets </Text>
        <Text>See All </Text>
      </View>
      <View>
        <View>
          <FontAwesome5 name={'camera'} solid />
        </View>
      </View>
    </View>
  );
};

export default WalletOptions;
