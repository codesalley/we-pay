import AsyncStorage from '@react-native-async-storage/async-storage';
export const MainColor = '#5056FD';
export const TextColor = '#e5e5e5';
export const SignUpUrl = 'http://127.0.0.1:3000/api/signup';
export const ProfileUrl = 'http://127.0.0.1:3000/api/me';

export const saveToken = async token => {
  try {
    console.log(await AsyncStorage.getItem('token'));
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    return false;
  }
};

export const getToken = async () => {
  try {
    const res = await AsyncStorage.getItem('token');
    if (!res) {
      return false;
    } else {
      return res;
    }
  } catch (error) {
    return false;
  }
};

export const signIn = () => {};

export const getProfile = async token => {
  try {
    const headerData = JSON.stringify({wepay: token});

    console.log(headerData);
    const response = await fetch(ProfileUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        wepay: token,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};
