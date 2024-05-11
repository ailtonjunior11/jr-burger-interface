import styled from 'styled-components';

export const Container = styled.div`
  height: 75px;
  background-color: #efefef;
  box-shadow: 2px 3px 5px 0px #00000026;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9400d3' : '#555555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`;

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`;

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  cursor: pointer;
  color: #9400d3;
`;
