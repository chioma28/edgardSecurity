import styled from "styled-components";

export const ContactUsContainer = styled.div`
    background: #127cf9;
    height: 110vh;
    width: 100%;
    margin-top: 30px;
    position: relative;
    font-family: 'Asap', sans-serif;
    
  }

    @media screen and (max-width: 768px) {
    padding: 0 5px;
    margin: auto;
    }
    @media screen and (max-width: 912px) {
        height: 51vh;
    }
    @media screen and (max-width: 820px) {
        height: 59vh;
    }
    @media screen and (max-width: 768px) {
        height: 69vh;
    }
    @media screen and (max-width: 640px) {
        height: 179vh;
    }
    @media screen and (max-width: 540px) {
        height: 92vh;
    }
    @media screen and (max-width: 414px) {
        height: 79vh;
    }
    @media screen and (max-width: 360px) {
        height: 99vh;
    }
    @media screen and (max-width: 375px) {
        height: 99vh;
    }
    @media screen and (max-width: 320px) {
        height: 135vh;
    }
`;
   
export const ContactForm = styled.form`
    background: #fff;
    padding: 25px 50px;;
    width: 66.66% ;
    border-radius: 20px;
    display: flex;
    gap: 4px;
    flex-direction: column;
    position: absolute;
    left: 17%;
    margin-top: -20px;
    
`;

export const Heading = styled.h5`
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 60px;
    padding-top: 30px;
   
`;

export const Label = styled.label`
    font-weight: normal;
    font-size: 17px;
    padding-bottom: 3px;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    height: 35px;
    font-size: 17px;
    padding: 0 5px;
    border: 1px solid #818a91 ;
    border-radius: 4px;

    &:focus {
        border: 3px solid #127cf9 ;
    }
`;

export const Errors = styled.div`
    font-size: 12px;
    color: red;
    margin-top: -5px;
    font-style: italic;
`;
export const Output = styled.div`
    font-size: 13.5px;
    color: green;
    margin-top: 10px;
    font-style: italic;
`;

export const TextArea = styled.textarea`
    font-size: 15px;
    margin-bottom: 10px;
    padding: 0 5px;
    border-radius: 4px;

    &:focus {
        border: 3px solid #127cf9 ;
    }
`;

export const SubmitButton = styled.button`
    height: 35px;
    background: #127cf9;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    font-style: bold;
    cursor: pointer;

    &:hover{
        background: #00bbff;
    }
`;