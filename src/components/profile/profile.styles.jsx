import styled from 'styled-components';
import {
  Container, Row
} from 'react-bootstrap';

export const ProfileContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const ProfileImageContainer = styled(Row)`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  background-color: grey;
  border-radius: 50%;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
`;

export const Desc = styled.p`
  font-size: 1.1rem;
`;

export const IconsContainer = styled(Row)`
  
`;

export const Icon = styled.a`
  font-size: 2rem;
  margin-right: 2rem;
  color: #000;

  &:hover {

  }
`;