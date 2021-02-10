import React from 'react';

import RestaurantInfo from '../../components/RestaurantInfo';
import FilterComponent from '../../components/FilterComponent';
import TopBar from '../../components/TopBar';
import MapComponent from '../../components/MapComponent';

import { Container, InfoContent } from './styles';

const Home = () => {
  return (
    <>
      <TopBar />
      <Container>
        <InfoContent>
          <RestaurantInfo />
          <FilterComponent />
        </InfoContent>
        <MapComponent />
      </Container>
    </>
  )
}

export default Home;