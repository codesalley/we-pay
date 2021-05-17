import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import {View, Text, SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import CardsSCreen from './pages/CardsScreen';
import WalletScreen from './pages/WalletScreen';
import MoreScreen from './pages/MoreScreen';
import PricesScreen from './pages/PricesScreen';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <NativeRouter>
      <View style={style.pageContainer}>
        <SafeAreaView style={{backgroundColor: 'blue'}}></SafeAreaView>
        <Route exact path="/">
          <WalletScreen />
        </Route>
        <Route exact path="/cards">
          <CardsSCreen />
        </Route>
        <Route exact path="/prices">
          <PricesScreen />
        </Route>
        <Route exact path="/more">
          <MoreScreen />
        </Route>
        <NavBar />
      </View>
    </NativeRouter>
  );
};

const mainHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  pageContainer: {
    height: mainHeight,
    position: 'relative',
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default App;
