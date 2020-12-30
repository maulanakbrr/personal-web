import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

export const ContactContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 992px){
    margin-bottom: 50px;
    padding-top: 90px;
  }

  @media screen and (max-width: 767px){
    padding-top: 80px;
  }
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  
  @media screen and (max-width: 992px){
    font-size: 2.5rem;
  }
`;

export const Desc = styled.p`
  font-size: 1.1rem;

  @media screen and (max-width: 992px){
    font-size: 1rem;
  }
`;

export const ContactRow = styled(Row)`
  
`;