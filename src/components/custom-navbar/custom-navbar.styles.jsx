import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const NavbarContainer = styled(Navbar)`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: ${props => props.navbar ? "#000" : "rgba(0, 0, 0, 0.1)"};
  color: white;
`;

export const NavLink = styled(Nav.Link)`
  color: #fff;
  margin-left: 1rem;
`;