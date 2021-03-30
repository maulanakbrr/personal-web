import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';

export const ExperienceContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  /* align-items: center; */
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

  .experience-title {
    width: 100%;
    
  }
`;

export const ExperienceItem = styled(Col)`
  text-align: justify;
  padding: 0 1rem;

  @media screen and (max-width: 992px){
    padding: 1rem;
  }

  @media screen and (max-width: 767px){
    text-align: center;
  }
`;