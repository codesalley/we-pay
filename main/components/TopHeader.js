import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';
import {Avatar} from 'react-native-elements';
import {MainColor} from '../utils/constants';

import Icon from 'react-native-vector-icons/Ionicons';

const TopHeader = () => {
  const date = format(Date.now(), 'dd MMM').split(' ');

  return (
    <>
      <View style={headerStyle.container}>
        <Avatar
          containerStyle={{backgroundColor: 'white'}}
          titleStyle={headerStyle.dateDay}
          rounded
          title={date[0]}
        />

        <Text style={headerStyle.dateMonth}>{date[1]}</Text>
      </View>
      <View style={headerStyle.container}>
        <Text style={headerStyle.weatherN}> +26 </Text>
        <Icon name="moon-outline" style={headerStyle.weatherC} />
      </View>
    </>
  );
};

const headerStyle = StyleSheet.create({
  dateDay: {
    backgroundColor: 'white',
    fontSize: 15,
    padding: 8,
    borderRadius: 18,
    overflow: 'hidden',
    color: MainColor,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  dateMonth: {
    paddingLeft: 10,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Poppins',
  },
  container: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  weatherN: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Poppins',
  },
  weatherC: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 17,
    paddingLeft: 5,
    fontFamily: 'Poppins',
  },
});

export default TopHeader;
