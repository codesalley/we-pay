import React from 'react';
import {useUserContext} from './context';
import {
  Route,
  Redirect,
  useLocation,
  useHistory,
  Link,
} from 'react-router-native';

function SecureRoute({children}) {
  const {profile} = useUserContext();

  return <Route>{profile ? children : () => <Redirect to="/signup" />}</Route>;
}

export default SecureRoute;
