import styled from 'styled-components';
import { Container, Carousel } from 'react-bootstrap';

export const CarouselModified = styled(Carousel)`
  
`;

export const CarouselItem = styled(Carousel.Item)`
  height: 32rem;  
  background-color: grey;
  color: white;
`;

export const CarouselImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: center;
  background-size: cover;
  opacity: 0.8;
`;

export const CarouselCaption = styled(Container)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 50px;
`;
