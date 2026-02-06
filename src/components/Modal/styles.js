import styled from 'styled-components';
import Button from '../Button';
export const Background = styled.div`
    height: 100vh;
    width: 100%;
    z-index: 5;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

export const Container = styled.div`
    background: #000;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px;

    iframe{
        border: none;
    }
`;

export const CloseButton = styled(Button)`
    z-index: 6;
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 20px;
    padding: 10px 15px;
`;
