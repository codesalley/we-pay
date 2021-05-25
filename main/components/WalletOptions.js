import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import PriceCard from './PriceCard';
import {Avatar, BottomSheet, Input} from 'react-native-elements';
import {TextColor} from '../utils/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IoCon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const testData = [
  {
    id: 1,
    name: 'BTC',
    icon_name: 'trending-up',
    price: {
      first: '0.3232',
      last: '230-GHS',
    },
  },
  {
    id: 2,
    name: 'ETH',
    icon_name: 'trending-up',
    price: {
      first: '0.9232',
      last: '290-GHS',
    },
  },
  {
    id: 3,
    name: 'DGC',
    icon_name: 'trending-up',
    price: {
      first: '2.9232',
      last: '130-GHS',
    },
  },
  {
    id: 4,
    name: 'DIME',
    icon_name: 'trending-up',
    price: {
      first: '2.9232',
      last: '130-GHS',
    },
  },
];

const WalletOptions = () => {
  const [showSheet, seShowSheet] = useState(false);
  return (
    <>
      <View style={style.container}>
        <View style={style.currentPrice}>
          <Text style={style.btcPrice}>12.3230383 BTC</Text>
          <Text style={style.balance}>
            $230383 10% <IoCon name="caret-up-outline" />
          </Text>
        </View>
        <View style={style.optionContainer}>
          <View style={style.option}>
            <Avatar
              rounded
              icon={{name: 'east'}}
              size={60}
              containerStyle={style.optionIcon}
              onPress={() => seShowSheet(e => !e)}
            />
            <Text style={style.optionText}>Send </Text>
          </View>
          <View style={style.option}>
            <Avatar
              rounded
              icon={{name: 'autorenew'}}
              size={60}
              containerStyle={style.optionIcon}
            />
            <Text style={style.optionText}>Exchange </Text>
          </View>
          <View style={style.option}>
            <Avatar
              rounded
              icon={{name: 'add'}}
              size={60}
              containerStyle={style.optionIcon}
            />
            <Text style={style.optionText}>Receive</Text>
          </View>
        </View>
        <View style={style.listContainer}>
          <FlatList
            data={testData}
            renderItem={ele => <PriceCard props={ele} />}
            keyExtractor={item => item.id}
            style={style.listview}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View>
        <BottomSheet isVisible={showSheet}>
          <SafeAreaView>
            <Input placeholder="Receiver Tag" />
          </SafeAreaView>
        </BottomSheet>
      </View>
    </>
  );
};

const mainHeight = Dimensions.get('window').height;
const mainWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  listview: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '3%',
  },
  container: {
    backgroundColor: '#5056FD',
    height: mainHeight * 0.4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '10%',
  },
  listContainer: {},
  optionContainer: {
    paddingHorizontal: '3%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: mainWidth,
  },
  currentPrice: {
    paddingHorizontal: '3%',
    alignSelf: 'center',
    paddingTop: 20,
    fontFamily: 'Poppins',
  },
  btcPrice: {
    fontSize: 25,
    fontWeight: '700',
    color: TextColor,
    fontFamily: 'Poppins',
  },
  balance: {
    alignSelf: 'center',
    paddingTop: 5,
    fontSize: 14,
    fontWeight: '600',
    color: TextColor,
    fontFamily: 'Poppins',
  },

  optionIcon: {
    backgroundColor: '#4096FD91',
  },
  optionText: {
    color: TextColor,
    fontSize: 15,
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  option: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Poppins',
  },
});

export default WalletOptions;
