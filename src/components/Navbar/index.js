import React, { useState, useEffect } from 'react'
import Logo from '../../images/edgard_transparent.png'
import {
  Nav,
  NavbarContainer,
  NavLogoContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollnav, setScrollnav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 580) {
      setScrollnav(true)
    } else {
      setScrollnav(false)
    }
  } 

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <Nav scrollnav={scrollnav}>
      <NavbarContainer>
        {/* Logo structure. The container tag is to embody the react link while the logo carries the image */}
        <NavLogoContainer>
          <NavLogo src={Logo} onClick={toggleHome} />
        </NavLogoContainer>
        {/* closed hamburger menu for smaller screen sizes */}
        <MobileIcon onClick={toggle} scrollnav={scrollnav}>
          <FaBars />
        </MobileIcon>
        {/* Nav menu links  */}
        <NavMenu >
          <NavItem >
            <NavLinks
              scrollnav={scrollnav}
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-70}
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              scrollnav={scrollnav}
              to="about"
              smooth={true}
              duration={700}
              spy={true}
              exact='true'
              offset={-130}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              scrollnav={scrollnav}
              to="services"
              smooth={true}
              duration={700}
              spy={true}
              exact='true'
              offset={-70}
            >
              Our Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              scrollnav={scrollnav}
              to="clientele"
              smooth={true}
              duration={700}
              spy={true}
              exact='true'
              offset={-100}
            >
              Our Clientele
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
            scrollnav={scrollnav}
            to="contact"
            smooth={true}
            duration={700}
            spy={true}
            exact='true'
            offset={-80}
            >Contact Us</NavLinks>
          </NavItem>
        </NavMenu>
        <NavButton>
          <NavButtonLink target="_blank" to={{ pathname: "https://forms.gle/v6y5tXf8oeGsuSp39"}} >Get a quotation</NavButtonLink>
        </NavButton>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
