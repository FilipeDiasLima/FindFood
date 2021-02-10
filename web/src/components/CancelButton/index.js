import React from 'react';
import styled from 'styled-components';

const CancelButton = ({title, ...rest}) => {
  return (
    <Container
      {...rest}
    >
      {title}
    </Container>
  )
}

export default CancelButton;

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 188px;
  width: 100%;
  background: #2E353F;
  border: 2px solid #D65959;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 18px;
  color: #DFDFE3;
  transition: transform 0.3s, background 0.2s;

  &:active {
    transform: scale(0.95);
    background: #D65959;
  }
`;