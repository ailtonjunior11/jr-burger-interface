/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';

import { useUser } from '../../hooks/UserContext';
import listLinks from './menu-list';
import { Container, ItemContainer, ListLink } from './styles';

export function SideMenuAdmin({ path }) {
  const { logout } = useUser();
  return (
    <Container>
      <hr />
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#fff' }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  );
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
};
