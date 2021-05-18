import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Link, useLocation} from 'react-router-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const NavBar = () => {
  const setColor = inPath => {
    const path = useLocation().pathname;
    if (path === inPath) {
      return navStye.activeNavColor;
    } else {
      return navStye.disableNavColor;
    }
  };

  return (
    <View style={navStye.mainNav}>
      <Link to="/" underlayColor="white">
        <>
          <Icon name="account-balance-wallet" size={30} style={setColor('/')} />
          <Text style={setColor('/')}>Wallet</Text>
        </>
      </Link>
      <Link to="/cards" underlayColor="white">
        <>
          <Icon name="credit-card" size={30} style={setColor('/cards')} />
          <Text style={setColor('/cards')}>cards</Text>
        </>
      </Link>
      <Link to="/prices" underlayColor="white">
        <>
          <Icon name="bar-chart" size={30} style={setColor('/prices')} />
          <Text style={setColor('/prices')}>prices</Text>
        </>
      </Link>
      <Link to="/more" underlayColor="white">
        <>
          <Icon name="more-horiz" size={30} style={setColor('/more')} />
          <Text style={setColor('/more')}>More</Text>
        </>
      </Link>
    </View>
  );
};

const navStye = StyleSheet.create({
  mainNav: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: 10,
  },
  activeNavColor: {
    color: '#5056FD',
  },
  disableNavColor: {
    color: 'gray',
  },
});

export default NavBar;
