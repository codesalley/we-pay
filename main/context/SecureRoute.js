import React from 'react';
import {useUserContext} from './context';
import {View} from 'react-router-native';
import {
  Route,
  Redirect,
  useLocation,
  useHistory,
  Link,
} from 'react-router-native';

function SecureRoute({component: Component, ...rest}) {
  const {profile} = useUserContext();

  return (
    <Route
      {...rest}
      render={props =>
        profile ? <Component {...props} /> : <Redirect to="/signup" />
      }
    />
  );
}

export default SecureRoute;
