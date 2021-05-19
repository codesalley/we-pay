import React, {useState, useContext} from 'react';
import {Route} from 'react-router-native';
import {signUp, getProfile} from '../utils/constants';

const UserContext = React.createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const MainAuthContext = ({children}) => {
  const [profile, setProfile] = useState();
  const [token, setToken] = useState();
  const SignUP = async (username, email, password, pin) => {
    setToken(await signUp(username, email, password, pin));
  };

  const userProfile = async () => {
    setProfile(await getProfile());
  };

  const value = {
    profile,
    token,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
