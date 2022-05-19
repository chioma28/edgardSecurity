import React from 'react'
import Frame from '../../images/Frame.png';
import { HeroContainer,
HeroBg,
ImageBg,
HeroContent,
HeroH1,
HeroH2,
HeroP } from './HeroElements';

const HeroSection = ({ id, paragraph }) => {
  return (
    <HeroContainer id={id}>
        <HeroBg>
            <ImageBg src={Frame}/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Building a<HeroH2> secure </HeroH2>future</HeroH1>
            <HeroP>{paragraph}</HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;