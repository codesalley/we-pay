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
import LogInScreen from './pages/LogInScreen';
import SplashScreen from './pages/SplashScreen';

const App = () => {
  return (
    <MainAuthContext>
      <NativeRouter>
        <View style={style.pageContainer}>
          <SecureRoute
            exact
            path="/wallet"
            component={() => (
              <>
                <WalletScreen />
                <NavBar />
              </>
            )}
          />

          <SecureRoute
            path="/cards"
            component={() => (
              <>
                <CardsSCreen />
                <NavBar />
              </>
            )}
          />

          <SecureRoute
            path="/prices"
            component={() => (
              <>
                <PricesScreen />
                <NavBar />
              </>
            )}
          />

          <SecureRoute
            path="/more"
            component={() => (
              <>
                <MoreScreen />
                <NavBar />
              </>
            )}
          />

          <Route exact path="/" component={() => <SplashScreen />} />

          <Route path="/signup" component={() => <SignUpScreen />} />
          <Route path="/login" component={() => <LogInScreen />} />
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
