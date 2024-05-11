/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import PropTypes from 'prop-types';

import { ErrorMessageStyles } from './styles';

export function ErrorMessage({ children }) {
  return <ErrorMessageStyles>{children}</ErrorMessageStyles>;
}

ErrorMessage.propTypes = {
  children: PropTypes.string
};
