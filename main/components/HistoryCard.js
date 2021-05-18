import React, {useState} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import Transaction from './Transaction';

const routes = [
  {
    name: 'All',
  },
  {
    name: 'Send',
  },
  {
    name: 'Receive',
  },
  {
    name: 'Exchange',
  },
];

const HistoryCard = () => {
  const [indx, setIndx] = useState(0);
  return (
    <View style={Histroystyle.container}>
      <View style={Histroystyle.mainNav}>
        {routes.map((ele, index) => {
          return (
            <TouchableHighlight
              onPress={() => setIndx(index)}
              key={index}
              style={
                index === indx ? Histroystyle.active : Histroystyle.disable
              }>
              <Text style={Histroystyle.btnText}>{ele.name}</Text>
            </TouchableHighlight>
          );
        })}
      </View>
      <View style={Histroystyle.routesBody}>
        <Transaction data={routes[indx]} />
      </View>
    </View>
  );
};

const Histroystyle = StyleSheet.create({
  mainNav: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: 10,
    marginTop: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    position: 'relative',
    fontFamily: 'Poppins',
  },
  container: {},
  routesBody: {
    marginHorizontal: '3%',
    fontFamily: 'Poppins',
  },
  active: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    paddingBottom: 2,
    fontFamily: 'Poppins',
  },
  disable: {
    paddingBottom: 2,
    fontFamily: 'Poppins',
  },
  btnText: {
    fontSize: 18,
    fontFamily: 'Poppins',
  },
});

export default HistoryCard;
