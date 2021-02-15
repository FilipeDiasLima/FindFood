import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 66%;
  height: 92vh;
`;

export const MapMarkerContainer = styled.div`
  display: flex;
  padding: 10px;
  background: #2E353F;
  z-index: 1;
  flex-direction: column;
  border-radius: 8;
  overflow: hidden;
  align-items: center;

  > strong {
    font-size: 10px;
    color: #DFDFE3;
  }

  > img {
    width: 150px;
    height: 90px;
    filter: drop-shadow(0px 10px 7px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
  }
`;