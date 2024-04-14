/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import PropTypes from 'prop-types';

import { ContainerCoButton } from './styles';

function Button({ children, ...rest }) {
  return <ContainerCoButton {...rest}>{children}</ContainerCoButton>;
}

export default Button;

Button.propTypes = {
  children: PropTypes.string
};
