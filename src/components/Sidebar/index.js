import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideButtonWrap,
    SidebarRoute
} from './SidebarElements';
 
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="hero" 
                    smooth={true} 
                    duration={500} 
                    exact='true' 
                    offset={-80}
                    onClick={toggle} >
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" 
                    smooth={true} 
                    duration={500} 
                    exact='true' 
                    offset={-60}
                    onClick={toggle} >
                        About
                    </SidebarLink>
                    <SidebarLink to="services" 
                    smooth={true} 
                    duration={500} 
                    exact='true' 
                    offset={-70}
                    onClick={toggle} >
                        Our Services
                    </SidebarLink>
                    <SidebarLink to="clientele" 
                    smooth={true} 
                    duration={500} 
                    exact='true' 
                    offset={-70}
                    onClick={toggle} >
                        Our Clientele
                    </SidebarLink>
                    <SidebarLink to="contact" 
                    smooth={true} 
                    duration={500} 
                    exact='true' 
                    offset={-75}
                    onClick={toggle} >
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
                <SideButtonWrap>
                    <SidebarRoute to="/get-quote" onClick={toggle} >Get a quotation</SidebarRoute>
                </SideButtonWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
