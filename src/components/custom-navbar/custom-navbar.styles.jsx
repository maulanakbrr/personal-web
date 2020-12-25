import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled(Navbar)`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: ${props => props.navbar ? "#000" : "rgba(0, 0, 0, 0.1)"};
  color: white;
`;

export const Nav = styled.div`

`;

export const NavLink = styled(Link)`
  color: #000;
  margin-left: 1rem;
`;