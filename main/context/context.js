import React, {useState, useContext} from 'react';
import {Route} from 'react-router-native';
import {getProfile, SignUpUrl, saveToken, loginUrl} from '../utils/constants';

const UserContext = React.createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const MainAuthContext = ({children}) => {
  const [profile, setProfile] = useState();
  const [token, setToken] = useState();
  const SignUP = async (username, email, password, pin) => {
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
      if (res.msg || !res) {
        return false;
      } else {
        saveToken(res.wepay);
        return res;
      }
    } catch (error) {
      return false;
    }
  };

  const login = async (email, password) => {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const data = await response.json();
    return data;
  };

  const userProfile = async token => {
    const res = await getProfile(token);
    console.log(res);
    if (res.msg) {
      return false;
    } else {
      setProfile(await res);
      return res;
    }
  };

  const value = {
    profile,
    token,
    SignUP,
    userProfile,
    login,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
