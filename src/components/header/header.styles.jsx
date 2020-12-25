import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FaAngleDown } from 'react-icons/fa';

export const HeaderContainer = styled.div`
  position: relative;  
  height: 100vh;  
  background-color: grey;
  color: white;
`;

export const HeaderImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: center;
  background-size: cover;
  opacity: 1;
`;

export const HeaderCaption = styled(Container)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 50px;
  
`;

export const Title = styled.h2`
  font-size: 2.5rem;
`;

export const Info = styled.p`
  font-size: 1.7rem;
`;

export const DownButton = styled(FaAngleDown)`
  color: #fff;
  cursor: pointer;
    
  &:hover{
    color: #eee;
    margin-top: .3rem;
    font-size: 1rem;
  }
`;