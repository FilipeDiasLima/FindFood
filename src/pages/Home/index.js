import React from 'react';

import RestaurantInfo from '../../components/RestaurantInfo';
import TopBar from '../../components/TopBar';
import MapComponent from '../../components/MapComponent';

import { Container } from './styles';

const Home = () => {
  return (
    <>
      <TopBar />
      <Container>
        <RestaurantInfo />
        <MapComponent />
      </Container>
    </>
  )
}

export default Home;