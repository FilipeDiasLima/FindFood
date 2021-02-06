import React from 'react';

import {Container, UserContainer, Avatar} from './styles';

import logo from '../../assets/logo.png'

const TopBar = () => {
  return (
    <Container>
      <img src={logo} alt='FindFood'/>
      <UserContainer>
        <strong>Tommy Shelby</strong>
        <Avatar />
      </UserContainer>
    </Container>
  )
}

export default TopBar;