import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

export const NavbarContainer = styled(Navbar)`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: ${props => props.navbar ? "#000" : "rgba(0, 0, 0, 0.1)"};
  color: white;
  overflow-x: none;
`;

export const NavMenu = styled(Nav)`
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const NavLink = styled(Nav.Link)`
  color: #fff;
  margin-left: 1rem;
`;

export const Menu = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
  }
`;

export const MenuBar = styled(FaBars)`
  font-size: 1.1rem;
  
`;

