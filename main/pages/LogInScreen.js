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
import {MainColor, TextColor, saveToken, getToken} from '../utils/constants';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {useUserContext} from '../context/context';
import {useHistory} from 'react-router-native';

const LogInScreen = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const {SignUP, profile, userProfile} = useUserContext();
  const location = useHistory();

  const testFn = async () => {
    console.log('====----===');
    const res = await getToken();
    console.log(res);
  };

  const singUp = async () => {
    const response = await SignUP(username, email, password, pin);
    if (!response === false) {
      const res = await userProfile(response.wepay);
      res ? location.push('/') : null;
    }
  };

  return (
    <View style={SignUpStyle.body}>
      <SafeAreaView style={{backgroundColor: 'white'}}></SafeAreaView>
      <View style={SignUpStyle.top}>
        <Text>Welcome back </Text>
        <Text> Wepay </Text>
      </View>
      <View style={SignUpStyle.inputContainer}>
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

        <TouchableHighlight
          style={SignUpStyle.btn}
          onPress={() => {
            testFn();
          }}>
          <Text style={SignUpStyle.btnText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={SignUpStyle.login}
          onPress={() => location.goBack()}>
          <Text style={SignUpStyle.logintext}>Sign Up</Text>
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

  login: {},
  logintext: {},

  inputContainer: {
    width: mainWidth * 0.8,
    alignSelf: 'center',
  },
});

export default LogInScreen;
