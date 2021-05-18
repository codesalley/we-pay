import React from 'react';
import {View, Text, FlatList} from 'react-native';

const Transaction = ({data}) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default Transaction;
