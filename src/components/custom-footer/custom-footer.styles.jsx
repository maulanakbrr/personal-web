import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const Footer = styled(Navbar)`
  background-color: #000;
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media screen and (max-width: 418px){
    flex-direction: column;
  }
`;

export const FooterBrand = styled(Navbar.Brand)`
  font-size: 2rem;
  color: #fff;
`;

export const Copyright = styled.span`
  color: #fff;
`;