import React, { useState } from 'react';
import { FiPhone, FiLink } from 'react-icons/fi';

import logo_restaurant from '../../assets/restaurante-logo.svg';
import restaurant1 from '../../assets/restaurante1.jpg';
import restaurant2 from '../../assets/restaurante2.jpeg';

import ModalImg from '../ModalImg';

import { Container,
   Header,
   HeaderText,
   Tags,
   Tag,
   RestaurantImages,
   MiniImages,
   Contacts,
   Phone,
   LinkWeb,
   Description 
} from './styles';

const RestaurantInfo = () => {

  return (
    <Container>
      <Header>
        <img src={logo_restaurant} alt='Restaurant' />
        <HeaderText>
          <strong>Jorj-lins</strong>
          <span>R. Planeta Júpiter, 100 - Aleixo, Manaus - AM, 69060-089</span>
        </HeaderText>
      </Header>
      <Tags>
        <Tag>Almoço</Tag>
        <Tag>Jantar</Tag>
        <Tag>Café</Tag>
      </Tags>
      <RestaurantImages>
        <ModalImg imgSrc={restaurant1} />      
        <MiniImages>
          <ModalImg imgSrc={restaurant2} />      
          <ModalImg imgSrc={restaurant2} />      
        </MiniImages>
      </RestaurantImages>
      <Contacts>
        <Phone>
          <FiPhone size={30} color='#DFDFE3' />
          <span>+55 91 5684-6627</span>
        </Phone>
        <LinkWeb>
          <FiLink size={30} color='#DFDFE3' />
          <a target='_blank' href='/home'>https://jorjlinsrestaurant.com</a>
        </LinkWeb>
      </Contacts>
      <Description>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Description>
    </Container>
  )
}

export default RestaurantInfo;