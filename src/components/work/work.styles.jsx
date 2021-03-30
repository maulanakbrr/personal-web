import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const WorkContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;

  @media screen and (max-width: 991px){
    padding-top: 90px;
  }

  @media screen and (max-width: 767px){
    padding-top: 80px;
  }

  .portfolio-head {
    @media screen and (max-width: 575px){
      padding: 0 15px;
    }
  }
`;

export const WorkRow = styled(Row)`
  width: 100%;
`;

export const WorkItem = styled(Col)`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 992px){
    padding: 20px;
  }
`;

export const WorkLink = styled.div`
  @media screen and (max-width: 575px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const WorkImage = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
  box-shadow: 2px 4px 10px #888888;
  border-radius: 15px;
  margin-bottom: 10px;
  
  &:hover {
    opacity: .9;
  }

`;

export const WorkTitle = styled.div`
  font-size: 1.3rem;
  color: #017cff;
  padding-top: .125rem;

  @media screen and (max-width: 767px){
    display: none;
  }

  @media screen and (max-width: 575px){
    display: block;
  }
`;

