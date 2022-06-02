import React from 'react';
import {GiCctvCamera} from 'react-icons/gi';
import {FaUserShield, FaExclamationTriangle, FaAward, FaHandshake, FaPeopleArrows} from 'react-icons/fa';
import { ServicesContainer,
ServicesWrapper,
Heading,
ServicesH1,
ServicesP,
Services,
Service,
Icon,
ServiceName,
ServiceText } from './ServicesElements';

const ServicesSection = ({id, title, heading, body, consultancy, risk, training, supply, protection, liaison}) => {
  return (
    <ServicesContainer id={id}>
        <ServicesWrapper>
          <Heading>{title}</Heading>
          <ServicesH1>{heading}</ServicesH1>
          <ServicesP>Our portfolio of services encompasses Equipment Advisory and  Supply, Body Guard, General Security Services <br /> Industrial Security and a range of infrastructure support services, including Project Management and Contract Administration.</ServicesP>
          <Services>
            <Service>
              <Icon>
                <FaPeopleArrows/>
              </Icon>
              <ServiceName>Consultancy</ServiceName>
              <ServiceText>{consultancy}</ServiceText>
            </Service>
            <Service>
              <Icon>
                <FaExclamationTriangle />
              </Icon>
              <ServiceName>Security Risk Assessment</ServiceName>
              <ServiceText>{risk}</ServiceText>
            </Service>
            <Service>
              <Icon>
                <FaAward />
              </Icon>
              <ServiceName>Training</ServiceName>
              <ServiceText>{training}</ServiceText>
            </Service>
            <Service>
              <Icon>
                <GiCctvCamera />
              </Icon>
              <ServiceName>Equipment Supply</ServiceName>
              <ServiceText>{supply}</ServiceText>
            </Service>
            <Service>
              <Icon>
                <FaUserShield />
              </Icon>
              <ServiceName>Executive Protection</ServiceName>
              <ServiceText>{protection}</ServiceText>
            </Service>
            <Service>
              <Icon>
                <FaHandshake />
              </Icon>
              <ServiceName>Security Liaison</ServiceName>
              <ServiceText>{liaison}</ServiceText>
            </Service>
          </Services>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default ServicesSection;