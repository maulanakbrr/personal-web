import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FaAngleDown } from 'react-icons/fa';

export const HeaderContainer = styled.div`
  position: relative;  
  min-height: 100vh;  
  background-color: grey;
  color: white;
  width: 100%;

  @media screen and (max-width: 992px){
    min-height: 60vh;
  }

  @media screen and (max-width: 576px){
    min-height: 100vh;
  }
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

export const HeaderTitle = styled.h2`
  font-size: 2.5rem;

  @media screen and (max-width: 575px){
    font-size: 1.8rem;
  }
`;

export const HeaderInfo = styled.p`
  font-size: 1.7rem;

  @media screen and (max-width: 575px){
    font-size: 1.2rem;
  }
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