import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

const NavBar = () => (
  <View style={navStye.mainNav}>
    <Link to="/">
      <>
        <Text>Wallet</Text>
        <Text>Wallet</Text>
      </>
    </Link>
    <Link to="/cards">
      <>
        <Text>cards</Text>
        <Text>cards</Text>
      </>
    </Link>
    <Link to="/prices">
      <>
        <Text>prices</Text>
        <Text>prices</Text>
      </>
    </Link>
    <Link to="/more">
      <>
        <Text>More</Text>
        <Text>More</Text>
      </>
    </Link>
  </View>
);

const navStye = StyleSheet.create({
  mainNav: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'green',
    width: '100%',
    paddingBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
});

export default NavBar;
