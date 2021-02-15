import React, { useState } from 'react';

import RestaurantInfo from '../../components/RestaurantInfo';
import FilterComponent from '../../components/FilterComponent';
import TopBar from '../../components/TopBar';
import MapComponent from '../../components/MapComponent';

import { Container, InfoContent } from './styles';

const Home = () => {
  const [selectedId, setSelectedId] = useState()

  const handleSelectId = (id) => {
    setSelectedId(id)
  }

  console.log(selectedId);
  return (
    <Container>
      <InfoContent >
        <RestaurantInfo restaurantId={selectedId}/>
        <FilterComponent />
      </InfoContent>
      <MapComponent changeId={handleSelectId}/>
    </Container>
  )
}

export default Home;