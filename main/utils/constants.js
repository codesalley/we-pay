import AsyncStorage from '@react-native-async-storage/async-storage';
export const MainColor = '#5056FD';
export const TextColor = '#e5e5e5';
export const SignUpUrl = 'http://127.0.0.1:3000/api/signup';
export const ProfileUrl = 'http://127.0.0.1:3000/api/me';

export const saveToken = async token => {
  try {
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

export const signUp = async (username, email, password, pin) => {
  try {
    const data = await fetch(SignUpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        email,
        password,
        pin,
      }),
    }).then(e => e);
    const res = await data.json();
    return res;
  } catch (error) {}
};

export const signIn = () => {};

export const getProfile = async () => {
  const token = await getToken();
  if (!token) {
    return false;
  } else {
    try {
      const headerData = JSON.stringify({wepay: token});
      const response = await fetch(ProfileUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          headerData,
        },
      });

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return false;
    }
  }
};
