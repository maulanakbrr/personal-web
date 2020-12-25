import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const WorkContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WorkRow = styled(Row)`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
`;

export const Desc = styled.p`
  font-size: 1.1rem;
`;

export const WorkItem = styled(Col)`
  height: 14rem;
  cursor: pointer;
  padding: 0;
`;

export const WorkImage = styled.img`
  height: 12rem;
  width: 100%;
  object-fit: cover;
  &:hover {
    opacity: .75;
  }
`;

export const WorkTitle = styled.div`
  width: 100%;
  height: 2rem;
  font-size: 1.1rem;
  padding-top: .125rem;
  
`;

