import React from 'react';
import {NativeRouter, Route, useLocation} from 'react-router-native';
import {View, Text, SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import CardsSCreen from './pages/CardsScreen';
import WalletScreen from './pages/WalletScreen';
import MoreScreen from './pages/MoreScreen';
import PricesScreen from './pages/PricesScreen';
import NavBar from './components/NavBar';
import SignUpScreen from './pages/SignUpScreen';

const App = () => {
  return (
    <NativeRouter>
      <View style={style.pageContainer}>
        <Route exact path="/">
          <WalletScreen />
          <NavBar />
        </Route>
        <Route exact path="/cards">
          <CardsSCreen />
          <NavBar />
        </Route>
        <Route exact path="/prices">
          <PricesScreen />
          <NavBar />
        </Route>
        <Route exact path="/more">
          <MoreScreen />
          <NavBar />
        </Route>
        <Route exct path="/logout">
          <SignUpScreen />
        </Route>
      </View>
    </NativeRouter>
  );
};

const mainHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  pageContainer: {
    height: mainHeight,
    position: 'relative',
  },
});

export default App;
