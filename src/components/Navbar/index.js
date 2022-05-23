import React, {useState, useEffect } from 'react';
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
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY  >= 650){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

  return (
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            {/* Logo structure. The container tag is to embody the react link while the logo carries the image */}
            <NavLogoContainer to='/'  >
                <NavLogo src={Logo} />
            </NavLogoContainer>
            {/* closed hamburger menu for smaller screen sizes */}
            <MobileIcon onClick={toggle} scrollNav={scrollNav} >
                <FaBars />
            </MobileIcon>
            {/* Nav menu links  */}
            <NavMenu scrollNav={scrollNav}>
            <NavItem>
                   <NavLinks to='hero'
                   smooth={true} 
                   duration={700} 
                   spy={true} 
                   exact='true' 
                   offset={-20}>Home</NavLinks> 
                </NavItem>
                <NavItem>
                   <NavLinks to='about'
                   smooth={true} 
                   duration={500} 
                   spy={true} 
                   exact='true' 
                   offset={-100}>About</NavLinks> 
                </NavItem>
                <NavItem>
                   <NavLinks to='services'
                   smooth={true} 
                   duration={500} 
                   spy={true} 
                   exact='true' 
                   offset={-100}>Our Services</NavLinks> 
                </NavItem>
                <NavItem>
                   <NavLinks to='clientele'
                   smooth={true} 
                   duration={700} 
                   spy={true} 
                   exact='true' 
                   offset={-145}>Our Clientele</NavLinks> 
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