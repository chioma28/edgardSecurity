import styled from "styled-components";

export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 650px;
position: relative;
z-index: 1;
margin-bottom: 60px;


:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
} 
`;
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`
export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    margin-top: 60px;
    margin-right: 20px;
    padding: 8px 28px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 59px;
    line-height: 70px;
    font-family: 'Red Hat Display', sans-serif;
    font-style: bolder;
    text-transform: uppercase;

    @media screen and (max-width: 918px){
        font-size: 42px;
        line-height: 30px;
    }
    @media screen and (max-width: 900px){
        font-size: 40px;
        line-height: 30px;
    }
    @media screen and (max-width: 768px){
        font-size: 35px;
        line-height: 30px;
    }
    @media screen and (max-width: 575px){
        font-size: 30px;
        line-height: 30px;
    }
    @media screen and (max-width: 500px){
        font-size: 25px;
        line-height: 30px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
        line-height: 30px;
    }
    @media screen and (max-width: 360px){
        font-size: 18px;
        line-height: 30px;
    }
    @media screen and (max-width: 320px){
        font-size: 17px;
        line-height: 5px;
    }
    @media screen and (max-width: 258px){
        font-size: 11px;
        line-height: 5px;
    }
    @media screen and (max-width: 240px){
        font-size: 10px;
        line-height: 2px;
    }
    @media screen and (max-width: 230px){
        font-size: 9px;
        line-height: 1px;
    }
    @media screen and (max-width: 200px){
        font-size: 7px;
        line-height: 1px;
    }
    @media screen and (max-width: 180px){
        font-size: 6px;
        line-height: 1px;
    }

`
export const HeroH2 = styled.span`
    color: #127cf9;
    font-size: 59px;
    line-height: 70px;
    font-style: bolder;
    text-transform: uppercase;
    font-family: 'Red Hat Display', sans-serif;

    @media screen and (max-width: 918px){
        font-size: 42px;
        line-height: 30px;
    }
    @media screen and (max-width: 900px){
        font-size: 40px;
        line-height: 30px;
    }
    @media screen and (max-width: 768px){
        font-size: 35px;
        line-height: 30px;
    }
    @media screen and (max-width: 575px){
        font-size: 30px;
        line-height: 30px;
    }
    @media screen and (max-width: 500px){
        font-size: 25px;
        line-height: 30px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
        line-height: 30px;
    }
    @media screen and (max-width: 360px){
        font-size: 18px;
        line-height: 30px;
    }
    @media screen and (max-width: 320px){
        font-size: 17px;
        line-height: 5px;
    }
    @media screen and (max-width: 258px){
        font-size: 11px;
        line-height: 5px;
    }
    @media screen and (max-width: 240px){
        font-size: 10px;
        line-height: 2px;
    }
    @media screen and (max-width: 230px){
        font-size: 9px;
        line-height: 1px;
    }
    @media screen and (max-width: 200px){
        font-size: 7px;
        line-height: 1px;
    }
    @media screen and (max-width: 180px){
        font-size: 6px;
        line-height: 1px;
    }

`
export const HeroP = styled.p`
    max-width: 1047px;
    height: 150px;
    margin-left: 46px;
    left: 196px;
    text-align: center;
    color: #fff;
    font-size: 17px;
    padding: 25px 38px;
    font-family: 'Manrope', sans-serif;
    letter-spacing: 0.153462px;


    @media screen and (max-width: 768px){
        font-size: 15px;
        margin: auto;
       
       
    }

    @media screen and (max-width: 480px){
        font-size: 15px;
        margin: auto;
       
    }
    @media screen and (max-width: 190px){
        font-size: 11px;
        margin: auto;

    }
    @media screen and (max-width: 258px){
        font-size: 9px;
        margin: auto;
    }
    @media screen and (max-width: 240px){
        font-size: 8px;
        margin: auto;
    }
    @media screen and (max-width: 230px){
        font-size: 6px;
        margin: auto;
    }
    @media screen and (max-width: 200px){
        font-size: 5px;
        margin: auto;
    }
    @media screen and (max-width: 180px){
        font-size: 5px;
        margin: auto;
    }
    
`

