import styled, { css } from 'styled-components';

const buttonStyles = css`
    color: #ffffff;    
    padding: 10px 20px;
    background-color: transparent;
    border: #ffffff 3px solid;
    border-radius: 30px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;

    &:hover{
        background-color: #ffffff;
        color: #ff0000;
    }
`;

export const ButtonWhite = styled.button`
    ${buttonStyles}
`;

export const ButtonRed = styled.button`
    ${buttonStyles}
    background: #ff0000;
    border: transparent 4px solid;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover{
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background-color: #ffffff;
        color: #ff0000;
    }
`;
