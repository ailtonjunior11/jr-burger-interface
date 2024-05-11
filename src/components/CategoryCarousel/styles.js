import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 25px 0;

  .rec.rec-arrow {
    background-color: #864d93;
    color: #efefef;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.5);
  }

  .rec.rec-arrow:hover {
    border: 2px solid #864d93;
    background-color: #efefef;
    color: #864d93;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`;

export const CategoryImg = styled.img``;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`;

export const Button = styled(Link)`
  background: #864d93;
  border-radius: 8px;
  border: none;
  height: 50px;
  margin-top: 16px;
  font-style: normal;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }
`;
