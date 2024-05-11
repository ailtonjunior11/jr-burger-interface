/* eslint-disable import/prefer-default-export */
import React from 'react';

import LogoHome from '../../assets/logo-home.svg';
import { CategoryCarousel, OffersCarousel } from '../../components';
import { Container, HomeImg } from './styles';

export function Home() {
  return (
    <Container>
      <HomeImg src={LogoHome} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}
