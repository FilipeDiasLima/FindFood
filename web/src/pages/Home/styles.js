import styled from 'styled-components';

import map from '../../assets/map.png'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 45px;
  justify-content: space-between;

  .mapExemplo {
    display: flex;
    width: 66%;
    height: 800px;
    background: #FFF;
    border-radius: 30px;
    background: url(${map}) no-repeat center;
    background-size: cover;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
`;