import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  padding: 12px 10px;

  background: #2E353F;

  & + div {
    margin-top: 30px;
  }
  
  > input {
    background: transparent;
    flex: 1;
    color: #DFDFE3;
    border: none;
    font-size: 18px;
    margin-left: 10px;

    ::placeholder {
      color: #D0D0D0;
    }
  }
`;
