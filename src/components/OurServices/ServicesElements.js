import styled from 'styled-components'
export const ServicesContainer = styled.div`
  background: #127cf9;

  @media screen and (max-width: 768px) {
    padding: 0 5px;
    margin: auto;
  }
`

export const ServicesWrapper = styled.div`
  font-family: 'Asap', sans-serif;
  width: 100%;
  height: 1000px;
  padding: 0 20px;
  margin-top: -55px;

  @media screen and (max-width: 1120px) {
    height: 1401px;
  }

  @media screen and (max-width: 904px) {
    margin-top: 260px;
    height: 1450px;
  }
  @media screen and (max-width: 854px) {
    margin-top: 260px;
    height: 1450px;
  }
  @media screen and (max-width: 834px) {
    margin-top: 260px;
    height: 1450px;
  }
  @media screen and (max-width: 804px) {
    margin-top: 260px;
    height: 1490px;
  }
  @media screen and (max-width: 790px) {
    margin-top: 260px;
    height: 1450px;
  }
  @media screen and (max-width: 769px) {
    margin-top: 230px;
    height: 2103px;
  }
  @media screen and (max-width: 762px) {
    margin-top: 230px;
    height: 2513px;
  }
  @media screen and (max-width: 703px) {
    margin-top: 300px;
    height: 2540px;
  }
  @media screen and (max-width: 590px) {
    margin-top: 350px;
    height: 2590px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 350px;
    height: 2240px;
  }
`
export const Heading = styled.h5`
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 12px;
  padding-top: 40px;
`

export const ServicesH1 = styled.h2`
  margin-bottom: 12px;
  font-size: 32px;
  text-align: center;
  color: #fff;
`

export const ServicesP = styled.p`
  font-weight: 400;
  font-family: 'Asap', sans-serif;
  color: #fff;
  margin-bottom: 13px;
  text-align: center;
 
`
export const Services = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  font-family: 'Asap', sans-serif;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  margin-left: 25px;

  @media screen and (max-width: 1126px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 1647px) {
    margin-left: 90px;
  }
  @media screen and (max-width: 1329px) {
    margin-right: 70px;
  }
  @media screen and (max-width: 1242px) {
    margin-left: 75px;
  }
  @media screen and (max-width: 1170px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 854px) {
    margin-right: 72px;
  }
  @media screen and (max-width: 834px) {
    margin-right: 72px;
  }
  @media screen and (max-width: 805px) {
    margin-right: 72px;
  }
  @media screen and (max-width: 790px) {
    margin-right: 75px;
  }
  @media screen and (max-width: 769px) {
    margin-left: 90px;
    margin-right: 80px;
  }
  @media screen and (max-width: 763px) {
    margin-left: 150px;
  }
  @media screen and (max-width: 703px) {
    margin-left: 80px;
  }

  @media screen and (max-width: 420px) {
    margin-right: 10px;
  }
  @media screen and (max-width: 411px) {
    margin-right: 15px;
  }
  @media screen and (max-width: 360px) {
    margin-right: 75px;
  }
  @media screen and (max-width: 347px) {
    margin-right: 30px;
  }
  @media screen and (max-width: 351px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 290px) {
    margin-right: 20px;
  }
`
export const Service = styled.div`
  background-color: #fafcfc;
  width: 351px;
  height: 351px;
  box-shadow: 5px 5px 5px #2a52be;
  padding-top: 25px;
  word-spacing: 1.5px;
  text-align: center;
  font-size: 14px;

  &:hover {
    background-color: #00bfff;
    //color: #fff;
    box-shadow: 5px 5px 5px #2a52be;
  }

  @media screen and (max-width: 351px) {
    width: 301px;
    height: 301px;
  }
  @media screen and (max-width: 351px) {
    width: 295px;
    height: 295px;
  }
  @media screen and (max-width: 290px) {
    width: 293px;
    height: 293px;
  }
  @media screen and (max-width: 360px) {
    width: 280px;
    height: 293px;
  }
`
export const Icon = styled.div`
  color: #3a56e8;
  font-size: 55px;
`

export const ServiceName = styled.h3`
  font-size: 19px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 351px) {
    font-size: 17px;
  }
  @media screen and (max-width: 290px) {
    font-size: 15px;
  }
`

export const ServiceText = styled.p`
  margin-top: 5px;
  font-weight: 400;
  align-text: center;
  padding: 5px 15px;
  font-size: 15px;

  &:hover {
    font-size: 15.2px;
  }

  @media screen and (max-width: 351px) {
    font-size: 12px;

    &:hover {
      font-size: 12.7px;
    }
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
  @media screen and (max-width: 290px) {
    font-size: 10px;
    &:hover {
      font-size: 10.7px;
    }
  }
`
