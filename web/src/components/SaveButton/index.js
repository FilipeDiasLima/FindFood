import React from 'react';
import styled from 'styled-components';

const SaveButton = ({title, ...rest}) => {
  return (
    <Container
      {...rest}
    >
      {title}
    </Container>
  )
}

export default SaveButton;

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 188px;
  height: 50px;
  width: 100%;
  background: #2E353F;
  border: 2px solid #47B74B;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 18px;
  color: #DFDFE3;
  transition: transform 0.3s, background 0.2s;

  &:active {
    transform: scale(0.95);
    background: #47B74B;
  }
`;