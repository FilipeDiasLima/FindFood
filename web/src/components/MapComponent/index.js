import "leaflet/dist/leaflet.css";

import React, { FormEvent, useEffect, useState } from 'react';
import AsyncSelect from "react-select/async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";

import { Container, MapMarkerContainer } from './styles'

import mapPin from "../../assets/pin.svg";

import { fetchLocalMapBox } from "../../api/apiMapBox";
import api from "../../api/apiAxios";
import styled from "styled-components";

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [40, 60],
  iconAnchor: [19, 50],
  popupAnchor: [0, -20],
});

const initialPosition = { lat: -3.1248006, lng: -60.0214459 };

const MapComponent = ({ changeId }) => {
  const [points, setPoints] = useState([]);
  const [position, setPosition] = useState()
  const [location, setLocation] = useState(initialPosition);

  
  useEffect(() => {
    api.get('/points', {
      params: {
        city: localStorage.getItem('@POINT_CITY'),
        state: localStorage.getItem('@POINT_STATE'),
        filters: localStorage.getItem('@POINT_FILTER')
      }
    }).then(response => {
      setPoints(response.data);
    })
  }, [])

  function handleSelectRestaurant(id) {
    console.log('map: ',id)
    changeId(id)
  }

  return (
    <Container>
      <MapContainer
        center={location}
        zoom={15}
        style={{ width: '100%', height: '100%', borderRadius: '20px' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
        />

        {points.map(point => (
          <Marker
            key={point.id}
            icon={mapPinIcon}
            position={[point.latitude, point.longitude]}
          >
            <Popup >
              <img style={imgPop} onClick={() => handleSelectRestaurant(point.id)} src={point.image_url} />
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </Container>
  );
}

export default MapComponent;


const mapMarkerContainer = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  background: '#2E353F',
  zIndex: 1,
  flexDirection: 'column',
  borderRadius: '8px',
  overflow: 'hidden',
  alignItems: 'center',
};

const imgPop = {
  width: '150px',
  height: '90px',
  filter: 'drop-shadow(0px 10px 7px rgba(0, 0, 0, 0.25))',
  borderRadius: '10px',
  cursor: 'Pointer'
}