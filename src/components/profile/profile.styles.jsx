import styled from 'styled-components';
import {
  Container, Row, Image
} from 'react-bootstrap';

export const ProfileContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .profile-title {
    @media screen and (max-width: 767px){
      display: flex;
      justify-content: center;
      margin-top: 15px;
    }
  }

  .profile-desc {
    @media screen and (max-width: 575px){
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 50px;
  }

  @media screen and (max-width: 767px) {
    min-height: 60vh;
    padding-top: 90px;
  }
`;

export const ProfileImage = styled(Image)`
  background-color: grey;
  border-radius: 50%;
  width: auto;
  height: auto;
  @media screen and (max-width: 991px){
    width: 14rem;
  }
`;

export const IconsContainer = styled(Row)`
  @media screen and (max-width: 767px){
    display: flex;
    justify-content: center;
  }
`;

export const Icon = styled.a`
  font-size: 2rem;
  margin-right: 2rem;
  color: #000;

  @media screen and (max-width: 992px){
    font-size: 1.5rem;
  }
`;