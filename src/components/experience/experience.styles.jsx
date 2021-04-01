import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';

export const ExperienceContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;

  @media screen and (max-width: 992px){
    padding-top: 50px;
  }
  
  @media screen and (max-width: 767px){
    padding-top: 50px;
  }

  @media screen and (max-width: 576px){
    margin-top: 20px;
    padding-top: 50px;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .experience-title {
    width: 100%;
  }
`;

export const ImageBox = styled.div`
  width: 75%;
  margin: 0 auto;

  @media screen and (max-width: 991px){
    margin: 0;
    margin-left: auto;
  }

  @media screen and (max-width: 767px){
    width: 70%;
    margin: 0 auto;
  }
`;

export const ExperienceItem = styled(Col)`
  text-align: justify;
  padding: 1.2rem 1rem;

  @media screen and (max-width: 992px){
    padding: 1rem;
  }

  @media screen and (max-width: 767px){
    padding-bottom: 0;
  }
`;

export const ExperienceJob = styled.h3`
  @media screen and (max-width: 575px){
    text-align: left;
  }
`;