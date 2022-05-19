import React from 'react';
import Logo from "../../images/edgard_transparent.png";
import { Nav,
NavbarContainer,
NavLogoContainer,
NavLogo,
MobileIcon,
NavMenu,
NavItem,
NavLinks,
NavButton,
NavButtonLink } from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = ({  toggle }) => {
  return (
    <Nav>
        <NavbarContainer>
            {/* Logo structure. The container tag is to embody the react link while the logo carries the image */}
            <NavLogoContainer to='/'  >
                <NavLogo src={Logo} />
            </NavLogoContainer>
            {/* closed hamburger menu for smaller screen sizes */}
            <MobileIcon onClick={toggle} >
                <FaBars />
            </MobileIcon>
            {/* Nav menu links  */}
            <NavMenu>
            <NavItem>
                   <NavLinks to='hero'>Home</NavLinks> 
                </NavItem>
                <NavItem>
                   <NavLinks to='about'>About</NavLinks> 
                </NavItem>
                <NavItem>
                   <NavLinks to='services'>Our Services</NavLinks> 
                </NavItem>
                <NavItem>
                   <NavLinks to='clientele'>Our Clientele</NavLinks> 
                </NavItem>
                <NavItem>
                   <NavLinks to='contact'>Contact Us</NavLinks> 
                </NavItem>
            </NavMenu>
            <NavButton>
                        <NavButtonLink to="/get-quote"  >
                            Get a quotation 
                        </NavButtonLink>
                    </NavButton>
        </NavbarContainer>
    </Nav>
  )
}

export default Navbar;