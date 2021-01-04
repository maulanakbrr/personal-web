import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';

export const ExperienceContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 992px){
    padding-top: 50px;
  }
  
  @media screen and (max-width: 767px){
    padding-top: 90px;
  }

  @media screen and (max-width: 576px){
    padding-top: 50px;
  }
`;

export const ExpTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  width: 100%;
  text-align: justify;
  
  @media screen and (max-width: 992px){
    font-size: 2.5rem;
    padding-top: 50px;
  }

  @media screen and (max-width: 767px){
    text-align: center;
  }
`;

export const ExperienceItem = styled(Col)`
  text-align: justify;

  @media screen and (max-width: 992px){
    padding: 20px;
  }

  @media screen and (max-width: 767px){
    text-align: center;
  }
`;