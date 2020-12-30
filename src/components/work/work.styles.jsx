import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const WorkContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 991px){
    padding-top: 90px;
  }

  @media screen and (max-width: 767px){
    padding-top: 80px;
  }
`;

export const WorkRow = styled(Row)`
  width: 100%;
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

export const WorkItem = styled(Col)`
  height: 14rem;
  cursor: pointer;
  padding: 0;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  @media screen and (max-width: 992px){
    padding: 20px;
  }
`;

export const WorkImage = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
  &:hover {
    opacity: .75;
  }
`;

export const WorkTitle = styled.div`
  width: 10%;
  height: 20%;
  font-size: 1.1rem;
  padding-top: .125rem;
  margin: 0 auto;
  
`;

