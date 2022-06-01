import styled from 'styled-components'

export const AboutContainer = styled.div`
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 0 5px;
    margin: auto;
  }
`

export const AboutWrapper = styled.div`
  font-family: 'Red Hat Display', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  width: 100%;
  height: 630px;
  margin-top: 100px;
  padding: 0 20px;

  

  @media screen and (max-width: 904px) {
    padding: 5 0;
    grid-template-columns: 1fr;
    gap: 25px
  }
`

export const ImageWrapper = styled.div`
  display: grid;
`

export const Image1 = styled.img`
  width: 300px;
  grid-column: 1;
  grid-row: 1;
  height: 450px;

  @media screen and (max-width: 1280px){
    margin-right: 15px;
}
@media screen and (max-width: 1120px){
    width: 250px;
    height: 380px;
}
@media screen and (max-width: 1023px){
    height: 470px;
}

  @media screen and (max-width: 904px) {
    grid-column: 1;
    grid-row: 1;
    width: 400px;
  }
  @media screen and (max-width: 854px) {
    width: 350px;
    margin-left: 20px;
  }
  @media screen and (max-width: 782px) {
    margin-left: 5px;
  }
  @media screen and (max-width: 782px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 747px) {
    width: 300px;
    margin-left: 20px;
  }
  @media screen and (max-width: 690px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 670px) {
    margin-left: 4px;
  }
  @media screen and (max-width: 658px) {
    width: 270px;
    margin-left: 20px;
  }
  @media screen and (max-width: 630px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 605px) {
    margin-left: 1px;
  }
  @media screen and (max-width: 600px) {
    width: 230px;
    margin-left: 20px;
  }
  @media screen and (max-width: 550px) {
    margin-left: 7px;
  }
  @media screen and (max-width: 522px) {
    margin-left: 1px;
  }
  @media screen and (max-width: 517px) {
    width: 200px;
    margin-left: 15px;
  }
  @media screen and (max-width: 477px) {
    margin-left: 1px;
  }
  @media screen and (max-width: 457px) {
    width: 180px;
    height: 400px;
    margin-left: 15px;
  }
  @media screen and (max-width: 437px) {
    margin-left: 3px;
  }
  @media screen and (max-width: 420px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 416px) {
    width: 150px;
    height: 380px;
    margin-left: 15px;
  }
  @media screen and (max-width: 382px) {
    margin-left: 2px;
  }
  @media screen and (max-width: 358px) {
    width: 120px;
    height: 340px;
  }
  @media screen and (max-width: 298px) {
    margin-left: 0px;
  }
`

export const Image2 = styled.img`
  width: 300px;
  grid-column: 2;
  grid-row: 1;

  @media screen and (max-width: 1120px){
    width: 250px;
}
@media screen and (max-width: 1023px){
    height: 470px;
}

  @media screen and (max-width: 904px) {
    grid-column: 2;
    grid-row: 1;
    width: 400px;
  }

  @media screen and (max-width: 854px) {
    width: 350px;
  }
  @media screen and (max-width: 764px) {
    margin-right: 5px;
  }
  @media screen and (max-width: 747px) {
    width: 300px;
  }
  @media screen and (max-width: 658px) {
    width: 270px;
  }
  @media screen and (max-width: 600px) {
    width: 230px;
  }
  @media screen and (max-width: 517px) {
    width: 200px;
  }
  @media screen and (max-width: 457px) {
    width: 180px;
    height: 400px;
  }
  @media screen and (max-width: 416px) {
    width: 150px;
    height: 380px;
  }
  @media screen and (max-width: 358px) {
    width: 120px;
    height: 340px;
  }
  @media screen and (max-width: 298px) {
    margin-right: 10px;
  }
`

export const TextWrapper = styled.div`

`

export const Heading = styled.h5`
    color: #3a56e8;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: 12px;

    @media screen and (max-width: 1195px){
        font-size: 14px;
    }

    @media screen and (max-width: 1060px){
        font-size: 13.5px;
    }
    @media screen and (max-width: 904px){
      text-align: center;
  }
`

export const AboutH1 = styled.h2`
    margin-bottom: 12px;
    font-size: 32px;

    @media screen and (max-width: 1195px){
        font-size: 28px;
    }

    @media screen and (max-width: 1060px){
        font-size: 25px;
    }
    @media screen and (max-width: 904px){
      text-align: center;
  }
`

export const AboutP = styled.p`
  font-weight: 400;
  margin-bottom: 13px;

  @media screen and (max-width: 1195px){
    font-size: 15px;
}

@media screen and (max-width: 1060px){
    font-size: 13.6px;
}
`

export const Mission = styled.div`
    margin-bottom: 12px;
`

export const Icon = styled.div`
  color: #3a56e8;
  font-size: 55px;
  position: absolute;
  margin-bottom: 12px;

  @media screen and (max-width: 1195px){
    font-size: 50px;
}

@media screen and (max-width: 1060px){
    font-size: 45px;
}
`

export const TextHeading = styled.h3`
    position: relative;
    margin-left: 60px;
    margin-bottom: 5px;

    @media screen and (max-width: 1195px){
        font-size: 17px;
    }
    @media screen and (max-width: 1060px){
        font-size: 15.6px;
    }
`

export const Text = styled.p`
    margin-left: 60px;

    @media screen and (max-width: 1195px){
        font-size: 14px;
    }
    @media screen and (max-width: 1060px){
        font-size: 13.6px;
    }
`

export const Vision = styled.div``
