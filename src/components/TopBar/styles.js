import styled from 'styled-components';

import thommy from '../../assets/thommy.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2E353F;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 45px;

  > img {
    width: 163px;
    height: 45px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > strong {
    font-size: 27px;
    text-align: right;
  }
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  background: url(${thommy}) no-repeat center;
  background-size: cover;
  border-radius: 50%;
  margin-left: 20px;
`;
