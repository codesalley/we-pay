import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import {MainColor, TextColor} from '../utils/constants';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [pin, setPin] = useState('');

  const singUp = async () => {};

  return (
    <View style={SignUpStyle.body}>
      <SafeAreaView style={{backgroundColor: 'white'}}></SafeAreaView>
      <View style={SignUpStyle.top}>
        <Text>Welcome To </Text>
        <Text> Wepay </Text>
      </View>
      <View style={SignUpStyle.inputContainer}>
        <Input
          placeholder="Full Name"
          rightIcon={
            <Icon size={25} color={MainColor} name="person-circle-outline" />
          }
          inputContainerStyle={SignUpStyle.input}
          style={SignUpStyle.inputText}
          onChangeText={val => setUsername(val)}
        />
        <Input
          placeholder="Email"
          rightIcon={<Icon size={25} color={MainColor} name="mail-outline" />}
          inputContainerStyle={SignUpStyle.input}
          style={SignUpStyle.inputText}
          onChangeText={val => setemail(val)}
        />
        <Input
          placeholder="Password"
          rightIcon={<Icon size={25} color={MainColor} name="key-outline" />}
          inputContainerStyle={SignUpStyle.input}
          secureTextEntry={true}
          style={SignUpStyle.inputText}
          onChangeText={val => setpassword(val)}
        />
        <Input
          placeholder="Pin"
          rightIcon={<Icon size={25} color={MainColor} name="mail-outline" />}
          inputContainerStyle={SignUpStyle.input}
          style={SignUpStyle.inputText}
          onChangeText={val => setPin(val)}
        />

        <TouchableHighlight style={SignUpStyle.btn} onPress={() => singUp()}>
          <Text style={SignUpStyle.btnText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const mainWidth = Dimensions.get('window').width;
const mainHeight = Dimensions.get('window').height;
const SignUpStyle = StyleSheet.create({
  img: {
    width: mainWidth * 0.5,
    height: mainWidth * 0.5,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: '5%',
    height: mainHeight,
    justifyContent: 'space-around',
    paddingVertical: '20%',
  },
  input: {
    borderColor: MainColor,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 10,
    height: 45,
  },

  top: {
    alignSelf: 'center',
  },

  btn: {
    backgroundColor: MainColor,
    borderRadius: 10,
  },
  btnText: {
    color: TextColor,
    fontSize: 18,
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontWeight: '700',
    padding: 10,
  },
  inputText: {
    fontSize: 16,
    paddingHorizontal: 5,
    paddingVertical: 2,
    height: 2,
  },

  inputContainer: {
    width: mainWidth * 0.8,
    alignSelf: 'center',
  },
});

export default SignUpScreen;
