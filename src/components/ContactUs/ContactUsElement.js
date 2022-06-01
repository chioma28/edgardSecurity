import styled from "styled-components";

export const ContactUsContainer = styled.div`
    background: #127cf9;
    height: 95vh;
    width: 100%;
    margin-top: 30px;
    position: relative;
    
  }

    @media screen and (max-width: 768px) {
    padding: 0 5px;
    margin: auto;
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

export const Label = styled.label`
    font-weight: normal;
    font-size: 17px;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    height: 35px;
    font-size: 15px;
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