import styled from "styled-components"
export const ServicesContainer = styled.div`
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 0 5px;
    margin: auto;
  }
`

export const ServicesWrapper = styled.div`
  font-family: 'Red Hat Display', sans-serif;
  width: 100%;
  height: 700px;
  margin-top: -70px;
  padding: 0 20px;

  @media screen and (max-width: 904px){
      margin-top: 260px;
  }

  @media screen and (max-width: 703px){
    margin-top: 300px;
}
  @media screen and (max-width: 590px){
    margin-top: 350px;
}

`
export const Heading = styled.h5`
    color: #3a56e8;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 12px;
`

export const ServicesH1 = styled.h2`
    margin-bottom: 12px;
    font-size: 32px;
    text-align: center;

`

export const ServicesP = styled.p`
  font-weight: 400;
  margin-bottom: 13px;
  text-align: center;
`


