import React from 'react';
import Logo from '../../images/edgard_black.png';
import {animateScroll as scroll} from 'react-scroll';
import { FaEnvelope} from 'react-icons/fa';
import { MdSmartphone} from 'react-icons/md';
import { ImLocation} from 'react-icons/im';
import{ AiFillTwitterSquare, AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'

import {
    FooterContainer,
    FooterWrapper,
    TextWrapper,
    FooterLogo,
    // TagLine,
    ReachUs,
    Reach,
    IconS,
    Details,
    Divider,
    FooterContent,
    TextContent,
    IconGroup,
    Icon
} from './FooterElements';

const FooterSection = ( { tagline, email, phone, address, text} ) => {

    const toggleHome = () =>{
        scroll.scrollToTop(); 
   }
    return (
        <>
          <FooterContainer >
              <FooterWrapper>
                  <TextWrapper>
                    <FooterLogo src={Logo} onClick={toggleHome} />
                    {/* <TagLine>{tagline}</TagLine> */}
                  </TextWrapper>

                  <ReachUs>
                    <Reach>
                      <IconS> <FaEnvelope /> </IconS>
                      <Details>{email}</Details>
                    </Reach>
                    <Reach>
                      <IconS> <MdSmartphone /> </IconS>
                      <Details>{phone}</Details>
                    </Reach>
                    <Reach>
                      <IconS> <ImLocation /> </IconS>
                      <Details>{address}</Details>
                    </Reach>
                  </ReachUs>
                
                  <Divider></Divider>
                  <FooterContent>
                      <TextContent>&#169;{text}</TextContent>   
                      <IconGroup>
                          <Icon to="/"> <AiFillInstagram /> </Icon>
                          <Icon to="/"> <AiFillTwitterSquare /> </Icon>
                          <Icon to="/"> <AiFillFacebook/> </Icon>
                          <Icon to="/"> <AiFillLinkedin /> </Icon>
                    </IconGroup>
                  </FooterContent> 
              </FooterWrapper>   
          </FooterContainer>  
        </>
    )
}

export default FooterSection;
