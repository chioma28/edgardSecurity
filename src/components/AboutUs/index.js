import React from 'react';
import Fade from 'react-reveal/Fade';
import FirstImage from '../../images/about4.png';
import SecondImage from '../../images/about3.jpeg';
import { FaCheckCircle } from 'react-icons/fa';
import {
  AboutContainer,
  AboutWrapper,
  ImageWrapper,
  Image1,
  Image2,
  TextWrapper,
  Heading,
  AboutH1,
  AboutP,
  Icon,
  TextHeading,
  Text,
  Mission,
  Vision,
} from './AboutElements'

const AboutSection = ({
  id,
  box,
  title,
  heading,
  body,
  missionH,
  mission,
  visionH,
  vision,
  idm,
  idv,
}) => {
  return (
    <AboutContainer >
      <AboutWrapper id={id}>
        <ImageWrapper>
          <Image1 src={FirstImage} />
          <Image2 src={SecondImage} />
        </ImageWrapper>
        
        <TextWrapper>
        <Fade right>
          <Heading>{title}</Heading>
          <AboutH1>{heading}</AboutH1>
          <AboutP>{body}</AboutP>
        </Fade>
          <Fade right>
            <Mission>
                <Icon>
                    <FaCheckCircle />
                </Icon>
                <TextHeading>{missionH}</TextHeading>
                <Text>{mission}</Text>
            </Mission>  
          </Fade>
          <Fade right>
            <Vision>
                <Icon>
                    <FaCheckCircle />
                </Icon>
                <TextHeading>{visionH}</TextHeading>
                <Text>{vision}</Text>
            </Vision>
          </Fade>
        </TextWrapper>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default AboutSection
