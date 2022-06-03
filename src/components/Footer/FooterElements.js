import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.div`
    background: #000;
    color: #fff;
    

`
export const FooterWrapper = styled.div`
    z-index: 1;
    height: 26vh;
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Asap', sans-serif;
    
    padding: 0 24px;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 1300px){
        height: 30vh;
    }
    @media screen and (max-width: 940px){
        height: 40vh;
    }
    @media screen and (max-width: 920px){
        height: 45vh;
    }

    @media screen and (max-width: 894px){
        height: 50vh;
    }
    @media screen and (max-width: 768px){
        height: 46vh;
    }
    @media screen and (max-width: 762px){
        height: 35vh;
    }
    @media screen and (max-width: 640px) {
        height: 59vh;
    }
    @media screen and (max-width: 540px) {
        height: 35vh;
    }
    @media screen and (max-width: 414px) {
        height: 29vh;
    }
    @media screen and (max-width: 360px) {
        height: 78vh;
    }
    

`
export const TextWrapper = styled.div`
   max-width: 1200px;
   padding-bottom: 40px;
   font-family: 'Padauk' ;
   justify-content: center;

`
export const FooterLogo = styled.img`
  margin-top: 10px;
  width: 80px;
  height: 80px;

  @media screen and (max-width: 768px){
    width: 70px;
    height: 70px;
}
`
export const TagLine = styled.p`
    font-size: 13px;
    @media screen and (max-width: 768px){
        font-size: 11px;
    }
`

export const ReachUs = styled.div`
    margin-top: -20px;
    display: flex;
    gap: 5px;
    align-item: center;

    @media screen and (max-width: 768px){
        margin-left:18px;
    }
    @media screen and (max-width: 370px){
        margin-left:0;
        gap: 10px;
    }


`

export const Reach = styled.div`
    font-size: 16px;
    margin-left: 105px;
    display: flex;
    @media screen and (max-width: 768px){
        font-size: 12px;
        display: block;
        margin-left: 0;
    }
`

export const IconS = styled.i`
    color: #127cf9;
    font-size: 15px;
    margin-right: 5px;
`

export const Details = styled.p`
    font-size: 11px;
`

export const Divider = styled.div`

    width: 1000px;
    padding: 0 15px;
    margin-left: 130px;
    border-top: 0.1px solid #E5E5E5;
    opacity: 0.3;

    @media screen and (max-width: 1200px){
        width: 900px;
        margin-right: 300px;
    }
    @media screen and (max-width: 1057px){
        width: 770px;
        margin-right: 300px;
    }


    @media screen and (max-width: 940px){
        width: 700px;
        margin-right: 300px;
    }

    @media screen and (max-width: 890px){
        width: 760px;
        margin-left: 20px;
        margin-top: 10px;
    }
    @media screen and (max-width: 768px){
        width: 400px;
        margin-left: 40px;
        margin-top: 10px;
    }

    @media screen and (max-width: 762px){
        margin-left: 40px;
        width: 630px;
    }
    @media screen and (max-width: 698px){
        width: 590px;
       
    }
    @media screen and (max-width: 675px){
        width: 540px;
        margin-left: 49px;
       
    }
    @media screen and (max-width: 636px){
        width: 520px;
        margin-left: 49px;
       
    }
    @media screen and (max-width: 609px){
        width: 495px;
        margin-left: 49px;
       
    }
    @media screen and (max-width: 575px){
        width: 460px;
        margin-left: 50px;
       
    }
    @media screen and (max-width: 476px){
        width: 350px;
        margin-right: 40px;
       
    }
    @media screen and (max-width: 447px){
        width: 310px;
        margin-right: 60px;
       
    }
    @media screen and (max-width: 370px){
        width: 250px;
        margin-right: 100px;
       
    }

`
export const FooterContent = styled.div`
    display: flex;
    font-family: 'Inter'
    padding: 15px 25px;
    opacity: 0.8;
    @media screen and (max-width: 890px){
        margin-left: -30px;
    }
    @media screen and (max-width: 762px){
        margin-left: 40px;
    }
    @media screen and (max-width: 575px){
        margin-left: 39px;
       
    }
    @media screen and (max-width: 476px){
        font-size: 11px;
       
    }
    @media screen and (max-width: 447px){
        margin-left: 20px;
       
    }
    @media screen and (max-width: 447px){
        margin-left: 5px;
        font-size: 7px;
       
    }
`

export const TextContent = styled.h6`
    align-self: center;
    font-weight: 100;
    font-size: 13px;
    margin-left: 95px;
    color: #fff;

    @media screen and (max-width: 768px){
        font-size: 10px;
        margin-left: 19px;
    }
`

export const IconGroup = styled.div`
    display: flex;
    margin-left: 723px;
    margin-top: 8px;

    @media screen and (max-width: 1200px){
        margin-left: 600px;
    }
    @media screen and (max-width: 1057px){
        margin-left: 400px;
    }

    @media screen and (max-width: 1079px){
        margin-left: 600px;
    }
    @media screen and (max-width: 940px){
        margin-left: 400px;
    }
    @media screen and (max-width: 890px){
        margin-left: 300px;
    }
    @media screen and (max-width: 768px){
        margin-left: 160px;
    }
    @media screen and (max-width: 762px){
        margin-left: 310px;
       
    }
    @media screen and (max-width: 698px){
        margin-left: 280px;
       
    }
    @media screen and (max-width: 675px){
        margin-left: 230px;
       
    }
    @media screen and (max-width: 609px){
        margin-left: 190px;
       
    }
    @media screen and (max-width: 575px){
        margin-left: 160px;
       
    }
    @media screen and (max-width: 476px){
        margin-left: 60px;
       
    }
`

export const Icon = styled(LinkR)`
    align-self: center;
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    pointer: cursor;

    @media screen and (max-width: 768px){
        font-size: 15px;
    }
`


