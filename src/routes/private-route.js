/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('jrburger:userData');

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} component={component} />;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};
