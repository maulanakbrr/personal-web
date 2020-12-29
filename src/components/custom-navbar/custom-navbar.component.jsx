import { useState } from 'react';
import { Navbar } from 'react-bootstrap';

import {
    NavbarContainer,
    NavLink,
    NavMenu,
    Menu,
    MenuBar 
} from './custom-navbar.styles'

const styles = {
    color: '#fff'
}

const CustomNavbar = () => {
    const [navbar, setNavbar] = useState(0);
    const [menu,setMenu] = useState(true);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(1);
        } else {
            setNavbar(0);
        }
    };

    const toggleNavMenu = () => {
        setMenu(!menu);
        console.log(menu);
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className='container'>
        <NavbarContainer fixed='top' className='justify-content-between ' navbar={navbar}>
            <Navbar.Brand style={styles}>MLBR</Navbar.Brand>
            {
                menu ? 
                    <NavMenu>
                        <NavLink href='#header' style={styles}>Home</NavLink>
                        <NavLink href='#profile' style={styles}>Profile</NavLink>
                        <NavLink href='#professional' style={styles}>Professional</NavLink>
                        <NavLink href='#portfolio' style={styles}>Portfolio</NavLink>
                        <NavLink href='#experience' style={styles}>Experience</NavLink>
                        <NavLink href='#contact' style={styles}>Contact</NavLink>
                    </NavMenu>
                 : null
            }
            <Menu >
                <MenuBar onClick={toggleNavMenu}/>
            </Menu>
        </NavbarContainer>
        </div>
    );
};


export default CustomNavbar;