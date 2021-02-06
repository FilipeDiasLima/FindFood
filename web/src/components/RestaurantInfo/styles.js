import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  
  > strong {  
    font-size: 40px;
  }

  > span {
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  max-width: 55%;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #242930;
  padding: 8px 10px;
  border-radius: 15px;
  width: 100px;
  font-weight: bold;
  font-size: 14px;
`;

export const RestaurantImages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  > img {
    width: 380px;
    height: 217px;
    filter: drop-shadow(0px 10px 7px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    transition: transform 0.3s;
    cursor: pointer;

    :hover {
      transform: scale(1.03)
    }
  }
`;

export const MiniImages = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 175px;
    height: 93px;
    opacity: 0.6;
    filter: drop-shadow(0px 10px 7px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    transition: transform 0.3s;
    cursor: pointer;

    :hover {
      transform: scale(1.03)
    }

    & + img {
      margin-top: 11px;
    }
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > span {
    margin-left: 20px;
    font-size: 18px;
  }
`;

export const LinkWeb = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  align-items: center;

  > a {
    margin-left: 20px;
    text-decoration: none;
    color: #DFDFE3;
    font-size: 18px;
  }
`;

export const Description = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid #DFDFE3;
  box-sizing: border-box;
  border-radius: 30px;
  width: 100%;
  height: 180px;
  padding: 20px 18px;

  > p {
    text-align: left;
    font-size: 18px;
  }
`;