/* eslint-disable import/prefer-default-export */
import React from 'react';

import LogoCart from '../../assets/logo-cart.svg';
import { CartItems, CartResume } from '../../components';
import { Container, CartImg, Wrapper } from './styles';

export function Cart() {
  return (
    <Container>
      <CartImg src={LogoCart} alt="logo do Carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  );
}
