import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ContactContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
`;

export const Desc = styled.p`
  font-size: 1.1rem;
`;