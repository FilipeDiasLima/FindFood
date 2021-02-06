import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #242930;
  width: 428px;
  height: 545px;
  place-content: center;
  border-radius: 20px;
  padding: 80px 46px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.13);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    width: 100%;

    button {
      width: 162px;
      height: 42px;
      background: linear-gradient(90deg, #27364A 0%, #46566D 100%);
      box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      border: none;
      margin-top: 50px;
      font-size: 16px;
      font-weight: bold;
      transition: transform 0.3s;

      :active {
        transform: scale(0.96)
      }
    }

    a {
      margin-top: 30px;
      text-decoration: none;
      color: #FFF;
      font-size: 16px;
    }
  }
`;