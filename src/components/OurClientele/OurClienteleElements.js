import styled from "styled-components";

export const ClienteleContainer = styled.div`
// background: #f7f7f7;
font-family: 'Red Hat Display', sans-serif;
width: 100%;
height: 490px;
padding: 0 20px;
margin-top: 30px;
color: #000;

  @media screen and (max-width: 768px) {
    padding: 0 5px;
    margin-top: 50px;
  }

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

export const Heading = styled.h5`
    color: #3a56e8;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
    padding-top: 20px;
   
`;


export const ClientsBg = styled.div`
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
    height: 85%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const Clientele = styled.div`
    height: 100px;
    width: 110px;
    margin-left: 20px;
`;

export const Logo = styled.img`
  height: 90px;
  width: 110px;
`;