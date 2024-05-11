/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 10px 20px 0px rgba(57, 57, 57, 0.6);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    background-color: #fff;
  }

  .container-top {
    background-color: #fff;
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 15px;
      background-color: #fff;
    }

    .items {
      grid-area: items;
      background-color: #fff;
    }

    .items-price {
      grid-area: items-price;
      background-color: #fff;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      background-color: #fff;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      background-color: #fff;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
    background-color: #fff;
  }
`;
