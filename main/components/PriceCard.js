import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';

const PriceCard = ({props}) => {
  const {name, icon_name, price} = props.item;

  Icon.loadFont();
  return (
    <View style={style.priceCard}>
      <Icon name={icon_name} style={style.icon} />
      <View>
        <Text style={style.text}>{name}</Text>
        <Text style={style.text}>
          {price.first} <IconM name="east" /> {price.last}{' '}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  priceCard: {
    backgroundColor: '#4096FD81',
    marginRight: 20,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    fontSize: 30,
    padding: 10,
    color: '#4096FD',
    backgroundColor: 'white',
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
    fontWeight: '900',
    fontFamily: 'Poppins',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
});

export default PriceCard;
