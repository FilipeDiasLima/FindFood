import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import {Link} from 'react-router-dom'

import Input from '../../components/Input'

import logo from '../../assets/logo.png'

import {Container, Content} from './styles';

const SignIn = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt='FindFood' />
        <Form>
          <Input 
            icon={FiMail}
            placeholder='E-MAIL'
          />
          <Input 
            icon={FiLock}
            placeholder='PASSWORD'
          />
          <button type='submit'>SIGN IN</button>
          <Link to='/register'>Deseja criar uma conta?</Link>
        </Form>
      </Content>
    </Container>
  )
}

export default SignIn;