import React from 'react';
import { ServicesContainer,
ServicesWrapper,
Heading,
ServicesH1,
ServicesP } from './ServicesElements';

const ServicesSection = ({id, title, heading, body}) => {
  return (
    <ServicesContainer id={id}>
        <ServicesWrapper>
          <Heading>{title}</Heading>
          <ServicesH1>{heading}</ServicesH1>
          <ServicesP>{body}</ServicesP>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default ServicesSection;