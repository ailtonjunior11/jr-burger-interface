import React from 'react';

import LogoHome from '../../assets/logo-home.svg';
import CategoryCarousel from '../../components/CategoryCarousel';
import OffersCarousel from '../../components/OffersCarousel';
import { Container, HomeImg } from './styles';

function Home() {
  return (
    <Container>
      <HomeImg src={LogoHome} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}

export default Home;
