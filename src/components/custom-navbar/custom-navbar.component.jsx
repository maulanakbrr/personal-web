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
                <NavLink href='#header' style={styles}>Home</NavLink>
                <NavLink href='#profile' style={styles}>Profile</NavLink>
                <NavLink href='#professional' style={styles}>Professional</NavLink>
                <NavLink href='#portfolio' style={styles}>Portfolio</NavLink>
                <NavLink href='#experience' style={styles}>Experience</NavLink>
                <NavLink href='#contact' style={styles}>Contact</NavLink>
            </Nav>
        </NavbarContainer>
    );
};


export default CustomNavbar;