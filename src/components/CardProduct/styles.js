import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 16px 0px rgba(57, 57, 57, 0.6);
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 135px;
  border-radius: 10px;
`;

export const ProductName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;

  color: #000000;
`;

export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  margin-top: 30px;

  color: #000000;
`;
