import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
    NavbarContainer,
    NavLink 
} from './custom-navbar.styles'

const styles = {
    color: '#fff'
}

const CustomNavbar = () => {
    const [navbar, setNavbar] = useState(0);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(1);
        } else {
            setNavbar(0);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <NavbarContainer fixed='top' className='justify-content-between ' navbar={navbar}>
            <Navbar.Brand style={styles}>MLBR</Navbar.Brand>
            <Nav>
                <NavLink to='/' style={styles}>Home</NavLink>
                <NavLink to='/profile' style={styles}>Profile</NavLink>
                <NavLink to='/professional' style={styles}>Professional</NavLink>
                <NavLink to='/portfolio' style={styles}>Portfolio</NavLink>
                <NavLink to='/experience' style={styles}>Experience</NavLink>
                <NavLink to='/contact' style={styles}>Contact</NavLink>
            </Nav>
        </NavbarContainer>
    );
};


export default CustomNavbar;