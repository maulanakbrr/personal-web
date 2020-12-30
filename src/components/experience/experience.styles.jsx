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

export const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 992px){
    font-size: 2.5rem;
    margin-left: 20px;
    padding-top: 50px;
  }
`;

export const ExperienceItem = styled(Col)`
  @media screen and (max-width: 992px){
    padding: 20px;
  }
`;