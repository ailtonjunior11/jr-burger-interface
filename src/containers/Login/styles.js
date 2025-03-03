import styled from 'styled-components';

import Background from '../../assets/background-1.jpeg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginImage = styled.img`
  border-radius: 9px 0 0 9px;
  height: 83%;
`;

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 9px 9px 0;
  height: 83%;
  padding: 25px 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 100px;
    margin-top: -15px;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 70px;
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 391px;
  height: 30px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
`;

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`;
