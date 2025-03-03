/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { Button } from '../../../components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

export const Label = styled.p`
  font-size: 13px;
  color: #fff;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  min-width: 280px;
  padding-left: 10px;
`;

export const ButtonStyles = styled(Button)`
  width: 100%;
  height: 40px;
  margin-top: 25px;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  font-size: 13px;
  color: #fff;

  input {
    opacity: 0;
    width: 1px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    height: 15px;
    width: 15px;
    cursor: pointer;
    border-radius: 5px;
  }
`;
