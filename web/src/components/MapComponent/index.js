import "leaflet/dist/leaflet.css";

import React, { FormEvent, useState } from 'react';
import AsyncSelect from "react-select/async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";

import {Container} from './styles'

import mapPin from "../../assets/pin.svg";

import { fetchLocalMapBox } from "../../api/apiMapBox";

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const initialPosition = { lat: -22.2154042, lng: -54.8331331 };

const MapComponent = () => {
  const [position, setPosition] = useState()
  const [location, setLocation] = useState(initialPosition);

  return (
    <Container>
      <MapContainer
        center={location}
        zoom={15}
        style={{width: '100%', height: '100%', borderRadius: '20px'}}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
        />

        {position && (
          <Marker
            icon={mapPinIcon}
            position={[position.latitude, position.longitude]}
          >
          </Marker>
        )}

      </MapContainer>
    </Container>
  );
}

export default MapComponent;