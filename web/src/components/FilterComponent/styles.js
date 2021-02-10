import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 25px 30px;
  background: #242930;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  height: 261px;

  > strong {
    font-size: 24px;
    color: #DFDFE3;
  }

  > span {
    font-size: 18px;
    color: #DFDFE3;
    margin-top: 20px;
  }
`;

export const FilterText = styled.div`
    margin-top: 20px;
  > span {
    font-size: 20px;
    color: #DFDFE3;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 47px;
  margin-top: 60px;
`;
