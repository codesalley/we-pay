import React from 'react';
import {NativeRouter, Route, useLocation} from 'react-router-native';
import {View, Text, SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import CardsSCreen from './pages/CardsScreen';
import WalletScreen from './pages/WalletScreen';
import MoreScreen from './pages/MoreScreen';
import PricesScreen from './pages/PricesScreen';
import NavBar from './components/NavBar';
import SignUpScreen from './pages/SignUpScreen';
import SecureRoute from './context/SecureRoute';
import {MainAuthContext} from './context/context';

const App = () => {
  return (
    <MainAuthContext>
      <NativeRouter>
        <View style={style.pageContainer}>
          <SecureRoute exact path="/" component={WalletScreen} />

          <SecureRoute path="/cards">
            <CardsSCreen />
            <NavBar />
          </SecureRoute>

          <SecureRoute path="/prices">
            <PricesScreen />
            <NavBar />
          </SecureRoute>

          <SecureRoute path="/more">
            <MoreScreen />
            <NavBar />
          </SecureRoute>

          <Route path="/signup" component>
            <SignUpScreen />
          </Route>
        </View>
      </NativeRouter>
    </MainAuthContext>
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
