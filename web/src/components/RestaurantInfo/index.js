import React, { useEffect, useState } from 'react';
import { FiPhone, FiLink } from 'react-icons/fi';
import api from '../../api/apiAxios';

import logo_restaurant from '../../assets/restaurante-logo.svg';
import restaurant1 from '../../assets/restaurante1.jpg';
import restaurant2 from '../../assets/restaurante2.jpeg';

import ModalImg from '../ModalImg';

import {
  Container,
  Header,
  HeaderText,
  Tags,
  Tag,
  RestaurantImages,
  MiniImages,
  Contacts,
  Phone,
  LinkWeb,
} from './styles';

const RestaurantInfo = ({ restaurantId }) => {
  const [data, setData] = useState()

  useEffect(() => {
    if (restaurantId) {
      api.get(`points/${restaurantId}`).then(response => {
        console.log(response.data)
        setData(response.data)
      })
    }
  }, [restaurantId])

  console.log('data: ',data)

  return (
    <Container>
      <Header>
        <img src={logo_restaurant} alt='Restaurant' />
        <HeaderText>
          <strong>{data ? data.point.name : ''}</strong>
          <span>{data ? data.point.city : ''} - {data ? data.point.state : ''}</span>
        </HeaderText>
      </Header>
      <Tags>
        {data ? data.filters.map(filter => (
          <Tag>{filter.name}</Tag>
        )) : ''}
      </Tags>
      <RestaurantImages>
        <ModalImg imgSrc={data ? data.point.image_url : ''} />
      </RestaurantImages>
      <Contacts>
        <Phone>
          <FiPhone size={30} color='#DFDFE3' />
          <span>{data ? data.point.phone : ''}</span>
        </Phone>
        <LinkWeb>
          <FiLink size={30} color='#DFDFE3' />
          <a target='_blank' href='/home'>{data ? data.point.site : ''}</a>
        </LinkWeb>
      </Contacts>
    </Container>
  )
}

export default RestaurantInfo;