import React from 'react';
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
import {MainColor} from '../utils/constants';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = () => {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: 'white'}}></SafeAreaView>
      <View>
        <Text>Welcome To Wepay</Text>
        <Image style={SignUpStyle.img} source={require('../assets/logo.png')} />
      </View>
      <View style={SignUpStyle.inputContainer}>
        <Input
          placeholder="Full Name"
          rightIcon={<Icon name="person-circle-outline" />}
          inputContainerStyle={SignUpStyle.input}
          style={SignUpStyle.inputText}
        />
        <Input
          placeholder="Email"
          rightIcon={<Icon name="person-circle-outline" />}
          inputContainerStyle={SignUpStyle.input}
          style={SignUpStyle.inputText}
        />
        <Input
          placeholder="Password"
          rightIcon={<Icon name="person-circle-outline" />}
          inputContainerStyle={SignUpStyle.input}
          secureTextEntry={true}
          style={SignUpStyle.inputText}
        />
        <TouchableHighlight>
          <Text>Sign Up</Text>
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
  input: {
    borderColor: MainColor,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 10,
    height: 45,
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
