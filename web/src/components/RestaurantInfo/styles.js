import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  margin-top: 5px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  max-width: 100%;
`;

export const Tag = styled.div`
  display: flex;
  margin-top: 3px;
  align-items: center;
  justify-content: center;
  background: #242930;
  padding: 8px 10px;
  border-radius: 15px;
  width: 100px;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.13);
  margin-left: 5px;
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
  margin-top: 30px;
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
