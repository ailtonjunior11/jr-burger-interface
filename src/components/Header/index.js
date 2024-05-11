/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useHistory } from 'react-router-dom';

import Cart from '../../assets/cart.svg';
import Person from '../../assets/person.svg';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  Line,
  PageLinkExit
} from './styles';

export function Header() {
  const { logout, userData } = useUser();
  const {
    push,
    location: { pathname }
  } = useHistory();

  const logoutUser = () => {
    logout();
    push('/login');
  };

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="logo carrinho" />
        </PageLink>
        <Line />
        <PageLink>
          <img src={Person} alt="logo-pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
