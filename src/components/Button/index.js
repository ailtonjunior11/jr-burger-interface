/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

import React from 'react';

import PropTypes from 'prop-types';

import { ContainerCoButton } from './styles';

export function Button({ children, ...rest }) {
  return <ContainerCoButton {...rest}>{children}</ContainerCoButton>;
}

Button.propTypes = {
  children: PropTypes.string
};
